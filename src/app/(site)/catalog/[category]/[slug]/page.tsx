import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { Gallery } from "@/components/gallery"
import { ChevronRight, Home } from "lucide-react"

// Настройки для PortableText (здесь обрабатываем всё, КРОМЕ картинок, 
// так как картинки мы вынесли в отдельную галерею сверху)
const components = {
  types: {
    file: ({ value }: any) => {
      const projectId = client.config().projectId;
      const dataset = client.config().dataset;
      const id = value.asset._ref.replace('file-', '').replace('-pdf', '.pdf').replace('-xlsx', '.xlsx').replace('-docx', '.docx');
      const url = `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}`;
      return (
        <div className="my-6 p-4 bg-muted rounded-lg border flex items-center justify-between">
          <span className="font-medium text-sm">{value.description || "Скачать документ"}</span>
          <a href={url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 transition-opacity">
            Скачать
          </a>
        </div>
      );
    },
    // Мы специально оставляем обработку image пустой или скрытой, 
    // чтобы картинки не дублировались (они уже будут в Галерее)
    image: () => null, 
  },
};

export default async function PostPage(props: any) {
  const params = await props.params;
  const slug = params?.slug;

  // Запрос: тянем заголовок, контент и сразу все URL картинок для галереи
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    content,
    "categoryTitle": category->title,
    "categorySlug": category->slug.current,
    "gallery": content[_type == "image"].asset->url
  }`;
  
  const post = await client.fetch(query, { slug: slug });

  if (!post) {
    return <div className="py-20 text-center">Запись не найдена</div>;
  }

  return (
    <article className="container mx-auto py-10 px-6 max-w-5xl">
      
      {/* 1. Хлебные крошки (Breadcrumbs) */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <a href="/" className="hover:text-primary flex items-center">
          <Home className="h-4 w-4 mr-1" />
        </a>
        <ChevronRight className="h-4 w-4" />
        <a href="/catalog" className="hover:text-primary">Каталог</a>
        {post.categoryTitle && (
          <>
            <ChevronRight className="h-4 w-4" />
            <span className="capitalize">{post.categoryTitle}</span>
          </>
        )}
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium truncate">{post.title}</span>
      </nav>

      {/* 2. Заголовок */}
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold lg:text-5xl tracking-tight">
          {post.title}
        </h1>
      </header>

      {/* 3. Галерея (Лайтбокс) - появится, если в посте есть хоть одна картинка */}
      {post.gallery && post.gallery.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4 italic text-muted-foreground">Фото / Страницы прайса:</h2>
          <Gallery images={post.gallery} />
        </div>
      )}

      {/* 4. Основной текст и файлы */}
      <div className="prose prose-zinc dark:prose-invert max-w-none border-t pt-8">
        {post.content ? (
          <PortableText value={post.content} components={components} />
        ) : (
          <p className="text-muted-foreground italic">Описание отсутствует.</p>
        )}
      </div>

      {/* 5. Кнопка назад */}
      <div className="mt-20 pt-8 border-t">
        <a 
          href="/catalog" 
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          ← Вернуться в каталог
        </a>
      </div>
    </article>
  );
}
import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"

// Компоненты для вывода картинок и файлов
const components = {
  types: {
    image: ({ value }: any) => {
      const projectId = client.config().projectId;
      const dataset = client.config().dataset;
      // Чистим ID картинки от лишних слов Sanity
      const id = value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp');
      const url = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}`;
      return (
        <div className="my-8">
          <img src={url} alt="Фото" className="rounded-lg border w-full shadow-md" />
        </div>
      );
    },
    file: ({ value }: any) => {
      const projectId = client.config().projectId;
      const dataset = client.config().dataset;
      const id = value.asset._ref.replace('file-', '').replace('-pdf', '.pdf').replace('-xlsx', '.xlsx').replace('-docx', '.docx');
      const url = `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}`;
      return (
        <div className="my-6 p-4 bg-muted rounded-lg border flex items-center justify-between">
          <span className="font-medium text-sm">{value.description || "Скачать документ"}</span>
          <a href={url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">
            Скачать
          </a>
        </div>
      );
    },
  },
};

export default async function PostPage(props: any) {
  // 1. Ждем получения параметров из URL
  const params = await props.params;
  const slug = params?.slug;

  // 2. Выводим отладку в терминал (CMD), чтобы ты видел, что происходит
  console.log("=== ТЕКУЩИЙ SLUG ИЗ БРАУЗЕРА:", slug);

  // 3. Если slug вдруг не пришел, не мучаем базу данных
  if (!slug) return <div className="p-20 text-center">Ошибка: Адрес не определен</div>;

  // 4. Запрос в Sanity (передаем slug явно в объекте)
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  
  try {
    const post = await client.fetch(query, { slug: slug });

    if (!post) {
      return (
        <div className="container mx-auto py-20 px-6 text-center">
          <h1 className="text-2xl font-bold italic text-red-500">Запись "{slug}" не найдена</h1>
          <p className="mt-4">Зайдите в админку и проверьте, что у записи в поле Slug написано именно это слово.</p>
        </div>
      );
    }

    return (
      <article className="container mx-auto py-20 px-6 max-w-4xl">
        <header className="mb-10 border-b pb-6">
          <h1 className="text-4xl font-extrabold lg:text-5xl">{post.title}</h1>
        </header>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {post.content && <PortableText value={post.content} components={components} />}
        </div>
      </article>
    );
  } catch (error) {
    console.error("ОШИБКА ЗАПРОСА В SANITY:", error);
    return <div className="p-20 text-center text-red-500">Ошибка при связи с базой данных</div>;
  }
}
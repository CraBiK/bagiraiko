import { client } from "@/lib/sanity"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ChevronRight, Home } from "lucide-react"

export default async function CategoryPage(props: any) {
  // 1. Получаем параметры из URL
  const params = await props.params;
  const categorySlug = params.category;

  // 2. Запрос: найти все посты, которые относятся к этой категории
  const query = `*[_type == "post" && category->slug.current == $categorySlug] {
    title,
    "slug": slug.current,
    "categoryTitle": category->title,
    "image": content[_type == "image"][0].asset->url
  }`
  
  const posts = await client.fetch(query, { categorySlug });

  // Берем название категории из первого найденного поста (если они есть)
  const categoryName = posts.length > 0 ? posts[0].categoryTitle : "Категория";

  return (
    <div className="container mx-auto py-10 px-6">
      
      {/* Хлебные крошки */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <a href="/" className="hover:text-primary"><Home className="h-4 w-4" /></a>
        <ChevronRight className="h-4 w-4" />
        <a href="/catalog" className="hover:text-primary">Каталог</a>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">{categoryName}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-10">Раздел: {categoryName}</h1>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <a key={post.slug} href={`/catalog/${categorySlug}/${post.slug}`}>
              <Card className="hover:border-primary transition-all overflow-hidden h-full">
                {post.image && (
                  <div className="aspect-video w-full overflow-hidden border-b">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">Посмотреть прайс-лист →</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-xl">
          <p className="text-muted-foreground italic">В этой категории пока нет товаров.</p>
          <a href="/catalog" className="text-blue-600 underline mt-4 inline-block">Вернуться в общий каталог</a>
        </div>
      )}
    </div>
  )
}
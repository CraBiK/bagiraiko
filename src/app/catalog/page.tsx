import { client } from "@/lib/sanity"

export default async function CatalogPage() {
  // Запрос: "Возьми все записи типа post, достань их заголовок и slug"
  const query = `*[_type == "post"] {
    title,
    "slug": slug.current,
    "category": category->slug.current
  }`
  const posts = await client.fetch(query)

  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-10">Каталог продукции</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <a 
            key={post.slug} 
            href={`/catalog/${post.category || 'all'}/${post.slug}`}
            className="block p-6 border rounded-xl hover:border-primary hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-muted-foreground mt-2">Перейти к просмотру →</p>
          </a>
        ))}
      </div>
      
      {posts.length === 0 && (
        <p>В каталоге пока нет записей. Добавьте их в админке!</p>
      )}
    </div>
  )
}
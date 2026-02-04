import { Hero } from "@/components/hero"
import { getCategories } from "@/lib/sanity"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutGrid, ArrowRight } from "lucide-react"

export default async function Home() {
  const categories = await getCategories()

  return (
    <main className="min-h-screen">
      <Hero />
      <section className="container mx-auto px-6 py-20 border-t">
        <div className="flex items-center gap-2 mb-10">
          <LayoutGrid className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Категории продукции</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat: any) => (
            <a key={cat.slug} href={`/catalog/${cat.slug}`}>
              <Card className="group hover:border-primary hover:shadow-lg transition-all overflow-hidden h-full flex flex-col">
                {/* Вывод картинки категории */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                  {cat.image ? (
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground italic text-xs">
                      Нет фото
                    </div>
                  )}
                </div>
                <CardHeader className="flex flex-row items-center justify-between p-4 mt-auto">
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">
                    {cat.title}
                  </CardTitle>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
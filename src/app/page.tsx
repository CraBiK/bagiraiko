import { Hero } from "@/components/hero"
import { getCategories } from "@/lib/sanity"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutGrid, ArrowRight } from "lucide-react"

export default async function Home() {
  // Получаем список категорий из админки
  const categories = await getCategories()

  return (
    <main className="min-h-screen">
      {/* Приветственная секция */}
      <Hero />

      {/* Секция выбора категорий */}
      <section className="container mx-auto px-6 py-20 border-t">
        <div className="flex items-center gap-2 mb-10">
          <LayoutGrid className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Категории продукции</h2>
        </div>

        {categories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat: any) => (
              <a key={cat.slug} href={`/catalog/${cat.slug}`}>
                <Card className="group hover:border-primary hover:shadow-md transition-all h-full cursor-pointer bg-muted/30">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {cat.title}
                    </CardTitle>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Добавьте категории в админке, чтобы они появились здесь.</p>
        )}
      </section>

      {/* Простая секция с информацией */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Нужна консультация?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Наши специалисты помогут подобрать нужную продукцию и предоставят актуальные прайс-листы.
          </p>
          <a 
            href="/contact" 
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Связаться с нами
          </a>
        </div>
      </section>
    </main>
  )
}
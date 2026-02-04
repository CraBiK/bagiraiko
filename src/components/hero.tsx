import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="py-24 px-6 text-center">
      <Badge variant="outline" className="mb-4">
        Новое обновление 2.0
      </Badge>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6">
        Создавай сайты быстрее с <span className="text-blue-600">shadcn/ui</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-8">
        Это твой идеальный фундамент для сайта. Минимум кода, максимум стиля и полный контроль над каждым пикселем.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" asChild>
          <a href="/catalog">Перейти в каталог</a>
        </Button>
        <Button size="lg" variant="outline">Узнать больше</Button>
      </div>
    </section>
  )
}
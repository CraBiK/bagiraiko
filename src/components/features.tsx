import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Rocket, Shield, Zap, Heart } from "lucide-react"

const features = [
  {
    title: "Скорость",
    description: "Наш сайт работает быстрее, чем ты успеешь моргнуть. Всё благодаря Next.js.",
    icon: <Zap className="h-10 w-10 text-yellow-500" />,
  },
  {
    title: "Надежность",
    description: "Безопасность и стабильность — наш главный приоритет. Твои данные под защитой.",
    icon: <Shield className="h-10 w-10 text-green-500" />,
  },
  {
    title: "Легкость",
    description: "Код настолько чистый, что в нем разберется даже твой кот.",
    icon: <Rocket className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "Сделано с душой",
    description: "Мы вкладываем частичку себя в каждую строчку кода и каждый пиксель.",
    icon: <Heart className="h-10 w-10 text-red-500" />,
  },
]

export function Features() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Почему выбирают нас?</h2>
        <p className="text-muted-foreground">Лучшие решения для твоих самых смелых идей</p>
      </div>

      {/* Сетка карточек: 1 колонка на мобилках, 2 на планшетах, 4 на десктопах */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
            <CardHeader>
              <div className="mb-4">{item.icon}</div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
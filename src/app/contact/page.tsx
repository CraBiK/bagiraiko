import { getSettings } from "@/lib/sanity"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default async function ContactPage() {
  const settings = await getSettings()

  return (
    <div className="container mx-auto py-20 px-6 max-w-5xl">
      <h1 className="text-4xl font-extrabold mb-10">Контакты</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Инфо-карточки */}
        <div className="space-y-6">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Телефон</p>
                <p className="text-lg font-bold">{settings?.phone || "Не указан"}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <p className="text-lg font-bold">{settings?.email || "Не указан"}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Адрес</p>
                <p className="text-lg font-bold whitespace-pre-line">{settings?.address || "Не указан"}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Заглушка для карты или формы */}
        <div className="bg-muted rounded-2xl flex items-center justify-center p-10 text-center border-2 border-dashed">
          <div>
            <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold mb-2">График работы</h3>
            <p className="text-muted-foreground">
              Пн-Пт: 09:00 — 18:00<br />
              Сб-Вс: Выходной
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
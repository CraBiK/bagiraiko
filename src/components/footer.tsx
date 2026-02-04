import { getSettings } from "@/lib/sanity"
import { Phone, Mail, MapPin } from "lucide-react"

export async function Footer() {
  const settings = await getSettings()

  return (
    <footer className="border-t bg-muted/40 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Логотип и права */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Bagira<span className="text-blue-600">Web</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Все права защищены.
            </p>
          </div>

          {/* Контакты из админки */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Наши контакты</h3>
            {settings?.phone && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              </div>
            )}
            {settings?.email && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </div>
            )}
          </div>

          {/* Адрес */}
          <div className="space-y-3 text-sm text-muted-foreground">
            <h3 className="font-semibold text-lg text-foreground">Адрес</h3>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1" />
              <span>{settings?.address || "Адрес не указан в админке"}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
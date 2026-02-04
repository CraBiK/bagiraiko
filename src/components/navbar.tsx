import { Button } from "@/components/ui/button"
import { Monitor, ChevronDown } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { getCategories, getSettings } from "@/lib/sanity" // Добавили getSettings
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export async function Navbar() {
  // 1. Получаем данные из Sanity (категории и настройки)
  const categories = await getCategories()
  const settings = await getSettings() // ВОТ ЭТА СТРОЧКА БЫЛА ПРОПУЩЕНА

  return (
    <nav className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Логотип */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl">
          <Monitor className="h-6 w-6 text-primary" />
          <span>Bagira<span className="text-blue-600">Web</span></span>
        </a>

        {/* Навигация (десктоп) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/" className="hover:text-primary transition-colors">Главная</a>
          
          <div className="relative group">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 hover:text-primary outline-none transition-colors py-4">
                  Продукция <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <div className="absolute top-full left-0 hidden group-hover:block pt-0">
                <div className="bg-popover text-popover-foreground border rounded-md shadow-md w-56 p-1 mt-0">
                  {categories.map((cat: any) => (
                    <a 
                      key={cat.slug} 
                      href={`/catalog/${cat.slug}`}
                      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground w-full"
                    >
                      {cat.title}
                    </a>
                  ))}
                </div>
              </div>
            </DropdownMenu>
          </div>

          <a href="/about" className="hover:text-primary transition-colors">О нас</a>
          <a href="/contact" className="hover:text-primary transition-colors">Контакты</a>
        </div>

        {/* Правая часть с кнопками */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button variant="outline" className="hidden sm:flex" asChild>
            {/* Теперь используем settings.priceListUrl */}
            <a href={settings?.priceListUrl || "#"} target="_blank" rel="noopener noreferrer">
              Скачать прайс
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
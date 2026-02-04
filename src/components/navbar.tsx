import { Button } from "@/components/ui/button"
import { Monitor, ChevronDown } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { getCategories } from "@/lib/sanity"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export async function Navbar() {
  // Получаем категории прямо здесь (на сервере)
  const categories = await getCategories()

  return (
    <nav className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Логотип */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl">
          <Monitor className="h-6 w-6 text-primary" />
          <span>Bagira<span className="text-blue-600">Web</span></span>
        </a>

        {/* Навигация */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/" className="hover:text-primary transition-colors">Главная</a>
          
          {/* Динамическое выпадающее меню Категорий */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary outline-none transition-colors">
              Каталог <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {categories.map((cat: any) => (
                <DropdownMenuItem key={cat.slug} asChild>
                  <a href={`/catalog/${cat.slug}`} className="w-full cursor-pointer">
                    {cat.title}
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem className="border-t font-semibold" asChild>
                <a href="/catalog" className="w-full cursor-pointer">Весь каталог</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="/about" className="hover:text-primary transition-colors">О нас</a>
          <a href="/contact" className="hover:text-primary transition-colors">Контакты</a>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button variant="outline" className="hidden sm:flex" asChild>
            <a href="/catalog">Прайс-листы</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
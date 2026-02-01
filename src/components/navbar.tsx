import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle" // Импорт
import { Cat, Menu } from "lucide-react" // Импортируем иконки

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Логотип */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <Cat className="h-6 w-6 text-primary" />
          <span>Bagira<span className="text-blue-600">Web</span></span>
        </div>

        {/* Ссылки для десктопа (скрыты на мобилках) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors">Главная</a>
          <a href="#" className="hover:text-primary transition-colors">Проекты</a>
          <a href="#" className="hover:text-primary transition-colors">О нас</a>
          <a href="#" className="hover:text-primary transition-colors">Контакты</a>
        </div>

        {/* Кнопки справа */}
        <div className="flex items-center gap-4">
          <ModeToggle />
		  <Button variant="ghost" className="hidden sm:flex">Войти</Button>
          <Button>Начать</Button>
          {/* Иконка меню для мобилок */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
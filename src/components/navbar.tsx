export const revalidate = 0;
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
  const categories = await getCategories()

  return (
    <nav className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 font-bold text-xl">
          <Monitor className="h-6 w-6 text-primary" />
          <span>Bagira<span className="text-blue-600">Web</span></span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/" className="hover:text-primary transition-colors">Главная</a>
          
          {/* Меню с открытием по наведению */}
          <div className="relative group">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 hover:text-primary outline-none transition-colors py-4">
                  Продукция <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              {/* Группа group-hover делает меню видимым при наведении на родителя */}
              <div className="absolute top-full left-0 hidden group-hover:block pt-0">
                <div className="bg-popover text-popover-foreground border rounded-md shadow-md w-56 p-1 mt-0">
                  {categories.map((cat: any) => (
                    <a 
                      key={cat.slug} 
                      href={`/catalog/${cat.slug}`}
                      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground w-full"
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

        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button variant="outline" className="hidden sm:flex" asChild>
            <a href="/catalog">Каталог</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
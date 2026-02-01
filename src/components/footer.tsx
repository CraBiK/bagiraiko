export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold">
            Bagira<span className="text-primary">Web</span>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary">Условия использования</a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  )
}
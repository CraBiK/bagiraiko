import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Здесь позже будет Navbar */}
      <Hero />
      <Features />
      {/* Секция для контента (пустая пока что) */}
      <Footer />
    </main>
  )
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar" // Импорт
import { Footer } from "@/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BagiraWeb — Каталог продукции и прайс-листы",
  description: "Официальный каталог продукции ТМ РОКС и других брендов. Актуальные цены и спецификации.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
		<ThemeProvider
          attribute="class"
          defaultTheme="system" // Будет подстраиваться под Windows/Mac
          enableSystem
          disableTransitionOnChange
        >
			<Navbar /> {/* Меню будет на всех страницах */}
			{children}
      <Footer />
		</ThemeProvider>
      </body>
    </html>
  );
}

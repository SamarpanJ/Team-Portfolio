import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollRestoration } from "@/components/scroll-restoration"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Bytovia - Software Development & AI Solutions",
  description:
    "Passionate team of software engineers focused on delivering high-quality, innovative software solutions through intelligent systems and modern engineering practices.",
  generator: 'Next.js',
  keywords: 'software development, AI solutions, machine learning, web development, mobile development, intelligent systems',
  authors: [{ name: 'Bytovia Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} bg-black text-white min-h-screen antialiased overflow-x-hidden`}>
        <ScrollRestoration />
        <div className="relative overflow-x-hidden">
          {/* Enhanced background pattern */}
          <div className="fixed inset-0 bg-black" />
          
          {/* Subtle grid pattern */}
          <div className="fixed inset-0 opacity-[0.02] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white,transparent_70%)]" />
          </div>

          {/* Dynamic background glow effects */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full opacity-30 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            </div>
            <div className="absolute bottom-0 right-0 w-full h-full opacity-20 overflow-hidden">
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Noise texture overlay */}
          <div className="fixed inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJ0dXJidWxlbmNlIiBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]" />
          </div>

          {/* Content */}
          <div className="relative z-10 overflow-x-hidden">
            <Suspense fallback={<div className="h-20" />}>
              <Navigation />
            </Suspense>
            <main className="relative pt-20 overflow-x-hidden">
              {children}
            </main>
          </div>

          {/* Global Scroll to Top Button */}
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}

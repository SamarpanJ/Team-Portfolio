"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollRestoration() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0)
  }, [pathname])

  // Also handle browser back/forward navigation
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      // If page is loaded from cache (back/forward navigation), scroll to top
      if (event.persisted) {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('pageshow', handlePageShow)

    return () => {
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [])

  return null // This component doesn't render anything
} 
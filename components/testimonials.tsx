"use client"

import { motion, useAnimation, useMotionValue, useSpring, animate } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Star, Quote, Play, Pause, Sparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  title?: string
  content: string
  rating: number
  avatar: string
  accentColor: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Technology Leader",
    content: "The intelligent systems they built have transformed our entire workflow. Their attention to detail and innovative approach to problem-solving is unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    content: "Working with this team was a game-changer for our startup. They delivered a scalable, robust solution that perfectly aligned with our vision.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Emily Watson",
    title: "Engineer",
    content: "The AI-powered solutions they developed have revolutionized how we handle data processing. Their expertise is remarkable and the results speak for themselves.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    name: "James Kim",
    title: "Product Manager",
    content: "From concept to deployment, the entire experience was seamless. They understood our complex requirements and delivered beyond expectations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    content: "The scalability and reliability of their solutions have been crucial for our growth. Their proactive approach sets them apart from the competition.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-violet-500 to-purple-500"
  },
  {
    id: 6,
    name: "David Park",
    title: "Software Developer",
    content: "Their technical expertise and innovative solutions have accelerated our product development by months. Exceptional team with great communication.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-indigo-500 to-blue-500"
  },
  {
    id: 7,
    name: "Maria Garcia",
    title: "Business Owner",
    content: "Their forward-thinking approach and cutting-edge solutions have positioned us at the forefront of our industry. Highly recommend their services.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-rose-500 to-pink-500"
  },
  {
    id: 8,
    name: "Alex Thompson",
    content: "The architectural decisions and performance optimizations they implemented are truly world-class. Outstanding collaboration throughout the project.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=2070&auto=format&fit=crop",
    accentColor: "from-amber-500 to-yellow-500"
  }
]

// Triple the testimonials for ultra-smooth infinite scroll
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

export function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [touchedCard, setTouchedCard] = useState<number | null>(null)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<any>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 15 })
  const x = useMotionValue(0)
  
  const totalWidth = 440 * testimonials.length
  const SPEED = 1.8 // Fixed fast speed

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) / 20
    const y = (event.clientY - rect.top - rect.height / 2) / 20
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    mouseX.set(0)
    mouseY.set(0)
    setHoveredCard(null)
  }

  const startAnimation = () => {
    if (animationRef.current) {
      animationRef.current.stop()
    }
    
    const currentX = x.get()
    const duration = isMobile ? 100 / SPEED : 80 / SPEED // Slower on mobile for better performance
    
    // Ultra smooth infinite animation
    animationRef.current = animate(x, [currentX, currentX - totalWidth], {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    })
  }

  const stopAnimation = () => {
    if (animationRef.current) {
      animationRef.current.stop()
    }
  }

  // Desktop hover handlers
  const handleCardHover = (index: number) => {
    if (isMobile) return
    setHoveredCard(index)
    setIsPaused(true)
    stopAnimation()
  }

  const handleCardLeave = () => {
    if (isMobile) return
    setHoveredCard(null)
    setIsPaused(false)
    startAnimation()
  }

  // Mobile touch handlers
  const handleTouchStart = (index: number) => {
    if (!isMobile) return
    setTouchedCard(index)
    setIsPaused(true)
    stopAnimation()
  }

  const handleTouchEnd = () => {
    if (!isMobile) return
    setTouchedCard(null)
    setIsPaused(false)
    startAnimation()
  }

  const handleTouchCancel = () => {
    if (!isMobile) return
    setTouchedCard(null)
    setIsPaused(false)
    startAnimation()
  }

  // Prevent touch events from interfering with scroll and text selection
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchedCard !== null) {
      e.preventDefault()
    }
  }

  // Prevent context menu and text selection on long press
  const handleContextMenu = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault()
    }
  }

  useEffect(() => {
    if (!isPaused) {
      startAnimation()
    } else {
      stopAnimation()
    }
    
    return () => stopAnimation()
  }, [isPaused, isMobile])

  useEffect(() => {
    startAnimation() // Auto-start on mount
    return () => stopAnimation()
  }, [isMobile])

  // Global touch end listener for mobile to ensure state cleanup
  useEffect(() => {
    if (!isMobile) return

    const handleGlobalTouchEnd = () => {
      if (touchedCard !== null) {
        setTouchedCard(null)
        setIsPaused(false)
        startAnimation()
      }
      
      // Force reset any stuck hover states on mobile
      if (containerRef.current) {
        containerRef.current.style.pointerEvents = 'none'
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = 'auto'
          }
        }, 10)
      }
    }

    const handleGlobalTouchCancel = () => {
      if (touchedCard !== null) {
        setTouchedCard(null)
        setIsPaused(false)
        startAnimation()
      }
      
      // Force reset any stuck hover states on mobile
      if (containerRef.current) {
        containerRef.current.style.pointerEvents = 'none'
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = 'auto'
          }
        }, 10)
      }
    }

    document.addEventListener('touchend', handleGlobalTouchEnd, { passive: true })
    document.addEventListener('touchcancel', handleGlobalTouchCancel, { passive: true })

    return () => {
      document.removeEventListener('touchend', handleGlobalTouchEnd)
      document.removeEventListener('touchcancel', handleGlobalTouchCancel)
    }
  }, [isMobile, touchedCard])

  return (
    <section 
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-900/50 to-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Ultra Premium Background Effects - Simplified for mobile */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/25 to-purple-600/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>
        
        {/* Floating Particles - Disabled on mobile for performance */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ x: springX, y: springY }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/25 rounded-full"
                style={{
                  left: `${20 + (i * 7)}%`,
                  top: `${30 + (i * 4)}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.1, 0.5, 0.1],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 6 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Premium Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] mb-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-gray-300 font-medium tracking-wide">Client Stories</span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 animate-pulse" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Loved by
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              People
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real stories from real people who've experienced the difference our solutions make
          </motion.p>
        </motion.div>

        {/* Clean Flowing Container */}
        <div className="relative">
          {/* Subtle Gradient Masks - Only show on larger screens */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-black via-black/95 to-transparent z-20 pointer-events-none hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-black via-black/95 to-transparent z-20 pointer-events-none hidden sm:block" />
          
          {/* Ultra Smooth Flowing Track */}
          <div className="py-6 sm:py-8 px-1 sm:px-2 md:px-4" style={{ 
            overflow: 'hidden', 
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            perspective: isMobile ? 'none' : '1000px'
          }}>
            <motion.div
              className="flex gap-3 sm:gap-5 md:gap-6 lg:gap-7"
              style={{ 
                x, 
                width: 'fit-content',
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className={`flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] lg:w-[420px] ${isMobile ? 'touch-manipulation' : 'cursor-pointer group'}`}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                  onTouchStart={() => handleTouchStart(index)}
                  onTouchEnd={handleTouchEnd}
                  onTouchCancel={handleTouchCancel}
                  onTouchMove={handleTouchMove}
                  onContextMenu={handleContextMenu}
                  whileHover={isMobile ? {} : { 
                    y: -6, 
                    scale: 1.008,
                  }}
                  whileTap={isMobile ? { scale: 0.98 } : {}}
                  transition={{ 
                    type: "spring", 
                    stiffness: isMobile ? 300 : 500, 
                    damping: 30,
                    duration: isMobile ? 0.3 : 0.2 
                  }}
                  style={isMobile ? {
                    WebkitUserSelect: 'none',
                    userSelect: 'none',
                    WebkitTouchCallout: 'none',
                    WebkitTapHighlightColor: 'transparent'
                  } : {}}
                >
                  <div 
                    className="relative h-full px-1 py-2"
                    style={isMobile ? {
                      WebkitUserSelect: 'none',
                      userSelect: 'none',
                      WebkitTouchCallout: 'none'
                    } : {}}
                  >
                    {/* Ultra Premium Card */}
                    <div className={`relative p-3 sm:p-4 md:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-2xl border transition-all duration-300 shadow-xl h-full min-h-[220px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px] flex flex-col overflow-visible ${(hoveredCard === index || touchedCard === index) ? 'border-white/[0.15] shadow-2xl' : 'border-white/[0.06]'}`}>
                      
                      {/* Subtle Background Glow */}
                      <div className={`absolute inset-0 transition-opacity duration-300 bg-gradient-to-br ${testimonial.accentColor} blur-3xl scale-150 -z-10 ${(hoveredCard === index || touchedCard === index) ? 'opacity-[0.08]' : 'opacity-0'}`} />
                      
                      {/* Floating Quote Mark */}
                      <motion.div
                        className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10"
                        animate={(hoveredCard === index || touchedCard === index) ? {
                          rotate: [0, 6, -6, 0],
                          scale: [1, 1.1, 1],
                        } : {}}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${testimonial.accentColor} backdrop-blur-xl flex items-center justify-center transition-opacity duration-300 ${(hoveredCard === index || touchedCard === index) ? 'opacity-30' : 'opacity-20'}`}>
                          <Quote className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                        </div>
                      </motion.div>

                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                          >
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400 drop-shadow-sm" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className={`leading-relaxed mb-3 sm:mb-4 md:mb-6 lg:mb-8 font-light text-xs sm:text-sm md:text-base transition-colors duration-300 flex-grow pr-8 sm:pr-12 md:pr-14 lg:pr-16 ${(hoveredCard === index || touchedCard === index) ? 'text-white' : 'text-gray-200'}`}>
                        "{testimonial.content}"
                      </blockquote>

                      {/* Clean Author Section */}
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-auto">
                        <Avatar className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ring-1 transition-all duration-300 ${(hoveredCard === index || touchedCard === index) ? 'ring-white/20' : 'ring-white/10'}`}>
                          <AvatarImage 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="object-cover"
                          />
                          <AvatarFallback className={`bg-gradient-to-br ${testimonial.accentColor} text-white font-semibold text-xs sm:text-sm`}>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="min-w-0 flex-1">
                          <h4 className="text-white font-semibold text-xs sm:text-sm md:text-base leading-tight">
                            {testimonial.name}
                          </h4>
                          {testimonial.title && (
                            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                              {testimonial.title}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
} 
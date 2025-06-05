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
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<any>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 15 })
  const x = useMotionValue(0)
  
  const totalWidth = 440 * testimonials.length

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) / 20
    const y = (event.clientY - rect.top - rect.height / 2) / 20
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setHoveredCard(null)
  }

  const startAnimation = () => {
    if (animationRef.current) {
      animationRef.current.stop()
    }
    
    const currentX = x.get()
    const duration = 90 / speed
    
    // Start infinite animation from current position
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

  useEffect(() => {
    if (isPlaying) {
      startAnimation()
    } else {
      stopAnimation()
    }
    
    return () => stopAnimation()
  }, [isPlaying, speed])

  useEffect(() => {
    return () => stopAnimation()
  }, [])

  return (
    <section 
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-900/50 to-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Ultra Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/25 to-purple-600/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>
        
        {/* Floating Particles */}
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
            className="text-5xl sm:text-6xl md:text-7xl font-light mb-8 tracking-tight leading-none"
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
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real stories from real people who've experienced the difference our solutions make
          </motion.p>
        </motion.div>

        {/* Premium Controls */}
        <motion.div 
          className="flex justify-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 px-3 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/[0.08] shadow-2xl w-full max-w-md sm:max-w-none sm:w-auto">
            <Button
              variant="ghost"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-gray-300 hover:text-white active:text-white text-sm px-3 sm:px-4 py-2 h-auto rounded-2xl transition-colors duration-150 hover:bg-white/[0.05] active:bg-white/[0.1] active:scale-95 w-full sm:w-auto touch-manipulation"
            >
              {isPlaying ? (
                <><Pause className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> Pause</>
              ) : (
                <><Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> Play</>
              )}
            </Button>
            
            <div className="w-full h-px sm:w-px sm:h-6 bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {[
                  { label: 'Slow', value: 0.4 },
                  { label: 'Normal', value: 1 },
                  { label: 'Fast', value: 1.8 }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSpeed(option.value)}
                    className={`flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs rounded-2xl font-medium transition-colors duration-150 touch-manipulation active:scale-95 ${
                      speed === option.value 
                        ? 'bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border border-violet-500/30 shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.05] active:bg-white/[0.1] active:text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clean Flowing Container */}
        <div className="relative">
          {/* Subtle Gradient Masks - Hidden on mobile, visible on larger screens */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black via-black/95 to-transparent z-20 pointer-events-none hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black via-black/95 to-transparent z-20 pointer-events-none hidden sm:block" />
          
          {/* Flowing Track */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-4 sm:gap-6 md:gap-8"
              style={{ x, width: 'fit-content' }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[420px] group"
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    duration: 0.4 
                  }}
                >
                  <div className="relative h-full">
                    {/* Clean Premium Card */}
                    <div className="relative p-4 sm:p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/[0.06] group-hover:border-white/[0.15] transition-all duration-500 shadow-xl group-hover:shadow-2xl h-full overflow-hidden min-h-[240px] sm:min-h-[260px] md:min-h-[280px] flex flex-col">
                      
                      {/* Subtle Background Glow */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 bg-gradient-to-br ${testimonial.accentColor} blur-3xl scale-150 -z-10`} />
                      
                      {/* Floating Quote Mark */}
                      <motion.div
                        className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10"
                        animate={hoveredCard === index ? {
                          rotate: [0, 6, -6, 0],
                          scale: [1, 1.1, 1],
                        } : {}}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br ${testimonial.accentColor} opacity-20 backdrop-blur-xl flex items-center justify-center group-hover:opacity-30 transition-opacity duration-500`}>
                          <Quote className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                        </div>
                      </motion.div>

                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4 sm:mb-5 md:mb-6">
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
                      <blockquote className="text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 font-light text-sm sm:text-base group-hover:text-white transition-colors duration-500 flex-grow">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Clean Author Section */}
                      <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                        <Avatar className="w-10 h-10 sm:w-12 sm:h-12 ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500">
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
                          <h4 className="text-white font-semibold text-sm sm:text-base leading-tight">
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
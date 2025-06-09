"use client"

import { motion, useScroll, useInView } from "framer-motion"
import { useRef, useEffect, useState, useMemo, useCallback } from "react"
import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Footer } from "@/components/footer"

const PremiumAnimation = dynamic(
  () => import('@/components/premium-animations').then(mod => mod.PremiumAnimation),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-80 flex items-center justify-center">
        <div className="animate-pulse bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 w-full h-full rounded-lg" />
      </div>
    )
  }
)

// Premium flowing text animations
const flowingTextVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    rotateX: -90
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  }
}

const staggerFlowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const textRevealVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const FloatingWord = React.memo(({ word, delay = 0 }: { word: string; delay?: number }) => {
  const animationConfig = useMemo(() => ({
    opacity: [0, 1, 1, 0.7, 1],
    y: [20, 0, -5, 0, -2],
    transition: {
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1]
    }
  }), [delay])

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={animationConfig}
      className="inline-block mx-1"
    >
      {word}
    </motion.span>
  )
})
FloatingWord.displayName = 'FloatingWord'

const MorphingText = React.memo(({ words, className = "" }: { words: string[]; className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentWord = useMemo(() => words[currentIndex], [words, currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={className}
    >
      {currentWord}
    </motion.span>
  )
})
MorphingText.displayName = 'MorphingText'

const FlowingValueCard = React.memo(({ title, description, index }: { title: string; description: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const floatingDotsAnimation = useMemo(() => 
    [...Array(2)].map((_, i) => ({
      key: i,
      animate: {
        x: [0, 100, -50, 150],
        y: [0, -80, 120, -40],
        opacity: [0, 1, 0.5, 0],
        transition: {
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 2 + index * 0.3
        }
      },
      style: {
        left: `${20 + i * 40}%`,
        top: `${30 + i * 30}%`
      }
    }))
  , [index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-xl border border-zinc-700/30 p-8 h-full"
        whileHover={{ 
          scale: 1.02,
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{ willChange: 'transform' }}
          animate={{
            x: ["-100%", "100%"],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.8
            }
          }}
        />
        
        <div className="absolute inset-0 overflow-hidden">
          {floatingDotsAnimation.map((dot) => (
            <motion.div
              key={dot.key}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={dot.animate}
              style={{ ...dot.style, willChange: 'transform, opacity' }}
            />
          ))}
        </div>
        
        <motion.h3
          className="text-2xl font-bold text-white mb-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="text-zinc-300 leading-relaxed relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
})
FlowingValueCard.displayName = 'FlowingValueCard'

const ScrollingText = React.memo(({ text, speed = 15, direction = "left" }: { text: string; speed?: number; direction?: "left" | "right" }) => {
  const animationConfig = useMemo(() => ({
    x: direction === "left" ? ["0%", "-100%"] : ["0%", "100%"],
    transition: {
      duration: speed,
      repeat: Infinity,
      ease: "linear"
    }
  }), [direction, speed])

  const repeatedText = useMemo(() => 
    `${text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${text}`
  , [text])

  return (
    <div className="flex">
      <motion.div 
        className="whitespace-nowrap text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wider text-white select-none pointer-events-none"
        animate={animationConfig}
        dangerouslySetInnerHTML={{ __html: repeatedText }}
      />
    </div>
  )
})
ScrollingText.displayName = 'ScrollingText'

const GeometricVisual = React.memo(({ type }: { type: 'ai' | 'web' | 'ecommerce' | 'automation' | 'software' | 'cloud' }) => {
  return (
    <div className="w-full h-80">
      <PremiumAnimation type={type} />
    </div>
  )
})
GeometricVisual.displayName = 'GeometricVisual'

// Component for rendering focus area styles - extracted from IIFE to fix Fast Refresh
const FocusAreaStyles = React.memo(({ visualType }: { visualType: 'ai' | 'web' | 'ecommerce' | 'automation' | 'software' | 'cloud' }) => {
  const boxStyles = {
    ai: {
      gradient: "from-gray-950/98 via-gray-900/95 to-gray-950/98",
      border: "border-gray-800/60",
      hoverBorder: "group-hover:border-gray-700/80",
      accent: "from-transparent via-violet-600/15 to-transparent group-hover:via-violet-500/25",
      bottomAccent: "from-violet-500/70 via-purple-500/70 to-indigo-500/70",
      cornerDot: "bg-violet-500/20 group-hover:bg-violet-500/40",
      titleHover: "group-hover:from-violet-400 group-hover:to-purple-400",
      tagColors: "from-violet-500/10 via-purple-500/10 to-indigo-500/10 group-hover:from-violet-500/20 group-hover:via-purple-500/20 group-hover:to-indigo-500/20"
    },
    web: {
      gradient: "from-gray-950/98 via-slate-900/95 to-gray-950/98",
      border: "border-slate-800/60",
      hoverBorder: "group-hover:border-slate-700/80",
      accent: "from-transparent via-cyan-600/15 to-transparent group-hover:via-cyan-500/25",
      bottomAccent: "from-cyan-500/70 via-blue-500/70 to-indigo-500/70",
      cornerDot: "bg-cyan-500/20 group-hover:bg-cyan-500/40",
      titleHover: "group-hover:from-cyan-400 group-hover:to-blue-400",
      tagColors: "from-cyan-500/10 via-blue-500/10 to-indigo-500/10 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-indigo-500/20"
    },
    ecommerce: {
      gradient: "from-gray-950/98 via-emerald-950/95 to-gray-950/98",
      border: "border-emerald-900/60",
      hoverBorder: "group-hover:border-emerald-800/80",
      accent: "from-transparent via-emerald-600/15 to-transparent group-hover:via-emerald-500/25",
      bottomAccent: "from-emerald-500/70 via-green-500/70 to-teal-500/70",
      cornerDot: "bg-emerald-500/20 group-hover:bg-emerald-500/40",
      titleHover: "group-hover:from-emerald-400 group-hover:to-green-400",
      tagColors: "from-emerald-500/10 via-green-500/10 to-teal-500/10 group-hover:from-emerald-500/20 group-hover:via-green-500/20 group-hover:to-teal-500/20"
    },
    automation: {
      gradient: "from-gray-950/98 via-amber-950/95 to-gray-950/98",
      border: "border-amber-900/60",
      hoverBorder: "group-hover:border-amber-800/80",
      accent: "from-transparent via-amber-600/15 to-transparent group-hover:via-amber-500/25",
      bottomAccent: "from-amber-500/70 via-orange-500/70 to-red-500/70",
      cornerDot: "bg-amber-500/20 group-hover:bg-amber-500/40",
      titleHover: "group-hover:from-amber-400 group-hover:to-orange-400",
      tagColors: "from-amber-500/10 via-orange-500/10 to-red-500/10 group-hover:from-amber-500/20 group-hover:via-orange-500/20 group-hover:to-red-500/20"
    },
    software: {
      gradient: "from-gray-950/98 via-rose-950/95 to-gray-950/98",
      border: "border-rose-900/60",
      hoverBorder: "group-hover:border-rose-800/80",
      accent: "from-transparent via-rose-600/15 to-transparent group-hover:via-rose-500/25",
      bottomAccent: "from-rose-500/70 via-pink-500/70 to-fuchsia-500/70",
      cornerDot: "bg-rose-500/20 group-hover:bg-rose-500/40",
      titleHover: "group-hover:from-rose-400 group-hover:to-pink-400",
      tagColors: "from-rose-500/10 via-pink-500/10 to-fuchsia-500/10 group-hover:from-rose-500/20 group-hover:via-pink-500/20 group-hover:to-fuchsia-500/20"
    },
    cloud: {
      gradient: "from-gray-950/98 via-sky-950/95 to-gray-950/98",
      border: "border-sky-900/60",
      hoverBorder: "group-hover:border-sky-800/80",
      accent: "from-transparent via-sky-600/15 to-transparent group-hover:via-sky-500/25",
      bottomAccent: "from-sky-500/70 via-blue-500/70 to-cyan-500/70",
      cornerDot: "bg-sky-500/20 group-hover:bg-sky-500/40",
      titleHover: "group-hover:from-sky-400 group-hover:to-blue-400",
      tagColors: "from-sky-500/10 via-blue-500/10 to-cyan-500/10 group-hover:from-sky-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20"
    }
  };
  
  const style = boxStyles[visualType] || boxStyles.ai;
  
  return (
    <>
      {/* Premium outer glow effect - very subtle */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${style.accent} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700`} />
      
      {/* Main premium container with unique gradient */}
      <div className={`relative rounded-3xl bg-gradient-to-br ${style.gradient} backdrop-blur-2xl border ${style.border} ${style.hoverBorder} p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500`}>
        {/* Subtle inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.008] via-transparent to-transparent rounded-3xl" />
        
        {/* Very subtle accent on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${style.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
          initial={false}
        />
        
        {/* Top accent line */}
        <div className={`absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r ${style.accent} transition-all duration-500`} />
        
        {/* Bottom accent with unique color */}
        <div className={`absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r ${style.bottomAccent} group-hover:w-full transition-all duration-1000 ease-out`} />
        
        {/* Corner accents with theme color */}
        <div className={`absolute top-6 right-6 w-2 h-2 ${style.cornerDot} rounded-full group-hover:scale-150 transition-all duration-300`} />
        <div className={`absolute bottom-6 left-6 w-1.5 h-1.5 ${style.cornerDot} rounded-full group-hover:scale-150 transition-all duration-300 delay-100`} />
      </div>
    </>
  );
});
FocusAreaStyles.displayName = 'FocusAreaStyles';

// Component for rendering focus area content 
const FocusAreaContent = React.memo(({ area }: { area: { visualType: 'ai' | 'web' | 'ecommerce' | 'automation' | 'software' | 'cloud'; title: string; description: string; highlights: string[] } }) => {
  const style = {
    ai: { titleHover: "group-hover:from-violet-400 group-hover:to-purple-400", tagColors: "from-violet-500/10 via-purple-500/10 to-indigo-500/10 group-hover:from-violet-500/20 group-hover:via-purple-500/20 group-hover:to-indigo-500/20" },
    web: { titleHover: "group-hover:from-cyan-400 group-hover:to-blue-400", tagColors: "from-cyan-500/10 via-blue-500/10 to-indigo-500/10 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-indigo-500/20" },
    ecommerce: { titleHover: "group-hover:from-emerald-400 group-hover:to-green-400", tagColors: "from-emerald-500/10 via-green-500/10 to-teal-500/10 group-hover:from-emerald-500/20 group-hover:via-green-500/20 group-hover:to-teal-500/20" },
    automation: { titleHover: "group-hover:from-amber-400 group-hover:to-orange-400", tagColors: "from-amber-500/10 via-orange-500/10 to-red-500/10 group-hover:from-amber-500/20 group-hover:via-orange-500/20 group-hover:to-red-500/20" },
    software: { titleHover: "group-hover:from-rose-400 group-hover:to-pink-400", tagColors: "from-rose-500/10 via-pink-500/10 to-fuchsia-500/10 group-hover:from-rose-500/20 group-hover:via-pink-500/20 group-hover:to-fuchsia-500/20" },
    cloud: { titleHover: "group-hover:from-sky-400 group-hover:to-blue-400", tagColors: "from-sky-500/10 via-blue-500/10 to-cyan-500/10 group-hover:from-sky-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20" }
  }[area.visualType] || { titleHover: "group-hover:from-violet-400 group-hover:to-purple-400", tagColors: "from-violet-500/10 via-purple-500/10 to-indigo-500/10 group-hover:from-violet-500/20 group-hover:via-purple-500/20 group-hover:to-indigo-500/20" };

  return (
    <div className="relative z-10">
      <motion.h3 
        className={`text-3xl lg:text-4xl font-bold text-gray-100 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r ${style.titleHover} group-hover:bg-clip-text transition-all duration-500`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {area.title}
      </motion.h3>
      
      <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light group-hover:text-gray-300 transition-colors duration-300">
        {area.description}
      </p>
      
      <div className="flex flex-wrap gap-3">
        {area.highlights.map((highlight: string, highlightIndex: number) => (
          <motion.span
            key={highlightIndex}
            className={`px-5 py-2.5 text-sm font-medium bg-gradient-to-r ${style.tagColors} text-gray-300 rounded-full border border-gray-700/40 backdrop-blur-sm group-hover:border-gray-600/60 group-hover:text-gray-200 transition-all duration-300 hover:scale-105`}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {highlight}
          </motion.span>
        ))}
      </div>
    </div>
  );
});
FocusAreaContent.displayName = 'FocusAreaContent';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const coreValues = useMemo(() => [
    {
      title: "Technical Excellence",
      description: "Technically skilled team driven by curiosity with strong focus on problem-solving, quality code, and real-world results."
    },
    {
      title: "Global Collaboration", 
      description: "Diverse, multilingual team working across time zones - fluent in English, French, Hindi, Bengali, and Odia."
    },
    {
      title: "Innovation-Driven",
      description: "Collaborative work culture that embraces innovative solutions and modern engineering practices for long-term value."
    },
    {
      title: "Practical Solutions",
      description: "We build tools that are practical, adaptable, and designed to solve real business challenges effectively."
    },
    {
      title: "Quality & Adaptability",
      description: "We maintain highest standards while ensuring solutions are built for long-term value and adaptability."
    },
    {
      title: "AI & Intelligent Systems",
      description: "Leveraging AI and machine learning to create intelligent systems that enhance business operations."
    }
  ], [])

  const languages = useMemo(() => [
    { name: "English", flag: "🇺🇸", proficiency: "Fluent" },
    { name: "French", flag: "🇫🇷", proficiency: "Fluent" },
    { name: "Hindi", flag: "🇮🇳", proficiency: "Native" },
    { name: "Bengali", flag: "🇮🇳", proficiency: "Native" },
    { name: "Odia", flag: "🇮🇳", proficiency: "Native" },
  ], [])

  const focusAreas = useMemo(() => [
    {
      title: "AI-enabled platforms and assistants",
      description: "Custom AI agents, LLM integration, conversational AI, and RAG systems using TensorFlow, PyTorch, and Hugging Face",
      highlights: ["RAG Systems", "Custom AI Agents", "LLM Integration"],
      visualType: "ai" as const
    },
    {
      title: "Full-stack web development",
      description: "MERN/PERN stacks, Next.js, React.js with modern UI using Three.js for interactive web experiences",
      highlights: ["React/Next.js", "MERN/PERN Stacks", "Three.js/WebGL"],
      visualType: "web" as const
    },
    {
      title: "E-commerce platforms and marketplaces",
      description: "Modern user interfaces with secure payment integration and scalable online marketplace solutions",
      highlights: ["Payment Integration", "Modern UI", "Scalable Platforms"],
      visualType: "ecommerce" as const
    },
    {
      title: "Business automation tools",
      description: "End-to-end workflow management and automation tools to improve business efficiency",
      highlights: ["Workflow Automation", "API Integration", "Process Optimization"],
      visualType: "automation" as const
    },
    {
      title: "Custom software solutions",
      description: "Tailored software solutions using modern frameworks like Django, Flask, FastAPI for specific business needs",
      highlights: ["Django/Flask", "FastAPI", "Custom Solutions"],
      visualType: "software" as const
    },
    {
      title: "Cloud and serverless solutions",
      description: "AWS, Google Cloud, Vercel deployments with Docker, serverless architectures, and real-time communication",
      highlights: ["AWS/GCP/Vercel", "Serverless", "Docker"],
      visualType: "cloud" as const
    }
  ], [])

  return (
    <div ref={containerRef} className="min-h-screen text-white overflow-hidden relative" style={{ transform: 'translate3d(0,0,0)' }}>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <motion.div
          ref={heroRef}
          variants={staggerFlowVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <motion.div variants={flowingTextVariants} className="overflow-hidden mb-8">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{ transformOrigin: "50% 100%" }}
            >
              We are
            </motion.h1>
          </motion.div>

          <motion.div variants={flowingTextVariants} className="overflow-hidden mb-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-zinc-300 to-white bg-clip-text text-transparent">
              <MorphingText 
                words={["Innovators", "Builders", "Creators", "Dreamers", "Engineers"]}
                className="block"
              />
            </h2>
          </motion.div>

          <motion.div variants={flowingTextVariants} className="max-w-3xl mx-auto">
            <motion.p 
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              A passionate team of software engineers focused on delivering high-quality, innovative software solutions that transform businesses globally
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      <div className="relative py-16 overflow-hidden">
        <div className="opacity-[0.12]">
          <ScrollingText text="DISCOVER • EXPLORE • INNOVATE • CREATE" direction="left" speed={15} />
        </div>
      </div>

      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-xl text-zinc-400 max-w-3xl mx-auto"
            >
              The principles that guide our work and shape our culture
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <FlowingValueCard
                key={index}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What We Do
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-xl text-zinc-400 max-w-4xl mx-auto"
            >
              Comprehensive technology solutions tailored to transform your business
            </motion.p>
          </motion.div>

          <div className="space-y-32">
            {focusAreas.map((area, index) => {
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Text Content - Premium styled box with unique design per service */}
                  <motion.div
                    className={`${!isEven ? 'lg:order-2' : 'lg:order-1'} group`}
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                  >
                    <div className="relative overflow-hidden">
                      {/* Different premium styles for each service */}
                      <FocusAreaStyles visualType={area.visualType} />
                      <FocusAreaContent area={area} />
                    </div>
                  </motion.div>

                  {/* Animation Content - No box around it */}
                  <motion.div
                    className={`${!isEven ? 'lg:order-1' : 'lg:order-2'} flex items-center justify-center`}
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="relative w-full max-w-lg">
                      <GeometricVisual type={area.visualType} />
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Experience Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Project Experience
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-zinc-400 max-w-4xl mx-auto"
            >
              Our team has delivered impactful solutions across various industries and technologies
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerFlowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "E-commerce Platforms",
                description: "Modern user interfaces with secure payment integration and scalable marketplace solutions",
                icon: "🛒",
                technologies: ["Next.js", "Payment Gateways", "Modern UI"]
              },
                             {
                 title: "AI-driven Tools",
                 description: "Custom AI agents, LLM integration, and intelligent automation solutions",
                 icon: "🤖",
                 technologies: ["TensorFlow", "LLM Integration", "RAG Systems"]
               },
                             {
                 title: "Business Dashboards",
                 description: "Business insights and monitoring solutions for real-time decision making",
                 icon: "📊",
                 technologies: ["React", "Real-time Updates", "Business Intelligence"]
               },
              {
                title: "Automation Tools",
                description: "End-to-end workflow management and business process automation",
                icon: "⚙️",
                technologies: ["API Integration", "Workflow Automation", "Process Optimization"]
              },
              {
                title: "Interactive Web Apps",
                description: "3D rendering technologies and immersive user experiences for modern web",
                icon: "🎮",
                technologies: ["Three.js", "WebGL", "Interactive UI"]
              }
            ].map((project, index) => (
              <FlowingValueCard
                key={index}
                title={`${project.icon} ${project.title}`}
                description={`${project.description}\n\nTechnologies: ${project.technologies.join(', ')}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Languages
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-zinc-400 max-w-3xl mx-auto"
            >
              Bridging cultures and communication across global markets
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 8,
                  rotateX: 3,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="relative group cursor-pointer perspective-1000"
              >
                {/* Animated background glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2))",
                      "linear-gradient(90deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))",
                      "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Main card container */}
                <motion.div 
                  className="relative bg-gradient-to-br from-zinc-900/90 via-zinc-800/60 to-zinc-900/90 backdrop-blur-xl border border-zinc-700/50 group-hover:border-zinc-500/70 rounded-2xl p-6 text-center h-full overflow-hidden transition-all duration-500"
                  whileHover={{
                    background: "linear-gradient(135deg, rgba(24, 24, 27, 0.95), rgba(39, 39, 42, 0.7), rgba(24, 24, 27, 0.95))"
                  }}
                >
                  {/* Animated shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Flag with enhanced animation */}
                  <motion.div 
                    className="text-4xl mb-4 relative z-10"
                    whileHover={{ 
                      scale: 1.15,
                      rotateZ: [0, -5, 5, 0],
                      transition: { 
                        scale: { duration: 0.3 },
                        rotateZ: { duration: 0.6, repeat: 1 }
                      }
                    }}
                  >
                    {language.flag}
                  </motion.div>
                  
                  {/* Language name with gradient text on hover */}
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2 relative z-10 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                    whileHover={{ y: -2 }}
                  >
                    {language.name}
                  </motion.h3>
                  
                  {/* Proficiency with enhanced styling */}
                  <motion.p 
                    className="text-zinc-400 text-sm relative z-10 group-hover:text-zinc-300 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {language.proficiency}
                  </motion.p>
                  
                  {/* Animated bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700 ease-out"
                  />
                  
                  {/* Corner accent dots */}
                  <motion.div
                    className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"
                  />
                  <motion.div
                    className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 delay-100"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Start?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
            >
              Let's transform your ideas into remarkable digital experiences that drive growth and innovation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Get In Touch
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

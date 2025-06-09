"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Brain, Smartphone, Globe, Server, CheckCircle, Stars, Zap, Cpu, Shield, Rocket, ExternalLink, Github, Linkedin, Mail, Users, Clock, Target } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { Footer } from "@/components/footer"
import { InteractiveGlobe } from "@/components/hero"
import { TestimonialsSection } from "@/components/testimonials"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

// Helper function to convert service titles to URL slugs for homepage
function getServiceSlugFromTitle(title: string): string {
  const slugMap: { [key: string]: string } = {
    'Custom Software Development': 'custom-software',
    'AI & Intelligent Systems': 'ai-systems',
    'Full-stack Web Development': 'web-development',
    'Cloud & Infrastructure': 'cloud-infrastructure'
  }
  return slugMap[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export default function HomePage() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions using MERN/PERN stacks, Django, Flask, and FastAPI for your specific business needs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Intelligent Systems",
      description: "Custom AI agents, LLM integration, and RAG systems using TensorFlow, PyTorch, and Hugging Face",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-stack Web Development",
      description: "MERN/PERN stacks, Next.js, React.js applications with modern UI using Three.js for interactive experiences",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud & Infrastructure",
      description: "AWS, Google Cloud, Vercel deployments with Docker, serverless architectures, and real-time communication",
      color: "from-orange-500 to-red-500",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "50+", icon: <Code className="w-5 h-5" /> },
    { label: "Happy Clients", value: "30+", icon: <Stars className="w-5 h-5" /> },
    { label: "Years Experience", value: "5+", icon: <Zap className="w-5 h-5" /> },
    { label: "Technologies", value: "25+", icon: <Cpu className="w-5 h-5" /> },
  ]

  const whyChooseUs = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Global Communication",
      description: "Multilingual team fluent in English, French, Hindi, Bengali, and Odia for seamless international collaboration",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Diverse Technical Expertise",
      description: "Skilled in JavaScript/TypeScript, Python, C/C++, with experience in modern frameworks and AI technologies",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Innovation-Driven Culture",
      description: "Collaborative team focused on problem-solving, quality code, and real-world results driven by curiosity",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Quality & Security",
      description: "Rigorous testing and quality control ensure robust, secure, and scalable solutions with modern best practices",
    },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 hero-glow rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        </div>

        {/* Three.js Globe Background */}
        <Suspense fallback={<div className="absolute inset-0" />}>
          <InteractiveGlobe />
        </Suspense>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="w-full">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Stars className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-gray-300">Software Development & AI Solutions</span>
            </motion.div>

            <div className="mb-6 sm:mb-8 w-full" style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tight w-full" style={{ lineHeight: '1.2', overflow: 'visible' }}>
                <span className="gradient-text block w-full" style={{ paddingBottom: '0.125rem' }}>Building Intelligent</span>
                <span className="accent-gradient font-medium block w-full" style={{ paddingBottom: '0.125rem' }}>Systems with Purpose</span>
              </h1>
            </div>

                      <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-2 sm:px-0 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            We are a passionate team of software engineers delivering high-quality, innovative software solutions. By leveraging intelligent systems and modern engineering practices, we build tools that are practical, adaptable, and built for long-term value.
          </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0 w-full max-w-lg sm:max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Link
                href="/services"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto"
              >
                Explore Our Services
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 sm:px-8 sm:py-4 glass-card text-white font-medium rounded-full transition-all duration-300 hover:bg-gray-800/60 border border-gray-700/50 hover:border-gray-600/60 text-sm sm:text-base w-full sm:w-auto"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0 w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="dev-stat-card p-3 sm:p-6 text-center group w-full relative"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="binary-bg"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-2 sm:mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {stat.icon}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">{stat.label}</div>
  
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements - Hide on small screens to prevent overflow */}
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full opacity-60 hidden md:block"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-2 h-2 bg-purple-400 rounded-full opacity-40 hidden md:block"
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-1 h-1 bg-cyan-400 rounded-full opacity-60 hidden md:block"
          animate={{ scale: [0.5, 1.5, 0.5], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Code className="w-3 h-3 text-blue-400" />
              <span className="text-xs text-blue-300 font-medium uppercase tracking-wider">Services</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 gradient-text px-2 sm:px-0">What We Build</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              From AI-powered applications to scalable cloud solutions, we create technology that transforms businesses
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="dev-service-card p-4 sm:p-8 group transition-all duration-300 w-full relative"
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <div className="particle-overlay"></div>
                <div className="grid-overlay"></div>
                <div className="relative z-10">
                  <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 sm:mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm sm:text-base mb-4">
                    {service.description}
                  </p>
                  
                  {/* Get Started Button */}
                  <div className="mt-auto">
                    <Link href={`/services?service=${getServiceSlugFromTitle(service.title)}#calculator`}>
                      <motion.button
                        className={`w-full px-4 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-current/25 group-hover:scale-105 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Rocket className="w-4 h-4" />
                        Get Started
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
              <span className="text-sm text-gray-300 font-medium">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-6 sm:mb-8 gradient-text px-2 sm:px-0 tracking-tight">
              Built for Excellence
            </h2>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 font-light">
              Discover what makes us the right choice for your next software development project
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Main card */}
                <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 group-hover:border-white/[0.1] transition-all duration-500">
                  {/* Full border gradient accents */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-b-2xl"></div>
                  <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-l-2xl"></div>
                  <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-r-2xl"></div>
                  
                  {/* Icon container */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 flex items-center justify-center group-hover:from-blue-900/30 group-hover:to-purple-900/30 group-hover:border-blue-500/30 transition-all duration-500">
                      <div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-500">
                        {reason.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-base">
                      {reason.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-transparent to-black/50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 gradient-text px-2 sm:px-0">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
              Let's collaborate to build intelligent solutions that drive your business forward and create lasting impact.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-lg sm:max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full transition-all duration-300 hover:from-blue-600 hover:to-purple-700 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="px-6 py-3 sm:px-8 sm:py-4 glass-card text-white font-medium rounded-full transition-all duration-300 hover:bg-gray-800/60 border border-gray-700/50 hover:border-gray-600/60 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Learn More About Us
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

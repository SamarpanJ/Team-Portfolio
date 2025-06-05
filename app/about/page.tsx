"use client"

import { motion } from "framer-motion"
import {
  Code,
  Brain,
  Smartphone,
  Globe,
  Server,
  Database,
  Cloud,
  Zap,
  Cpu,
  Shield,
  Rocket,
  CheckCircle,
  Users,
  Target,
  Award,
  TrendingUp,
  Clock,
  Lightbulb,
  HeartHandshake,
  Workflow,
  GitBranch,
  TestTube,
  Settings,
  Layers,
  Monitor,
  Palette,
  Package,
  Lock,
  ArrowRight,
  Stars,
  Eye,
  Compass,
  BookOpen,
  MessageSquare,
  Handshake,
  Briefcase,
  MessageCircle,
  Mic,
  BarChart3,
  Bot,
  Gamepad2,
  ShoppingCart
} from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence & Innovation",
      description: "We strive for technical excellence while embracing innovative solutions that push boundaries and solve real-world problems."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description: "Our diverse, international team brings unique perspectives and works seamlessly together across different time zones."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "We stay ahead of technology trends through continuous education and skill development in emerging technologies."
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Client Partnership",
      description: "We build long-term relationships by understanding and exceeding client expectations with personalized solutions."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality & Security",
      description: "We maintain the highest standards of code quality, security practices, and performance optimization."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "We architect solutions that grow with your business and adapt to changing technological landscapes."
    }
  ]

  const languages = [
    { name: "English", flag: "🇺🇸", proficiency: "Native/Fluent" },
    { name: "French", flag: "🇫🇷", proficiency: "Professional" },
    { name: "Hindi", flag: "🇮🇳", proficiency: "Native/Fluent" },
    { name: "Bengali", flag: "🇮🇳", proficiency: "Native/Fluent" },
    { name: "Odia", flag: "🇮🇳", proficiency: "Native/Fluent" },
  ]

  const focusAreas = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-enabled platforms and assistants",
      description: "Building intelligent systems and AI-powered applications using cutting-edge machine learning technologies",
      highlights: ["LLM Integration", "Custom AI Agents", "RAG Systems"]
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Full-stack web and mobile application development",
      description: "Comprehensive solutions from frontend to backend with modern frameworks and responsive design",
      highlights: ["React/Next.js", "Mobile Apps", "Cloud Architecture"]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "NLP tools and language model integration",
      description: "Advanced natural language processing solutions with state-of-the-art language models",
      highlights: ["Sentiment Analysis", "Conversational AI", "Multilingual Support"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Serverless and edge-first solutions",
      description: "Modern, scalable cloud-native applications optimized for performance and cost efficiency",
      highlights: ["Edge Computing", "Microservices", "Auto-scaling"]
    },
  ]

  const teamValues = [
    {
      title: "Technically skilled, diverse, and driven by curiosity",
      description: "Our team combines deep technical expertise with diverse cultural backgrounds and an insatiable curiosity for solving complex problems."
    },
    {
      title: "Strong focus on problem-solving, quality code, and real-world results",
      description: "We prioritize understanding the root cause of problems and delivering solutions that create measurable business impact."
    },
    {
      title: "Collaborative, innovation-driven work culture and methodology",
      description: "We foster an environment where creativity thrives, ideas are shared freely, and innovation is encouraged at every level."
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Successful delivery of complex projects across various industries with measurable business impact and client satisfaction."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective",
      description: "International team with diverse cultural insights enabling 24/7 development cycle and global market understanding."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cutting-Edge Technology",
      description: "Always working with the latest technologies and best practices, ensuring your solutions are future-ready and competitive."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliable Delivery",
      description: "Agile methodologies and efficient processes ensure consistent, on-time project delivery with transparent communication."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Long-term Partnership",
      description: "We provide ongoing support, maintenance, and growth strategies for sustainable long-term business relationships."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security measures and compliance with international standards ensuring your data and systems are protected."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 hero-glow rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-gray-300">About Our Team</span>
            </motion.div>

            <div className="mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tight mb-4 sm:mb-6 gradient-text">
                Building Tomorrow's Solutions Today
              </h1>
            </div>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed font-light px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are a passionate team of software engineers dedicated to transforming ideas into intelligent, 
              scalable solutions. With expertise spanning AI, full-stack development, and cloud technologies, 
              we deliver innovation that drives real business value.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Culture & Values Section - Apple-inspired clean design */}
      <section className="py-24 px-4 border-t border-gray-800/50 bg-gradient-to-b from-white/[0.01] to-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] mb-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></div>
              <span className="text-sm text-white font-medium tracking-wide">Team Culture</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 text-white tracking-tight">How We Work</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Our team combines technical excellence with collaborative innovation to deliver exceptional results
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="relative p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] group-hover:bg-white/[0.04] group-hover:border-white/[0.1] transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/15 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-emerald-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-light">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Communication Section - Stripe-inspired gradient design */}
      <section className="py-24 px-4 border-t border-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-100 font-medium tracking-wider">Global Communication</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent tracking-tight">Languages We Speak</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Our multilingual capabilities enable seamless collaboration with clients from different regions and cultures
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.1] text-center group-hover:border-cyan-400/40 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 filter drop-shadow-lg">
                      {language.flag}
                    </div>
                    
                    <h3 className="text-sm font-semibold text-white mb-3 tracking-wide">
                      {language.name}
                    </h3>
                    
                    <div className="px-3 py-1.5 text-xs bg-white/[0.05] text-cyan-200 rounded-lg border border-white/[0.1] font-medium">
                      {language.proficiency}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Areas Section - Tesla-inspired sleek design */}
      <section className="py-24 px-4 border-t border-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-black/40 backdrop-blur-2xl border border-purple-500/30 mb-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-400/50"></div>
              <span className="text-sm text-purple-100 font-medium tracking-wider uppercase">Areas of Expertise</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
              Next-Generation Solutions
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
              We are actively building next-generation systems centered around these key technological domains
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative h-full bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-2xl border border-purple-500/20 rounded-3xl p-8 group-hover:border-purple-400/40 transition-all duration-500 shadow-2xl group-hover:shadow-purple-500/10">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-400/30 flex items-center justify-center shadow-lg">
                        <div className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                          {area.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                          {area.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed font-light">
                          {area.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-purple-500/20">
                      {area.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-xl text-xs font-medium text-purple-200 backdrop-blur-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section - Google Material Design inspired */}
      <section className="py-24 px-4 border-t border-gray-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 backdrop-blur-xl border border-green-500/20 mb-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
              <span className="text-sm text-green-100 font-medium tracking-wide">Core Values</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent tracking-tight">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Our fundamental principles that shape every decision we make and every solution we create
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div 
                  className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 group-hover:bg-white/[0.05] group-hover:border-green-400/30 transition-all duration-500 shadow-xl group-hover:shadow-2xl"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center shadow-lg">
                        <div className="text-green-400 group-hover:text-green-300 transition-colors duration-300">
                          {value.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-light text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Linear-inspired minimal design */}
      <section className="py-24 px-4 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-orange-500/5 backdrop-blur-xl border border-orange-500/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-1 h-4 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
              <span className="text-sm text-orange-100 font-medium tracking-wide">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 bg-gradient-to-r from-orange-200 to-red-200 bg-clip-text text-transparent tracking-tight">
              The Smart Choice
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Here's why forward-thinking companies choose us as their technology partner
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-xl border border-white/[0.05] group-hover:bg-white/[0.04] group-hover:border-orange-400/30 transition-all duration-500">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/15 to-red-500/15 border border-orange-500/25 flex items-center justify-center">
                        <div className="text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                          {reason.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">
                        {reason.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-light text-sm">
                        {reason.description}
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/[0.05] group-hover:border-orange-400/20 transition-colors duration-300">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-gray-900/20 to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 gradient-text">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Let's discuss how our team can help transform your ideas into practical, 
              adaptable solutions built for long-term value.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full transition-all duration-300 hover:from-blue-600 hover:to-purple-700 flex items-center justify-center gap-2"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 glass-card text-white font-medium rounded-full transition-all duration-300 hover:bg-gray-800/60 border border-gray-700/50 hover:border-gray-600/60 flex items-center justify-center gap-2"
              >
                View Our Services
                <Stars className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 
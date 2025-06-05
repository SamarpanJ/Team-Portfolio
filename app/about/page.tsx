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

      {/* Team Culture & Values Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <HeartHandshake className="w-3 h-3 text-blue-400" />
              <span className="text-xs text-blue-300 font-medium uppercase tracking-wider">Team Culture</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 gradient-text px-2 sm:px-0">How We Work</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Our team combines technical excellence with collaborative innovation to deliver exceptional results
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-12 max-w-5xl mx-auto">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                className="glass-card p-4 sm:p-8 rounded-xl group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0 mt-1 sm:mt-2 group-hover:text-blue-300 transition-colors" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-base sm:text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Communication Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MessageSquare className="w-3 h-3 text-cyan-400" />
              <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">Global Communication</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 gradient-text px-2 sm:px-0">Languages We Speak</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Our multilingual capabilities enable seamless collaboration with clients from different regions and cultures
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                className="glass-card p-4 sm:p-6 rounded-xl text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{language.flag}</div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:text-cyan-300 transition-colors">{language.name}</h3>
                <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{language.proficiency}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Areas Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Target className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-purple-300 font-medium uppercase tracking-wider">Current Focus</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 gradient-text px-2 sm:px-0">Areas of Expertise</h2>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed px-4 sm:px-0">
              We are actively building next-generation systems centered around these key technological domains
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className="glass-card p-4 sm:p-8 rounded-xl group hover:bg-gray-800/60 transition-all duration-300 relative overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative z-10">
                  <div className="p-3 sm:p-4 rounded-lg bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-2 py-1 sm:px-3 bg-gray-800/50 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700/30 group-hover:border-purple-500/30 transition-colors"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <HeartHandshake className="w-3 h-3 text-green-400" />
              <span className="text-xs text-green-300 font-medium uppercase tracking-wider">Core Values</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-light mb-8 gradient-text">What Drives Us</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
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
                className="glass-card p-8 rounded-xl group hover:bg-gray-800/60 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-500/20 text-green-400 group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Award className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-orange-300 font-medium uppercase tracking-wider">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-light mb-8 gradient-text">The Smart Choice</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
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
                className="glass-card p-8 rounded-xl group hover:bg-gray-800/60 transition-all duration-300 relative overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 rounded-lg bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30 group-hover:scale-110 transition-all duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {reason.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
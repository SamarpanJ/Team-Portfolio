"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Brain, Smartphone, Globe, Server, CheckCircle, Stars, Zap, Cpu, Shield, Rocket, ExternalLink, Github, Linkedin, Mail, Users, Clock, Target } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import Footer from "@/components/footer"
import { InteractiveGlobe } from "@/components/hero"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function HomePage() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions built with modern technologies for your specific business needs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Intelligent Systems",
      description: "Smart applications powered by machine learning and natural language processing",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web & Mobile Solutions",
      description: "Responsive web applications and cross-platform mobile apps that engage users",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud & Infrastructure",
      description: "Scalable cloud architectures and robust backend systems for growing businesses",
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
      title: "Results-Driven Approach",
      description: "We focus on delivering solutions that drive real business value and measurable outcomes",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Team",
      description: "Skilled professionals with diverse backgrounds and cutting-edge technical expertise",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Reliable Delivery",
      description: "Consistent, on-time project delivery with transparent communication throughout",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensure robust, secure, and scalable solutions",
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
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Stars className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-gray-300">Software Development & Intelligent Systems</span>
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
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We transform ideas into intelligent software solutions that drive innovation and deliver exceptional user experiences
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0 w-full max-w-lg sm:max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-3 sm:p-6 rounded-lg text-center group w-full"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center mb-2 sm:mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
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
              transition={{ duration: 0.6 }}
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
                className="glass-card p-4 sm:p-8 rounded-xl group hover:bg-gray-800/60 transition-all duration-300 w-full"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 sm:mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-gray-900/20 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span className="text-xs text-green-300 font-medium uppercase tracking-wider">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 gradient-text px-2 sm:px-0">Built for Excellence</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Discover what makes us the right choice for your next software development project
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="glass-card p-4 sm:p-8 rounded-xl group hover:bg-gray-800/60 transition-all duration-300 w-full"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-green-500/20 text-green-400 group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-green-300 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-transparent to-black/50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              transition={{ duration: 0.8, delay: 0.3 }}
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

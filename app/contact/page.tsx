"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Mail, Github, Linkedin, Send, MapPin, Phone, Clock, MessageSquare, Calendar, Users, Zap, ChevronDown, Check, Terminal, Code, Globe, Smartphone, Brain, Cpu, Settings, Stars } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Footer from "@/components/footer"

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all required fields
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert("Please fill in all required fields")
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Reset form or show success message
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleServiceSelect = (serviceValue: string) => {
    setFormData({
      ...formData,
      service: serviceValue,
    })
    setIsServiceDropdownOpen(false)
  }

  const services = [
    { 
      value: "web-development", 
      label: "Web Development", 
      icon: <Globe className="w-4 h-4" />, 
      description: "Frontend & fullstack web applications (React, Next.js, MERN/PERN)"
    },
    { 
      value: "software-development", 
      label: "Software Development", 
      icon: <Code className="w-4 h-4" />, 
      description: "Desktop applications and system software"
    },
    { 
      value: "ai-solutions", 
      label: "AI & Intelligent Systems", 
      icon: <Brain className="w-4 h-4" />, 
      description: "AI agents and LLM integration"
    },
    { 
      value: "consulting", 
      label: "Technical Consulting", 
      icon: <MessageSquare className="w-4 h-4" />, 
      description: "Strategic technology guidance"
    },
    { 
      value: "other", 
      label: "Other Services", 
      icon: <Settings className="w-4 h-4" />, 
      description: "Custom solutions and integrations"
    },
  ]

  const selectedService = services.find(service => service.value === formData.service)

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      label: "EMAIL",
      value: "team@bytovia.dev",
      description: "Send us your project details",
    },
    {
      icon: <Phone className="w-5 h-5 text-green-400" />,
      label: "LANGUAGES",
      value: "Multilingual Support",
      description: "English, French, Hindi, Bengali, Odia",
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-400" />,
      label: "LOCATION",
      value: "Global Remote Team",
      description: "Working across timezones",
    },
    {
      icon: <Clock className="w-5 h-5 text-orange-400" />,
      label: "RESPONSE TIME",
      value: "Within 24 hours",
      description: "We'll get back to you quickly",
    },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "#" },
  ]

  const stats = [
    { label: "Projects Completed", value: "50+", icon: <Code className="w-5 h-5" /> },
    { label: "Happy Clients", value: "30+", icon: <Stars className="w-5 h-5" /> },
    { label: "Years Experience", value: "5+", icon: <Zap className="w-5 h-5" /> },
    { label: "Technologies", value: "25+", icon: <Cpu className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,15,15,0.8)_0%,rgba(0,0,0,1)_100%)]" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-800/20 to-purple-700/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-700/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-orange-700/10 to-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300 uppercase tracking-wider">~/contact</span>

            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-12 text-white" style={{ lineHeight: '1.2' }}>
              Let's Build Something 
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Amazing Together</span>
            </h1>
            
            <motion.p
              className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Ready to transform your ideas into intelligent solutions? Connect with our multilingual team (English, French, Hindi, Bengali, Odia) and let's discuss your project.
            </motion.p>
          </motion.div>

          {/* Enhanced Stats */}
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
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div 
                ref={formRef}
                className="relative bg-black border border-gray-800/50 rounded-2xl p-8 group hover:border-gray-700/60 transition-all duration-300"
                style={{
                  background: '#000000',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.02)'
                }}
              >
                {/* Icon */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-800/60 rounded-xl flex items-center justify-center group-hover:bg-gray-700/60 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-gray-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium text-white mb-3">Get In Touch</h2>
                    <p className="text-gray-400 leading-relaxed">Let's discuss your project and bring your ideas to life</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-900/40 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 focus:bg-gray-900/60 transition-all duration-300 hover:border-gray-700/70 hover:bg-gray-900/50"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="relative group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-900/40 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 focus:bg-gray-900/60 transition-all duration-300 hover:border-gray-700/70 hover:bg-gray-900/50"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Project Type <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <motion.button
                        type="button"
                        onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                        className="w-full px-4 py-4 bg-gray-900/40 border border-gray-800/50 rounded-xl text-white focus:outline-none focus:border-gray-700 focus:bg-gray-900/60 transition-all duration-300 hover:border-gray-700/70 hover:bg-gray-900/50 flex items-center justify-between"
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center gap-3">
                          {selectedService ? (
                            <>
                              <div className="text-blue-400">
                                {selectedService.icon}
                              </div>
                              <div>
                                <span className="text-white font-medium">{selectedService.label}</span>
                                <p className="text-xs text-gray-400">{selectedService.description}</p>
                              </div>
                            </>
                          ) : (
                            <span className="text-gray-500">Select a project type</span>
                          )}
                        </div>
                        <motion.div
                          animate={{ rotate: isServiceDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {isServiceDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl z-[9999] overflow-hidden max-h-64 overflow-y-auto"
                          >
                            {services.map((service, index) => (
                              <motion.button
                                key={service.value}
                                type="button"
                                onClick={() => handleServiceSelect(service.value)}
                                className="w-full px-4 py-3 text-left hover:bg-gray-800/60 transition-colors duration-200 flex items-center gap-3 group border-b border-gray-800/30 last:border-b-0"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                whileHover={{ x: 3 }}
                              >
                                <div className="text-blue-400 group-hover:scale-105 transition-transform duration-200">
                                  {service.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="text-white group-hover:text-gray-200 transition-colors font-medium">
                                    {service.label}
                                  </div>
                                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors mt-1">
                                    {service.description}
                                  </div>
                                </div>
                                {formData.service === service.value && (
                                  <Check className="w-4 h-4 text-green-400 ml-auto" />
                                )}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                      Project Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-900/40 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 focus:bg-gray-900/60 transition-all duration-300 resize-none hover:border-gray-700/70 hover:bg-gray-900/50"
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gray-800/60 hover:bg-gray-700/70 border border-gray-700/50 hover:border-gray-600/70 text-gray-200 hover:text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                    whileHover={{ scale: isSubmitting ? 1 : 1.01, y: -1 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Enhanced Contact Info Sidebar */}
            <motion.div
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              {/* Enhanced Contact Information */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">Contact Information</h3>
                </div>

                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="dev-stat-card p-6 group relative overflow-hidden cursor-pointer"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02, y: -8 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="binary-bg"></div>
                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 group-hover:scale-110 transition-transform duration-300">
                            {info.icon}
                          </div>
                          <div className="flex-1 min-w-0 overflow-hidden">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{info.label}</p>
                            <p className="text-white font-medium mb-1 text-sm leading-tight break-all">{info.value}</p>
                            <p className="text-sm text-gray-400">{info.description}</p>
                          </div>
                        </div>
     
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced Social Links */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">Connect With Us</h3>
                </div>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-14 h-14 bg-slate-800/50 border border-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-slate-500/70 transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-200">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Enhanced Quick Info */}
              <div className="matrix-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Why Choose Us?</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Expert team with 5+ years experience",
                    "50+ successful projects delivered", 
                    "Cutting-edge technology stack",
                    "24/7 support and maintenance"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

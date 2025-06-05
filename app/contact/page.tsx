"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Mail, Github, Linkedin, Send, MapPin, Phone, Clock, MessageSquare, Calendar, Users, Zap, ChevronDown, Check, Terminal, Code } from "lucide-react"
import { useState } from "react"
import Footer from "@/components/footer"

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
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
    { value: "web-development", label: "Web Development", icon: "⚡", color: "from-slate-600 to-slate-700" },
    { value: "mobile-development", label: "Mobile Development", icon: "📱", color: "from-slate-600 to-slate-700" },
    { value: "ai-solutions", label: "AI Solutions", icon: "🤖", color: "from-slate-600 to-slate-700" },
    { value: "iot-development", label: "IoT Development", icon: "🔗", color: "from-slate-600 to-slate-700" },
    { value: "consulting", label: "Technical Consulting", icon: "💡", color: "from-slate-600 to-slate-700" },
    { value: "other", label: "Other", icon: "⚙️", color: "from-slate-600 to-slate-700" },
  ]

  const selectedService = services.find(service => service.value === formData.service)

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-slate-400" />,
      label: "Email",
      value: "team@intelligentsystems.dev",
      description: "Send us your project details",
    },
    {
      icon: <Phone className="w-5 h-5 text-slate-400" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call for urgent inquiries",
    },
    {
      icon: <MapPin className="w-5 h-5 text-slate-400" />,
      label: "Location",
      value: "Global Remote Team",
      description: "Working across timezones",
    },
    {
      icon: <Clock className="w-5 h-5 text-slate-400" />,
      label: "Response Time",
      value: "Within 24 hours",
      description: "We'll get back to you quickly",
    },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#", color: "hover:text-slate-300" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#", color: "hover:text-slate-300" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "#", color: "hover:text-slate-300" },
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50+", label: "Projects Delivered" },
    { icon: <Calendar className="w-6 h-6" />, value: "5+", label: "Years Experience" },
    { icon: <Terminal className="w-6 h-6" />, value: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,15,15,0.8)_0%,rgba(0,0,0,1)_100%)]" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-800/20 to-slate-700/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp}>
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
              <span className="text-xs sm:text-sm text-slate-300">Get In Touch</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 sm:mb-12 text-white" style={{ lineHeight: '1.2', overflow: 'visible', paddingBottom: '0.5rem' }}>
              Let's Build Something 
              <span className="block text-slate-300">Together</span>
            </h1>
            
            <motion.p
              className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to transform your ideas into intelligent solutions? Connect with our team and let's discuss your project.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 p-4 sm:p-6 rounded-lg text-center hover:bg-slate-900/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-slate-400 mb-2 sm:mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 sm:py-24 px-4 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 p-4 sm:p-8 rounded-lg">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
                  <h2 className="text-2xl sm:text-3xl font-light text-white">Send Us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Custom Service Dropdown */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      Service Interest
                    </label>
                    <div className="relative">
                      <motion.button
                        type="button"
                        onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-between"
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center gap-3">
                          {selectedService ? (
                            <>
                              <span className="text-lg">{selectedService.icon}</span>
                              <span className="text-white">{selectedService.label}</span>
                            </>
                          ) : (
                            <span className="text-slate-500">Select a service</span>
                          )}
                        </div>
                        <motion.div
                          animate={{ rotate: isServiceDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {isServiceDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-2xl z-50 overflow-hidden"
                          >
                            {services.map((service, index) => (
                              <motion.button
                                key={service.value}
                                type="button"
                                onClick={() => handleServiceSelect(service.value)}
                                className="w-full px-4 py-3 text-left hover:bg-slate-800/60 transition-colors duration-200 flex items-center gap-3 group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                whileHover={{ x: 5 }}
                              >
                                <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-sm group-hover:bg-slate-600/50 transition-colors duration-200">
                                  {service.icon}
                                </div>
                                <span className="text-white group-hover:text-slate-200 transition-colors">
                                  {service.label}
                                </span>
                                {formData.service === service.value && (
                                  <Check className="w-4 h-4 text-slate-400 ml-auto" />
                                )}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500/20 transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-600"
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              {/* Contact Information */}
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium mb-8 text-white">Contact Information</h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-shrink-0">{info.icon}</div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{info.label}</p>
                        <p className="text-white font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-slate-400">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-6 text-white">Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-6 text-white">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">Expert team with 5+ years experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">50+ successful projects delivered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">Cutting-edge technology stack</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">24/7 support and maintenance</span>
                  </div>
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

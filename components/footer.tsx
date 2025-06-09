"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Code, 
  Github, 
  Linkedin, 
  Mail, 
  Twitter,
  Heart,
  Coffee,
  Terminal,
  Globe,
  MapPin
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: "easeOut" },
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { 
      icon: <Github className="w-4 h-4" />, 
      label: "GitHub", 
      href: "#",
      color: "hover:text-gray-300"
    },
    { 
      icon: <Linkedin className="w-4 h-4" />, 
      label: "LinkedIn", 
      href: "#",
      color: "hover:text-blue-400"
    },
    { 
      icon: <Twitter className="w-4 h-4" />, 
      label: "Twitter", 
      href: "#",
      color: "hover:text-sky-400"
    },
    { 
      icon: <Mail className="w-4 h-4" />, 
      label: "Email", 
      href: "mailto:team@bytovia.dev",
      color: "hover:text-emerald-400"
    },
  ]

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Python", "AI/ML", "Cloud", "DevOps"
  ]

  return (
    <footer className="relative border-t border-gray-800/40 bg-gray-950/50">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {/* Brand Section - Mobile */}
            <motion.div variants={fadeInUp} className="mb-6">
              <Link href="/" className="flex items-center gap-3 group mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                                  <span className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                  Bytovia
                </span>
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Software Development & AI Solutions
                </span>
                </div>
              </Link>
              
              <p className="text-gray-400 leading-relaxed mb-3 max-w-md text-sm">
                Building intelligent systems with purpose. We transform ideas into innovative software solutions through cutting-edge technology and expert craftsmanship.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-800/60 text-gray-300 rounded border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-8 h-8 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700/50`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation and Contact - Side by Side on Mobile */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Navigation - Mobile */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-gray-400" />
                  Navigation
                </h3>
                <ul className="space-y-1.5">
                  {navigationLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
                      >
                        <div className="w-1 h-1 bg-gray-500 rounded-full" />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info - Mobile */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Globe className="w-3 h-3 text-gray-400" />
                  Get In Touch
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Mail className="w-3 h-3 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <a 
                        href="mailto:team@bytovia.dev"
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-xs break-all"
                      >
                        team@bytovia.dev
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3 h-3 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Location</p>
                      <p className="text-gray-300 text-xs">Global Remote Team</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Collaboration CTA - Mobile */}
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-300 font-medium">Ready to collaborate?</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Let's discuss your next project and bring your ideas to life.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-4 gap-8 mb-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {/* Brand Section - Desktop */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                  Bytovia
                </span>
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Software Development & AI Solutions
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed mb-4 max-w-md text-sm">
              Building intelligent systems with purpose. We transform ideas into innovative software solutions through cutting-edge technology and expert craftsmanship.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 text-xs bg-gray-800/60 text-gray-300 rounded border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-8 h-8 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700/50`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation - Desktop */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Terminal className="w-3 h-3 text-gray-400" />
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <div className="w-1 h-1 bg-gray-500 rounded-full" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Desktop */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Globe className="w-3 h-3 text-gray-400" />
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail className="w-3 h-3 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <a 
                    href="mailto:team@bytovia.dev"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    team@bytovia.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                  <p className="text-gray-300 text-sm">Global Remote Team</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-300 font-medium">Ready to collaborate?</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Let's discuss your next project and bring your ideas to life.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="pt-4 lg:pt-6 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-3 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4 text-xs text-gray-500">
              <span>&copy; {currentYear} Bytovia. All rights reserved.</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-400 animate-pulse" />
                <span>for innovation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 
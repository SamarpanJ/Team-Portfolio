"use client"

import React, { Suspense } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Brain,
  Database,
  Cloud,
  Globe,
  Cpu,
  ShoppingCart,
  Settings,
  Palette,
  Server,
  Layers,
  Shield,
  ExternalLink,
  Users,
  CheckCircle2,
  Search,
  Rocket,
  Target,
  Lightbulb,
  HeartHandshake,
  Clock,
  Award,
  Workflow,
  Briefcase
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

function ServicesPageContent() {
  const coreServices = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and operational needs",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Full-stack web applications",
        "Custom API development",
        "Database optimization",
        "Modern framework implementation",
        "Real-time communication features"
      ],
      color: "from-blue-500 to-cyan-500",
      deliverables: ["Source Code", "Documentation", "Deployment Guide"]
    },
    {
      title: "AI & Intelligent Systems",
      description: "Advanced AI solutions and intelligent systems to automate processes and enhance decision-making capabilities",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "Custom AI agents and assistants",
        "Machine learning model integration",
        "Intelligent automation systems",
        "Conversational AI solutions",
        "Predictive analytics implementation"
      ],
      color: "from-purple-500 to-pink-500",
      deliverables: ["AI Agents", "ML Models", "Analytics Dashboard"]
    },
    {
      title: "Full-stack Web Development",
      description: "Complete web applications with modern UI design and interactive experiences using Three.js and WebGL",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Full-stack web applications",
        "Modern responsive design",
        "Interactive experiences with Three.js/WebGL",
        "Progressive web applications",
        "Performance optimization"
      ],
      color: "from-green-500 to-emerald-500",
      deliverables: ["Web Applications", "UI Components", "Documentation"]
    },
    {
      title: "Database Solutions",
      description: "Comprehensive database design and optimization for efficient data management and storage solutions",
      icon: <Database className="w-8 h-8" />,
      features: [
        "Relational database design",
        "NoSQL document databases",
        "Real-time data synchronization",
        "Database performance optimization",
        "Vector databases for AI applications"
      ],
      color: "from-cyan-500 to-blue-500",
      deliverables: ["Database Schema", "Query Optimization", "Data Migration"]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud deployments with containerization and modern infrastructure architecture solutions",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "Cloud platform setup and deployment",
        "Serverless and edge computing",
        "Container orchestration",
        "Microservices architecture",
        "Infrastructure automation"
      ],
      color: "from-orange-500 to-red-500",
      deliverables: ["Cloud Setup", "Container Images", "DevOps Tools"]
    },
    {
      title: "E-commerce Platforms",
      description: "Complete e-commerce solutions with secure payments and scalable marketplace functionality",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: [
        "Modern user interfaces",
        "Secure payment integration",
        "Inventory management systems",
        "Business analytics dashboards",
        "Scalable marketplace solutions"
      ],
      color: "from-pink-500 to-red-500",
      deliverables: ["E-commerce Site", "Admin Panel", "Payment Setup"]
    }
  ]

  const servicePackages = [
    {
      name: "Mini Launch",
      description: "A sleek one-page website to give your brand a strong start",
      price: "Starting at $350",
      features: [
        "Custom responsive design",
        "Mobile-first & fast-loading",
        "Basic SEO setup",
        "Contact/lead form integration",
        "Hosting & domain setup support"
      ],
      ideal: "Portfolios, personal brands, landing pages",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Starter Package",
      description: "A full-featured multi-page site with backend essentials",
      price: "Starting at $1,020",
      features: [
        "Custom multi-page design",
        "CMS/backend-ready structure",
        "SEO, analytics & security setup",
        "Optimized for all devices",
        "1-month post-launch support"
      ],
      ideal: "Service providers, small businesses, teams",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Growth Package",
      description: "A smart, scalable platform with intelligent features",
      price: "Starting at $2,700",
      features: [
        "Includes everything in Starter",
        "AI-enhanced forms & smart user flows",
        "Admin panel for easy content control",
        "Performance-optimized backend",
        "3-month support with feature iterations"
      ],
      ideal: "SaaS tools, smart platforms, fast-growing products",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise Package",
      description: "Systems built for scale, automation, and team control",
      price: "Starting at $5,400",
      features: [
        "Includes everything in Growth",
        "Smart workflows & internal automations",
        "Role-based dashboards & control panels",
        "Audit trails, insights & data security",
        "6-month support with dedicated handling"
      ],
      ideal: "Funded startups, B2B tools, operational teams",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const developmentProcess = [
    {
      phase: "1. Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed roadmap for success",
      icon: <Search className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Project Scope", "Technical Specifications", "Timeline"]
    },
    {
      phase: "2. Design & Architecture", 
      description: "Our team creates user-friendly designs and robust technical architecture for your solution",
      icon: <Palette className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: ["UI/UX Designs", "System Architecture", "Prototypes"]
    },
    {
      phase: "3. Development & Testing",
      description: "We build your solution using agile methodologies with continuous testing and quality assurance",
      icon: <Code className="w-6 h-6" />,
      duration: "4-12 weeks",
      deliverables: ["Working Application", "Test Reports", "Code Documentation"]
    },
    {
      phase: "4. Deployment & Launch",
      description: "We deploy your solution to production and ensure everything runs smoothly for your users",
      icon: <Rocket className="w-6 h-6" />,
      duration: "1 week",
      deliverables: ["Live Application", "Deployment Guide", "User Training"]
    }
  ]

  const whyChooseOurServices = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tailored Solutions",
      description: "Every solution is custom-built to address your specific business challenges and requirements"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Agile development approach ensures quick turnaround without compromising on quality"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Future-Proof Technology",
      description: "We use cutting-edge technologies that scale with your business growth"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Ongoing Support",
      description: "Comprehensive post-launch support and maintenance to keep your solutions running smoothly"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensure robust, secure, and reliable solutions"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "We stay ahead of technology trends to provide innovative solutions for modern challenges"
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-gray-300">Our Services</span>
            </motion.div>

            <div className="mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tight mb-4 sm:mb-6 gradient-text">
                Solutions That Drive Results
              </h1>
            </div>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed font-light px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From AI-powered applications to scalable cloud solutions, we deliver comprehensive 
              technology services that transform your business and accelerate growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-32 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Settings className="w-3 h-3 text-blue-400" />
              <span className="text-xs text-blue-300 font-medium uppercase tracking-wider">Core Services</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 gradient-text px-2 sm:px-0">What We Build</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Comprehensive technology solutions tailored to your business needs and objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="dev-service-card p-4 sm:p-8 group transition-all duration-300 relative flex flex-col h-[480px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="particle-overlay"></div>
                <div className="grid-overlay"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {service.description}
                    </p>

                    <div className="mb-4 sm:mb-6 flex-grow">
                      <h4 className="text-xs sm:text-sm font-medium text-white mb-2 sm:mb-3 uppercase tracking-wider font-mono">Key Features:</h4>
                      <div className="space-y-1 sm:space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-400 text-xs sm:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-6">
                      {service.deliverables.map((deliverable, delIndex) => (
                        <span
                          key={delIndex}
                          className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs border border-gray-700/30 font-mono group-hover:border-purple-500/30 transition-colors"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Get Started Button */}
                  <div className="mt-auto">
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}&description=${encodeURIComponent(service.description)}&features=${encodeURIComponent(service.features.join(', '))}`}>
                      <motion.button
                        className={`w-full px-4 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-current/25 group-hover:scale-105 flex items-center justify-center gap-2`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Rocket className="w-4 h-4" />
                        Get Started
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-32 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Cpu className="w-3 h-3 text-cyan-400" />
              <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">Technology Stack</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 gradient-text px-2 sm:px-0">Technologies We Use</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Our comprehensive tech stack enables us to build scalable, modern solutions
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                category: "Frontend Development",
                technologies: ["Next.js", "React.js", "Tailwind CSS", "Three.js", "WebGL"],
                icon: <Globe className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                category: "Backend & APIs",
                technologies: ["Node.js", "Express.js", "Django", "Flask", "FastAPI"],
                icon: <Server className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                category: "AI & Intelligent Systems",
                technologies: ["TensorFlow", "PyTorch", "Hugging Face", "LLM Integration", "RAG Systems"],
                icon: <Brain className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "Cloud & DevOps",
                technologies: ["AWS", "Google Cloud", "Vercel", "Docker", "GitHub Actions"],
                icon: <Cloud className="w-6 h-6" />,
                color: "from-orange-500 to-red-500"
              }
            ].map((stack, index) => (
              <motion.div
                key={index}
                className="dev-service-card p-6 group transition-all duration-300 relative"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stack.color} mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{stack.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {stack.category}
                  </h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-24 px-4 border-t border-gray-800/50 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-purple-500/15 border border-purple-400/40 mb-6 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium uppercase tracking-widest">Premium Packages</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Investment Tiers
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Elite service packages meticulously crafted for discerning businesses and ambitious growth
            </motion.p>
          </motion.div>

          {/* Premium Pricing Grid with Enhanced Hierarchy */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {servicePackages.map((pkg, index) => {
              const isPopular = index === 2; // Growth Package
              const isMiniLaunch = index === 0;
              const isEnterprise = index === 3;
              
              return (
                                 <motion.div
                   key={index}
                   className={`relative rounded-2xl border transition-all duration-700 group cursor-pointer backdrop-blur-xl ${
                     isPopular 
                       ? 'bg-gradient-to-br from-black/98 via-purple-950/90 to-black/98 border-purple-400/20 shadow-2xl shadow-purple-500/10 z-20' 
                       : isEnterprise
                       ? 'bg-gradient-to-br from-black/98 via-emerald-950/90 to-black/98 border-emerald-400/20 shadow-xl shadow-emerald-500/10 z-10'
                       : isMiniLaunch
                       ? 'bg-gradient-to-br from-black/98 via-blue-950/90 to-black/98 border-blue-400/20 shadow-lg shadow-blue-500/10'
                       : 'bg-gradient-to-br from-black/98 via-gray-950/90 to-black/98 border-gray-500/20 shadow-md hover:border-gray-400/30'
                   }`}
                   whileHover={{ 
                     y: -8, 
                     scale: isPopular ? 1.05 : 1.03,
                     transition: { duration: 0.3, type: "spring", stiffness: 300 }
                   }}
                >
                  {/* Premium Border Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    {/* Inner subtle border */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
                      isPopular 
                        ? 'shadow-[inset_0_0_0_1px_rgba(168,85,247,0.3)] group-hover:shadow-[inset_0_0_0_1px_rgba(168,85,247,0.5)]' 
                        : isEnterprise
                        ? 'shadow-[inset_0_0_0_1px_rgba(34,197,94,0.3)] group-hover:shadow-[inset_0_0_0_1px_rgba(34,197,94,0.5)]'
                        : isMiniLaunch
                        ? 'shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)] group-hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.5)]'
                        : 'shadow-[inset_0_0_0_1px_rgba(75,85,99,0.2)] group-hover:shadow-[inset_0_0_0_1px_rgba(75,85,99,0.4)]'
                    }`} />
                    
                    {/* Outer premium glow */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
                      isPopular 
                        ? 'shadow-[0_0_0_1px_rgba(168,85,247,0.2),0_0_10px_rgba(168,85,247,0.15),0_0_20px_rgba(168,85,247,0.1),0_0_40px_rgba(168,85,247,0.06)] group-hover:shadow-[0_0_0_1px_rgba(168,85,247,0.4),0_0_16px_rgba(168,85,247,0.25),0_0_32px_rgba(168,85,247,0.18),0_0_64px_rgba(168,85,247,0.12)]' 
                        : isEnterprise
                        ? 'shadow-[0_0_0_1px_rgba(34,197,94,0.2),0_0_10px_rgba(34,197,94,0.15),0_0_20px_rgba(34,197,94,0.1),0_0_40px_rgba(34,197,94,0.06)] group-hover:shadow-[0_0_0_1px_rgba(34,197,94,0.4),0_0_16px_rgba(34,197,94,0.25),0_0_32px_rgba(34,197,94,0.18),0_0_64px_rgba(34,197,94,0.12)]'
                        : isMiniLaunch
                        ? 'shadow-[0_0_0_1px_rgba(59,130,246,0.2),0_0_10px_rgba(59,130,246,0.15),0_0_20px_rgba(59,130,246,0.1),0_0_40px_rgba(59,130,246,0.06)] group-hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_0_16px_rgba(59,130,246,0.25),0_0_32px_rgba(59,130,246,0.18),0_0_64px_rgba(59,130,246,0.12)]'
                        : 'shadow-[0_0_0_1px_rgba(75,85,99,0.15),0_0_8px_rgba(75,85,99,0.1),0_0_16px_rgba(75,85,99,0.06)] group-hover:shadow-[0_0_0_1px_rgba(75,85,99,0.3),0_0_12px_rgba(75,85,99,0.15),0_0_24px_rgba(75,85,99,0.1)]'
                    }`} />
                  </div>

                  {/* Enhanced Popular Badge - Premium Positioned */}
                  {isPopular && (
                    <motion.div 
                      className="absolute -top-3 z-[100]"
                      initial={{ opacity: 0, y: -15, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      style={{ 
                        zIndex: 100, 
                        left: '50%', 
                        transform: 'translateX(-50%)' 
                      }}
                    >
                      <motion.div
                        className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-2xl backdrop-blur-sm border border-purple-300/30"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          backgroundSize: "200% 200%",
                          zIndex: 100
                        }}
                      >
                        Most Popular
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Enterprise Badge - Premium Positioned */}
                  {isEnterprise && (
                    <motion.div 
                      className="absolute -top-3 z-[100]"
                      initial={{ opacity: 0, y: -15, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      style={{ 
                        zIndex: 100, 
                        left: '50%', 
                        transform: 'translateX(-50%)' 
                      }}
                    >
                      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-2xl backdrop-blur-sm border border-emerald-300/30" style={{ zIndex: 100 }}>
                        Enterprise
                      </div>
                    </motion.div>
                  )}

                                     <div className={`p-5 relative z-10 h-full flex flex-col ${isPopular ? 'pt-8' : isEnterprise ? 'pt-8' : ''}`}>
                    {/* Package Header */}
                    <div className="text-center mb-5">
                      <h3 
                        className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                          isPopular ? 'text-white group-hover:text-purple-200' :
                          isEnterprise ? 'text-white group-hover:text-emerald-200' :
                          isMiniLaunch ? 'text-white group-hover:text-blue-200' :
                          'text-white group-hover:text-blue-200'
                        }`}
                      >
                        {pkg.name}
                      </h3>
                      
                      {/* Starting At Label with Better Alignment */}
                      <div className="mb-2">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                          {pkg.price.includes('Starting') ? 'Starting at' : 'From'}
                        </span>
                      </div>

                      <div 
                        className={`text-3xl font-bold mb-4 bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}
                      >
                        {pkg.price.replace('Starting at ', '')}
                      </div>
                      
                      <p 
                        className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                      >
                        {pkg.description}
                      </p>
                    </div>

                                         {/* Features List */}
                     <div 
                       className="space-y-2.5 mb-5 flex-grow"
                     >
                      {pkg.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-all duration-300 ${
                            isPopular ? 'text-purple-400' :
                            isEnterprise ? 'text-emerald-400' :
                            isMiniLaunch ? 'text-blue-400' :
                            'text-green-400'
                          }`} />
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                                         {/* Ideal For Section */}
                     <div 
                       className="text-center mb-4"
                     >
                       <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Ideal For</div>
                       <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{pkg.ideal}</div>
                     </div>

                     {/* CTA Button - Perfectly Aligned */}
                     <div 
                       className="mt-auto"
                     >
                      <Link href={`/contact?service=${encodeURIComponent(pkg.name)}&description=${encodeURIComponent(pkg.description)}&features=${encodeURIComponent(pkg.features.join(', '))}&price=${encodeURIComponent(pkg.price)}`}>
                        <motion.button
                          className={`w-full px-6 py-3.5 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group/btn backdrop-blur-sm ${
                            isPopular 
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/40 border border-purple-300/20' 
                              : isEnterprise
                              ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-white hover:from-emerald-600 hover:to-emerald-500 shadow-lg shadow-emerald-500/30 border border-emerald-300/20'
                              : isMiniLaunch
                              ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:from-blue-600 hover:to-blue-500 shadow-lg shadow-blue-500/30 border border-blue-300/20'
                              : `bg-gradient-to-r ${pkg.color} text-white hover:shadow-lg hover:shadow-current/20 border border-white/10`
                          }`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="relative z-10 font-semibold text-sm">Get Started</span>
                          <motion.div 
                            className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                            whileHover={{ scale: 1 }}
                          />
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                  {/* Premium Shimmer Effect */}
                  {(isPopular || isEnterprise) && (
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                        isPopular ? 'from-transparent via-purple-500/5 to-transparent' : 'from-transparent via-emerald-500/5 to-transparent'
                      } animate-shimmer`} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-24 px-4 border-t border-gray-800/50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-amber-500/8 to-orange-500/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-yellow-500/8 to-amber-500/8 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 border border-amber-400/40 mb-6 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-300 font-medium uppercase tracking-widest">Expert Guidance</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Consultation
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Expert sessions to guide your product, tech, or AI strategy
            </motion.p>
          </motion.div>

          {/* Consultation Card */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative rounded-3xl border bg-gradient-to-br from-black/98 via-amber-950/90 to-black/98 border-amber-400/20 shadow-2xl shadow-amber-500/20 backdrop-blur-xl group cursor-pointer"
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
            >
              {/* Premium Border Glow Effect */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none">
                <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_0_1px_rgba(245,158,11,0.3)] group-hover:shadow-[inset_0_0_0_1px_rgba(245,158,11,0.5)] transition-all duration-700" />
                <div className="absolute inset-0 rounded-3xl shadow-[0_0_0_1px_rgba(245,158,11,0.2),0_0_20px_rgba(245,158,11,0.15),0_0_40px_rgba(245,158,11,0.1),0_0_80px_rgba(245,158,11,0.06)] group-hover:shadow-[0_0_0_1px_rgba(245,158,11,0.4),0_0_32px_rgba(245,158,11,0.25),0_0_64px_rgba(245,158,11,0.18),0_0_128px_rgba(245,158,11,0.12)] transition-all duration-700" />
              </div>

              <div className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors duration-300">
                    Expert Consultation
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Starting at</span>
                  </div>

                  <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    $60/hour
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Expert sessions to guide your product, tech, or AI strategy
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Product & architecture planning",
                    "AI/LLM feature roadmap (no fluff)",
                    "System & MVP evaluations", 
                    "Workflow & scalability advice"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-amber-400 group-hover:scale-110 transition-all duration-300" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="text-center mb-8">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Ideal For</div>
                  <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    Founders, CTOs, Product Managers
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link href="/contact?service=Expert%20Consultation&description=Expert%20sessions%20to%20guide%20your%20product%2C%20tech%2C%20or%20AI%20strategy&features=Product%20%26%20architecture%20planning%2C%20AI%2FLLM%20feature%20roadmap%2C%20System%20%26%20MVP%20evaluations%2C%20Workflow%20%26%20scalability%20advice&price=Starting%20at%20%2460%2Fhour">
                    <motion.button
                      className="px-8 py-4 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group/btn backdrop-blur-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/40 border border-amber-300/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 font-semibold">Schedule Consultation</span>
                      <motion.div 
                        className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                        whileHover={{ scale: 1 }}
                      />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Premium Shimmer Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-amber-500/5 to-transparent animate-shimmer" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-24" 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-400/30 mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Workflow className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300 font-medium uppercase tracking-wider">Our Process</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              How We Work
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our proven development methodology ensures successful project delivery from concept to launch
            </motion.p>
          </motion.div>

          {/* Process Cards with Numbers */}
          <motion.div 
            className="grid lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {developmentProcess.map((step, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center"
              >
                {/* Phase Number Circle - Above Card */}
                <motion.div 
                  className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-slate-600/50 bg-slate-900/60 backdrop-blur-lg flex items-center justify-center mb-6 group-hover:border-slate-500/70 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-500/20 via-transparent to-slate-600/20" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-slate-400/10 to-transparent" />
                  
                  <span className="relative text-xl lg:text-2xl font-bold text-slate-300 group-hover:text-white transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Glassmorphism Card */}
                <motion.div 
                  className="relative w-full h-full backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-3xl p-8 overflow-hidden group-hover:bg-slate-800/50 group-hover:border-slate-600/70 transition-all duration-500"
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Glass overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-transparent to-slate-900/30 rounded-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-600/10 to-transparent rounded-3xl" />
                  
                  {/* Premium glow border on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-500/20 via-transparent to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Phase Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div 
                        className="w-12 h-12 rounded-2xl bg-slate-800/60 border border-slate-600/50 backdrop-blur-sm flex items-center justify-center text-slate-300 group-hover:bg-slate-700/60 group-hover:border-slate-500/70 group-hover:text-white transition-all duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {step.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div 
                          className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1"
                        >
                          PHASE {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 
                          className="text-xl font-bold text-white leading-tight group-hover:text-slate-100 transition-colors"
                        >
                          {step.phase.replace(/^\d+\.\s*/, '')}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p 
                      className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors text-sm"
                    >
                      {step.description}
                    </p>

                    {/* Duration Badge */}
                    <div 
                      className="flex items-center gap-2 mb-6"
                    >
                      <div className="w-1 h-1 rounded-full bg-slate-400" />
                      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        {step.duration}
                      </span>
                    </div>

                    {/* Key Deliverables */}
                    <div className="space-y-4">
                      <div 
                        className="text-xs text-slate-500 font-bold uppercase tracking-widest"
                      >
                        KEY DELIVERABLES
                      </div>
                      <div className="space-y-3">
                        {step.deliverables.map((deliverable, delIndex) => (
                          <div key={delIndex}>
                            <motion.div 
                              className="relative px-4 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm text-slate-300 text-sm font-medium hover:bg-slate-700/60 hover:border-slate-600/70 hover:text-white transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.02, x: 4 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {/* Glass effect overlay */}
                              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-transparent rounded-2xl" />
                              <span className="relative">{deliverable}</span>
                            </motion.div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Connector */}
                {index < developmentProcess.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-4">
                    <motion.div 
                      className="w-px h-12 bg-gradient-to-b from-slate-500/60 to-transparent"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 1.8 }}
                      viewport={{ once: true }}
                    />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
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
              Service Excellence
            </h2>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 font-light">
              What sets our services apart and makes us the right choice for your digital transformation
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseOurServices.map((reason, index) => (
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Let's discuss your project requirements and create a custom solution that drives your business forward
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
                Start Your Project
                <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 glass-card text-white font-medium rounded-full transition-all duration-300 hover:bg-gray-800/60 border border-gray-700/50 hover:border-gray-600/60 flex items-center justify-center gap-2"
              >
                Learn About Our Team
                <Users className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Loading component for Suspense fallback
function ServicesLoading() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading services...</p>
      </div>
    </div>
  )
}

// Default export with Suspense wrapper
export default function ServicesPage() {
  return (
    <Suspense fallback={<ServicesLoading />}>
      <ServicesPageContent />
    </Suspense>
  )
} 
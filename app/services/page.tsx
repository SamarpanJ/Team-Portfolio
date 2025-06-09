"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Code,
  Brain,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Cpu,
  Zap,
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Wifi,
  Settings,
  Palette,
  Server,
  Layers,
  Box,
  Shield,
  Monitor,
  GitBranch,
  Cog,
  ExternalLink,
  Github,
  Calendar,
  Users,
  TrendingUp,
  CheckCircle2,
  Play,
  Search,
  Rocket,
  Target,
  Lightbulb,
  HeartHandshake,
  Clock,
  Award,
  Workflow,
  Briefcase,
  Building,
  Calculator,
  Plus,
  Minus,
  DollarSign,
  Sparkles,
  Zap as Lightning
} from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

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

// Interactive Pricing Calculator Component
function PricingCalculator() {
  const [selectedServices, setSelectedServices] = React.useState<string[]>([])
  const [selectedAddOns, setSelectedAddOns] = React.useState<string[]>([])
  const [estimatedPrice, setEstimatedPrice] = React.useState(0)
  const [recommendedTier, setRecommendedTier] = React.useState('')

  const services = [
    { id: 'web-app', name: 'Custom Web Application', basePrice: 3000, description: 'Full-stack web development' },
    { id: 'ai-agents', name: 'AI Agents & ML Integration', basePrice: 4000, description: 'Custom AI solutions and LLM integration' },
    { id: 'database', name: 'Database Design & Setup', basePrice: 1500, description: 'PostgreSQL, MongoDB, or vector databases' },
    { id: 'cloud-hosting', name: 'Cloud Deployment & Hosting', basePrice: 2000, description: 'AWS, GCP, or Azure deployment' },
    { id: 'ecommerce', name: 'E-commerce Platform', basePrice: 3500, description: 'Full e-commerce solution with payments' },
    { id: 'api-development', name: 'API Development', basePrice: 2500, description: 'RESTful APIs and integrations' },
    { id: 'real-time', name: 'Real-time Features', basePrice: 2000, description: 'WebSocket, live updates, notifications' },
    { id: 'security', name: 'Security Implementation', basePrice: 1800, description: 'Authentication, authorization, encryption' },
    { id: 'business-intelligence', name: 'Business Intelligence', basePrice: 3000, description: 'Analytics dashboards and reporting' },
    { id: 'devops', name: 'DevOps & CI/CD', basePrice: 2200, description: 'Automated deployment and monitoring' }
  ]

  const addOns = [
    { id: 'extra-support', name: 'Extended Support (+3 months)', price: 1500 },
    { id: 'extra-pages', name: 'Additional Pages (5+)', price: 1000 },
    { id: 'sla', name: 'Premium SLA (99.9% uptime)', price: 2000 },
    { id: 'custom-training', name: 'Custom AI Model Training', price: 3000 },
    { id: 'mobile-app', name: 'Mobile App Development', price: 4000 },
    { id: 'priority-support', name: '24/7 Priority Support', price: 1200 }
  ]

  React.useEffect(() => {
    let total = selectedServices.reduce((sum, serviceId) => {
      const service = services.find(s => s.id === serviceId)
      return sum + (service?.basePrice || 0)
    }, 0)

    total += selectedAddOns.reduce((sum, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId)
      return sum + (addOn?.price || 0)
    }, 0)

    setEstimatedPrice(total)

    // Recommend tier based on total price
    if (total < 5000) {
      setRecommendedTier('Starter Package')
    } else if (total < 12000) {
      setRecommendedTier('Professional Package')
    } else {
      setRecommendedTier('Enterprise Package')
    }
  }, [selectedServices, selectedAddOns])

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    )
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Starter Package': return 'text-emerald-400'
      case 'Professional Package': return 'text-purple-400'
      case 'Enterprise Package': return 'text-blue-400'
      default: return 'text-gray-400'
    }
  }

  const getTierGradient = (tier: string) => {
    switch (tier) {
      case 'Starter Package': return 'from-emerald-500/20 to-emerald-600/20'
      case 'Professional Package': return 'from-purple-500/20 to-pink-500/20'
      case 'Enterprise Package': return 'from-blue-500/20 to-cyan-500/20'
      default: return 'from-gray-500/20 to-gray-600/20'
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Services Selection */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Settings className="w-5 h-5 text-cyan-400" />
            Select Your Required Services
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  selectedServices.includes(service.id)
                    ? 'border-cyan-400/50 bg-cyan-500/10'
                    : 'border-slate-600/30 bg-slate-800/20 hover:border-slate-500/50'
                }`}
                onClick={() => toggleService(service.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-colors ${
                    selectedServices.includes(service.id)
                      ? 'border-cyan-400 bg-cyan-400'
                      : 'border-slate-500'
                  }`}>
                    {selectedServices.includes(service.id) && (
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-white mb-1">{service.name}</h5>
                    <p className="text-sm text-gray-400 mb-2">{service.description}</p>
                    <div className="text-cyan-400 font-medium text-sm">
                      +${service.basePrice.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add-ons Selection */}
        <div>
          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Plus className="w-5 h-5 text-amber-400" />
            Optional Add-ons
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((addOn) => (
              <motion.div
                key={addOn.id}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  selectedAddOns.includes(addOn.id)
                    ? 'border-amber-400/50 bg-amber-500/10'
                    : 'border-slate-600/30 bg-slate-800/20 hover:border-slate-500/50'
                }`}
                onClick={() => toggleAddOn(addOn.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      selectedAddOns.includes(addOn.id)
                        ? 'border-amber-400 bg-amber-400'
                        : 'border-slate-500'
                    }`}>
                      {selectedAddOns.includes(addOn.id) && (
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="font-medium text-white">{addOn.name}</span>
                  </div>
                  <div className="text-amber-400 font-medium text-sm">
                    +${addOn.price.toLocaleString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Price Estimate & Recommendation */}
      <div className="lg:col-span-1">
        <div className="sticky top-8">
          <motion.div
            className={`p-6 rounded-2xl border bg-gradient-to-br ${getTierGradient(recommendedTier)} backdrop-blur-sm`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-400 uppercase tracking-wider">Estimated Cost</span>
              </div>
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                key={estimatedPrice}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                ${estimatedPrice.toLocaleString()}
              </motion.div>
              {estimatedPrice > 0 && (
                <div className="text-sm text-gray-500">
                  Final cost may vary based on complexity
                </div>
              )}
            </div>

            {recommendedTier && estimatedPrice > 0 && (
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Recommended Tier</span>
                </div>
                <div className={`text-lg font-bold ${getTierColor(recommendedTier)}`}>
                  {recommendedTier}
                </div>
              </div>
            )}

            <div className="space-y-3 mb-6">
              <div className="text-sm text-gray-400">
                <strong>Selected Services:</strong> {selectedServices.length}
              </div>
              <div className="text-sm text-gray-400">
                <strong>Add-ons:</strong> {selectedAddOns.length}
              </div>
              {selectedServices.length > 0 && (
                <div className="text-sm text-gray-400">
                  <strong>Estimated Timeline:</strong> {
                    estimatedPrice < 5000 ? '2-4 weeks' :
                    estimatedPrice < 12000 ? '6-12 weeks' : '12-24 weeks'
                  }
                </div>
              )}
            </div>

            {estimatedPrice > 0 && (
              <motion.button
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Detailed Quote
                <Lightning className="w-4 h-4" />
              </motion.button>
            )}

            {estimatedPrice === 0 && (
              <div className="text-center text-gray-500 text-sm">
                Select services above to see your estimate
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const coreServices = [
    {
      title: "Custom Software Development",
      description: "MERN/PERN stack applications, Django, Flask, FastAPI backends tailored to your specific business requirements",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Full-stack web applications (MERN/PERN)",
        "API development with Express.js/FastAPI",
        "Database optimization (PostgreSQL, MongoDB, Firebase, Supabase, Pinecone)",
        "Modern framework implementation",
        "Real-time features with Socket.IO"
      ],
      color: "from-blue-500 to-cyan-500",
      deliverables: ["Source Code", "Documentation", "Deployment Guide"]
    },
    {
      title: "AI & Intelligent Systems",
      description: "AI agents and intelligent systems integrating with LLMs, implementing RAG systems using TensorFlow, PyTorch, Hugging Face",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "Custom AI agents and assistants",
        "LLM integration and implementation",
        "RAG system development",
        "Conversational AI solutions",
        "Intelligent workflow automation"
      ],
      color: "from-purple-500 to-pink-500",
      deliverables: ["AI Agents", "LLM Integrations", "RAG Systems"]
    },
    {
      title: "Full-stack Web Development",
      description: "MERN/PERN stacks, Next.js, React Native with modern UI using Three.js for interactive experiences",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Full-stack web applications (MERN/PERN)",
        "Next.js and React.js development",
        "Interactive experiences with Three.js/WebGL",
        "Responsive and modern UI design",
        "Performance optimization"
      ],
      color: "from-green-500 to-emerald-500",
      deliverables: ["Web Applications", "UI Components", "Documentation"]
    },
    {
      title: "Database Solutions",
      description: "Comprehensive database design, optimization, and management using PostgreSQL, MongoDB, Firebase, Supabase, and Pinecone for vector data",
      icon: <Database className="w-8 h-8" />,
      features: [
        "PostgreSQL (Relational database design & optimization)",
        "MongoDB (NoSQL document database solutions)",
        "Firebase (Realtime NoSQL with live sync)",
        "Supabase (PostgreSQL-based Backend-as-a-Service)",
        "Pinecone (Vector database for AI/ML applications)"
      ],
      color: "from-cyan-500 to-blue-500",
      deliverables: ["Database Schema", "Query Optimization", "Data Migration"]
    },
    {
      title: "Cloud & Infrastructure",
      description: "AWS, Google Cloud, Vercel deployments with Docker, serverless architectures, and microservices",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "AWS, Google Cloud, Vercel setup",
        "Serverless and edge deployments",
        "Docker containerization",
        "Microservices architecture",
        "Real-time communication systems"
      ],
      color: "from-orange-500 to-red-500",
      deliverables: ["Cloud Setup", "Container Images", "DevOps Tools"]
    },
          {
        title: "E-commerce Platforms",
        description: "Modern e-commerce solutions with beautiful UI, secure payments, and scalable marketplace features",
        icon: <ShoppingCart className="w-8 h-8" />,
        features: [
          "Modern user interfaces",
          "Secure payment integration",
          "Inventory management",
          "Business insights dashboards",
          "Scalable marketplace solutions"
        ],
        color: "from-pink-500 to-red-500",
        deliverables: ["E-commerce Site", "Admin Panel", "Payment Setup"]
      }
  ]

  const servicePackages = [
    {
      name: "Expert Consultation",
      description: "Premium one-on-one consulting sessions with our senior technology experts for strategic guidance",
      price: "$100/hour",
      features: [
        "Architecture review & planning",
        "Technology stack consultation", 
        "Code review & optimization",
        "Strategic technology roadmap",
        "Best practices guidance"
      ],
      ideal: "CTOs, Tech leads, Enterprises",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Starter Package",
      description: "Perfect for small businesses and startups looking to establish their digital presence",
      price: "Starting at $2,500",
      features: [
        "Basic web application",
        "Responsive design",
        "Basic API integration",
        "Database setup (PostgreSQL/MongoDB)",
        "1 month support"
      ],
      ideal: "Small businesses, MVPs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional Package",
      description: "Comprehensive solution for growing businesses requiring advanced features and integrations",
      price: "Starting at $7,500",
      features: [
        "Advanced web applications",
        "AI agent integration",
        "Cloud deployment",
        "Security implementation",
        "3 months support"
      ],
      ideal: "Growing companies, SaaS platforms",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise Package",
      description: "Complete digital transformation solution with cutting-edge technologies and ongoing support",
      price: "Starting at $15,000",
      features: [
        "Full-stack solution",
        "Custom AI agents",
        "Enterprise security",
        "Business intelligence",
        "6 months support"
      ],
      ideal: "Large organizations, complex systems",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="dev-service-card p-4 sm:p-8 group transition-all duration-300 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="particle-overlay"></div>
                <div className="grid-overlay"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {service.description}
                  </p>

                  <div className="mb-4 sm:mb-6">
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

                  <div className="flex flex-wrap gap-1">
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
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {stack.category}
                  </h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["JavaScript/TypeScript", "Python", "C/C++", "SQL", "HTML & CSS", "Bash/Shell"].map((lang, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/30 hover:border-cyan-500/50 transition-colors"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Layers className="w-3 h-3 text-green-400" />
              <span className="text-xs text-green-300 font-medium uppercase tracking-wider">Service Packages</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 gradient-text px-2 sm:px-0">Choose Your Package</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Flexible service packages designed to match your budget and project requirements
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch pt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {servicePackages.map((pkg, index) => (
              <div key={index} className="relative flex flex-col h-full">
                {/* Tier indicator - positioned outside the card */}
                {index === 0 && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-amber-400/30 whitespace-nowrap">
                      💎 Premium
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-purple-400/30 whitespace-nowrap">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}
                
                <motion.div
                  className={`package-tier-${index === 0 ? 'consultant' : index + 1} group transition-all duration-500 relative overflow-hidden flex flex-col flex-grow ${index === 0 ? 'scale-105 lg:scale-110 shadow-2xl shadow-amber-500/20' : index === 2 ? 'scale-105 lg:scale-110 shadow-2xl shadow-purple-500/20' : ''}`}
                  variants={fadeInUp}
                  whileHover={{ y: index === 0 ? -15 : index === 1 ? -8 : index === 2 ? -15 : -12, scale: index === 0 ? 1.05 : index === 1 ? 1.02 : index === 2 ? 1.05 : 1.03 }}
                  style={{ zIndex: index === 0 ? 10 : index === 2 ? 10 : 1 }}
                >

                {/* Progressive visual effects */}
                <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-br from-amber-900/30 to-orange-900/20' : index === 1 ? 'bg-gradient-to-br from-green-900/20 to-emerald-900/10' : index === 2 ? 'bg-gradient-to-br from-purple-900/30 to-violet-900/20' : 'bg-gradient-to-br from-blue-900/25 to-cyan-900/15'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Enhanced particle effect for higher tiers */}
                {(index === 0 || index >= 2) && <div className="premium-particle-overlay"></div>}
                {index === 0 && <div className="consultant-glow"></div>}
                {index === 3 && <div className="enterprise-glow"></div>}

                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Package header with tier styling */}
                  <div className="text-center mb-8">
                    {/* Package tier icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${index === 0 ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30' : index === 1 ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30' : index === 2 ? 'bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/30' : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30'}`}>
                      <div className={`text-2xl ${index === 0 ? 'text-amber-400' : index === 1 ? 'text-green-400' : index === 2 ? 'text-purple-400' : 'text-blue-400'}`}>
                        {index === 0 ? '💎' : index === 1 ? '🚀' : index === 2 ? '⭐' : '👑'}
                      </div>
                    </div>

                    <h3 className={`text-2xl font-bold text-white mb-2 ${index === 0 ? 'group-hover:text-amber-300' : index === 1 ? 'group-hover:text-green-300' : index === 2 ? 'group-hover:text-purple-300' : 'group-hover:text-blue-300'} transition-colors font-mono`}>
                      {pkg.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors leading-relaxed min-h-[3rem]">
                      {pkg.description}
                    </p>
                    
                    {/* Enhanced price display with tier differentiation */}
                    <div className="mb-6">
                      <div className={`text-4xl font-bold mb-2 font-mono ${index === 0 ? 'text-amber-400 drop-shadow-lg' : index === 1 ? 'text-green-400' : index === 2 ? 'text-purple-400 drop-shadow-lg' : 'text-blue-400 drop-shadow-xl'} ${index === 0 || index >= 2 ? 'bg-gradient-to-r from-current to-current bg-clip-text' : ''}`}>
                        {pkg.price}
                      </div>
                      <div className={`text-sm ${index === 0 ? 'text-amber-300/80' : index === 1 ? 'text-gray-500' : index === 2 ? 'text-purple-300/80' : 'text-blue-300/80'} font-medium`}>
                        Ideal for: {pkg.ideal}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced features list with tier styling */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group/feature">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${index === 0 ? 'bg-amber-500/20' : index === 1 ? 'bg-green-500/20' : index === 2 ? 'bg-purple-500/20' : 'bg-blue-500/20'} group-hover/feature:scale-110 transition-transform duration-200`}>
                          <CheckCircle2 className={`w-4 h-4 ${index === 0 ? 'text-amber-400' : index === 1 ? 'text-green-400' : index === 2 ? 'text-purple-400' : 'text-blue-400'} flex-shrink-0`} />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced CTA button with tier progression */}
                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className={`block w-full text-center px-6 py-4 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group/btn ${
                        index === 0 
                          ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-xl hover:shadow-amber-500/30 ring-2 ring-amber-400/20' 
                          : index === 1 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-green-500/25'
                          : index === 2 
                          ? 'bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-xl hover:shadow-purple-500/30 ring-2 ring-purple-400/20' 
                          : 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-xl hover:shadow-blue-500/30 ring-2 ring-blue-400/30'
                      }`}
                    >
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        <span>{index === 0 ? 'Book Session' : 'Get Started'}</span>
                        {(index === 0 || index >= 2) && <span className="text-lg">✨</span>}
                      </div>
                      {/* Button hover effect */}
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </Link>
                  </div>
                </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/40 to-gray-950/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div className="text-center mb-16 sm:mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-400/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Workflow className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium uppercase tracking-wider">Our Process</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 sm:mb-8 gradient-text">How We Work</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Our proven methodology ensures transparent communication and successful project delivery
            </p>
          </motion.div>

                     {/* Premium Process Timeline */}
           <div className="relative">
             {/* Elegant Timeline Background */}
             <div className="absolute inset-0 overflow-hidden rounded-3xl">
               <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-gray-900/60 to-slate-950/90"></div>
               <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
               <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
             </div>



                           <div className="relative z-10 p-8 sm:p-12">
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {developmentProcess.map((process, index) => (
                    <motion.div
                      key={index}
                      className="relative group h-full flex flex-col"
                      variants={fadeInUp}
                    >
                      {/* Premium Phase Indicator */}
                      <div className="relative mb-6">
                        <div className="flex justify-center">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          >
                            {/* Subtle Hover Glow */}
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-indigo-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                            
                            {/* Premium Circle Design */}
                            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/40 group-hover:border-indigo-400/60 transition-all duration-300 shadow-lg backdrop-blur-sm">
                              {/* Inner Gradient Layer */}
                              <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-slate-850/90 to-slate-900/90"></div>
                              
                              {/* Perfect Number Rendering */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span 
                                  className="text-lg font-bold text-slate-200 group-hover:text-indigo-200 transition-colors duration-300"
                                  style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                                    WebkitFontSmoothing: 'antialiased',
                                    MozOsxFontSmoothing: 'grayscale',
                                    textRendering: 'optimizeLegibility',
                                    letterSpacing: '0.02em'
                                  }}
                                >
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                              </div>

                              {/* Subtle Inner Ring */}
                              <div className="absolute inset-2 rounded-full border border-slate-700/30 group-hover:border-indigo-400/30 transition-all duration-300"></div>
                            </div>

                            {/* Refined Pulse Ring */}
                            <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-indigo-400/20 group-hover:scale-110 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Aligned Premium Card */}
                      <motion.div
                        className="relative flex-1 flex flex-col"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {/* Premium Card Background */}
                        <div className="relative h-full bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-6 lg:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.12)] group-hover:border-indigo-500/50 group-hover:shadow-[0_16px_48px_rgba(79,70,229,0.12)] transition-all duration-500 flex flex-col">
                          {/* Subtle Inner Glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-purple-500/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Top Accent Line */}
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent group-hover:via-indigo-400/30 transition-all duration-500"></div>

                          <div className="relative z-10 flex flex-col h-full">
                            {/* Header with Icon */}
                            <div className="flex items-start gap-4 mb-4">
                              <motion.div 
                                className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 flex items-center justify-center group-hover:border-indigo-500 transition-colors duration-300 flex-shrink-0"
                                whileHover={{ rotate: 2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="text-indigo-400 text-xl group-hover:text-indigo-300 transition-colors duration-300">
                                  {process.icon}
                                </div>
                              </motion.div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="text-xs text-indigo-400 uppercase tracking-wider font-medium mb-1 group-hover:text-indigo-300 transition-colors duration-300">
                                  Phase {String(index + 1).padStart(2, '0')}
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-indigo-100 transition-colors duration-300 leading-tight">
                                  {process.phase.replace(/^\d+\.\s*/, '')}
                                </h3>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-slate-400 text-sm leading-relaxed mb-5 group-hover:text-slate-300 transition-colors duration-300 flex-grow">
                              {process.description}
                            </p>

                            {/* Duration */}
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider group-hover:text-slate-400 transition-colors duration-300">
                                {process.duration}
                              </span>
                            </div>

                            {/* Deliverables */}
                            <div className="mt-auto">
                              <h4 className="text-xs font-semibold text-indigo-400 mb-3 uppercase tracking-wider group-hover:text-indigo-300 transition-colors duration-300">
                                Key Deliverables
                              </h4>
                              <div className="space-y-2">
                                {process.deliverables.map((deliverable: string, delIndex: number) => (
                                  <motion.div
                                    key={delIndex}
                                    className="relative"
                                    initial={{ opacity: 0, y: 5 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: delIndex * 0.05 }}
                                    viewport={{ once: true }}
                                  >
                                    <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-slate-600/40 rounded-2xl text-slate-300 text-sm font-medium group-hover:from-indigo-900/30 group-hover:to-indigo-800/30 group-hover:border-indigo-500/60 group-hover:text-slate-100 transition-all duration-300 backdrop-blur-sm shadow-sm">
                                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-300 flex-shrink-0 shadow-sm"></div>
                                      <span className="leading-tight">{deliverable}</span>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Bottom Accent Line */}
                          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </motion.div>

                      {/* Mobile Connection */}
                      {index < developmentProcess.length - 1 && (
                        <div className="lg:hidden flex justify-center mt-6 mb-2">
                          <motion.div 
                            className="w-px h-8 bg-gradient-to-b from-indigo-400/30 via-purple-400/20 to-transparent"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
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
              <Award className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-purple-300 font-medium uppercase tracking-wider">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-light mb-8 gradient-text">Service Excellence</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              What sets our services apart and makes us the right choice for your digital transformation
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseOurServices.map((reason, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 rounded-xl group hover:bg-gray-800/60 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools and Estimator Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Interactive Pricing Calculator */}
          <motion.div
            className="bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border border-slate-600/40 rounded-3xl p-8 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)] mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/20 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300 font-medium uppercase tracking-wider">Interactive Calculator</span>
              </motion.div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 gradient-text">Custom Project Estimator</h3>
              <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Select the services you need and get an instant estimate with recommended package tier
              </p>
            </div>

            <PricingCalculator />
          </motion.div>

          {/* Feature Comparison Matrix */}
          <motion.div
            className="bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 gradient-text">Compare All Features</h3>
              <p className="text-gray-400 leading-relaxed">Detailed breakdown of what's included in each package</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-4 px-6 text-gray-400 font-semibold">Features</th>
                    <th className="text-center py-4 px-6 text-emerald-400 font-semibold">Starter</th>
                    <th className="text-center py-4 px-6 text-purple-400 font-semibold">Professional</th>
                    <th className="text-center py-4 px-6 text-blue-400 font-semibold">Enterprise</th>
                    <th className="text-center py-4 px-6 text-amber-400 font-semibold">Consulting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/30">
                  {[
                    ["Custom Web Development", "✓", "✓", "✓", "Advisory"],
                    ["Database Design & Setup", "Basic", "Advanced", "Enterprise", "Architecture"],
                    ["AI/ML Integration", "×", "✓", "✓", "Strategy"],
                    ["Cloud Deployment", "Basic", "Advanced", "Multi-Cloud", "Planning"],
                    ["Security Implementation", "Basic", "Standard", "Enterprise", "Audit"],
                    ["API Development", "Basic", "Advanced", "Microservices", "Design"],
                    ["Real-time Features", "×", "✓", "✓", "Planning"],
                    ["Business Intelligence", "×", "×", "✓", "Strategy"],
                    ["DevOps & CI/CD", "×", "Basic", "Advanced", "Setup"],
                    ["Support Duration", "1 month", "3 months", "6 months", "Session-based"],
                    ["Code Documentation", "Basic", "Comprehensive", "Enterprise", "Review"],
                    ["Performance Optimization", "×", "✓", "✓", "Audit"]
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-slate-800/20 transition-colors">
                      <td className="py-4 px-6 text-white font-medium">{row[0]}</td>
                      <td className="py-4 px-6 text-center text-emerald-400">{row[1]}</td>
                      <td className="py-4 px-6 text-center text-purple-400">{row[2]}</td>
                      <td className="py-4 px-6 text-center text-blue-400">{row[3]}</td>
                      <td className="py-4 px-6 text-center text-amber-400">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

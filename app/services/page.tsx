"use client"

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
  Briefcase
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

export default function ServicesPage() {
  const coreServices = [
    {
      title: "Custom Software Development",
      description: "Tailored applications built from the ground up to meet your specific business requirements and goals",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Full-stack web applications",
        "API development and integration",
        "Database design and optimization",
        "Scalable architecture planning",
        "Modern framework implementation"
      ],
      color: "from-blue-500 to-cyan-500",
      deliverables: ["Source Code", "Documentation", "Deployment Guide"]
    },
    {
      title: "AI & Machine Learning Solutions",
      description: "Intelligent systems powered by cutting-edge AI technologies to automate and optimize your business processes",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "Conversational AI chatbots",
        "Natural language processing",
        "Sentiment analysis systems",
        "AI model integration",
        "RAG system implementation"
      ],
      color: "from-purple-500 to-pink-500",
      deliverables: ["AI Models", "Integration APIs", "Training Data"]
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications that provide seamless user experiences across iOS and Android devices",
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        "React Native development",
        "Native iOS and Android apps",
        "Cross-platform compatibility",
        "App Store deployment",
        "Performance optimization"
      ],
      color: "from-green-500 to-emerald-500",
      deliverables: ["Mobile Apps", "Store Listings", "User Guides"]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and robust infrastructure to support your growing business needs",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "AWS and Google Cloud setup",
        "Serverless architecture",
        "Auto-scaling infrastructure",
        "Security implementation",
        "Performance monitoring"
      ],
      color: "from-orange-500 to-red-500",
      deliverables: ["Cloud Setup", "Monitoring Tools", "Security Protocols"]
    },
    {
      title: "IoT Solutions",
      description: "Connected device ecosystems and real-time data processing for smart business operations",
      icon: <Cpu className="w-8 h-8" />,
      features: [
        "Device connectivity setup",
        "Real-time data dashboards",
        "Sensor integration",
        "MQTT protocol implementation",
        "Edge computing solutions"
      ],
      color: "from-indigo-500 to-purple-500",
      deliverables: ["IoT Platform", "Device Firmware", "Data Analytics"]
    },
    {
      title: "E-commerce Development",
      description: "Complete online marketplace solutions with modern features and seamless payment integration",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: [
        "Shopping cart functionality",
        "Payment gateway integration",
        "Inventory management",
        "Order tracking system",
        "Admin dashboard"
      ],
      color: "from-pink-500 to-red-500",
      deliverables: ["E-commerce Site", "Admin Panel", "Payment Setup"]
    }
  ]

  const servicePackages = [
    {
      name: "Starter Package",
      description: "Perfect for small businesses and startups looking to establish their digital presence",
      price: "Starting at $2,500",
      features: [
        "Basic web application",
        "Responsive design",
        "Basic API integration",
        "Database setup",
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
        "Advanced web/mobile app",
        "AI integration",
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
        "Custom AI development",
        "IoT integration",
        "Enterprise security",
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
              transition={{ duration: 0.6 }}
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
                className="glass-card p-4 sm:p-8 rounded-xl group hover:bg-gray-800/60 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                  {service.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-medium text-white mb-2 sm:mb-3 uppercase tracking-wider">Key Features:</h4>
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
                      className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs border border-gray-700/30"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
              transition={{ duration: 0.6 }}
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
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={index}
                className="glass-card-intense p-8 rounded-xl group hover:bg-gray-800/60 transition-all duration-300 relative overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                      {pkg.description}
                    </p>
                    <div className="text-3xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                    <div className="text-sm text-gray-500">Ideal for: {pkg.ideal}</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
                  >
                    Get Started
                  </Link>
                </div>
                
                {/* Subtle hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-32 px-4 border-t border-gray-800/50 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" {...fadeInUp}>
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Workflow className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-orange-300 font-medium uppercase tracking-wider">Our Process</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-light mb-8 gradient-text">How We Work</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our proven methodology ensures transparent communication and successful project delivery
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {developmentProcess.map((process, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 rounded-xl text-center group"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                    {process.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {process.phase}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                  {process.description}
                </p>
                <div className="text-sm text-gray-500 mb-2">{process.duration}</div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {process.deliverables.map((deliverable, delIndex) => (
                    <span
                      key={delIndex}
                      className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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

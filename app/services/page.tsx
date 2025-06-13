"use client"

import React, { Suspense } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
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
  Briefcase,
  Calculator,
  Plus,
  DollarSign,
  Sparkles,
  Zap as Lightning,
  Info
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ProjectAssessmentModal } from "@/components/project-assessment-modal"

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
const PricingCalculator = React.memo(() => {
  const searchParams = useSearchParams()
  const [selectedServices, setSelectedServices] = React.useState<string[]>([])
  const [selectedAddOns, setSelectedAddOns] = React.useState<string[]>([])
  const [estimatedPrice, setEstimatedPrice] = React.useState(0)
  const [recommendedTier, setRecommendedTier] = React.useState('')
  const [projectType, setProjectType] = React.useState<'website' | 'ai'>('website')
  const [estimatedDays, setEstimatedDays] = React.useState(0)
  const [selectedDays, setSelectedDays] = React.useState(0)
  const [rushPrice, setRushPrice] = React.useState(0)
  const [projectAssessmentAnswers, setProjectAssessmentAnswers] = React.useState<{[key: string]: string}>({})
  const [showProjectAssessmentModal, setShowProjectAssessmentModal] = React.useState(false)
  const [isProjectAssessmentComplete, setIsProjectAssessmentComplete] = React.useState(false)
  const isInitialLoad = React.useRef(true)

  // Base hourly rates
  const WEBSITE_RATE = 15
  const AI_RATE = 20
  const REGULAR_HOURS_PER_DAY = 6
  const RUSH_HOURS_PER_DAY = 8

  // Questionnaire data for intelligent complexity detection
  const questionnaires = {
    'web-app': {
      title: 'Web Application Details',
      icon: '🌐',
      questions: [
        {
          id: 'users',
          question: 'How many users will use your application?',
          options: [
            { value: 'small', label: 'Under 100 users', multiplier: 1.0 },
            { value: 'medium', label: '100 - 1,000 users', multiplier: 1.4 },
            { value: 'large', label: '1,000+ users', multiplier: 1.8 }
          ]
        },
        {
          id: 'features',
          question: 'What type of functionality do you need?',
          options: [
            { value: 'basic', label: 'Simple website with forms', multiplier: 1.0 },
            { value: 'interactive', label: 'User accounts, dashboards', multiplier: 1.3 },
            { value: 'complex', label: 'Advanced workflows, integrations', multiplier: 1.7 }
          ]
        },
        {
          id: 'integrations',
          question: 'Do you need third-party integrations?',
          options: [
            { value: 'none', label: 'No integrations needed', multiplier: 1.0 },
            { value: 'few', label: '1-3 services (payments, email)', multiplier: 1.2 },
            { value: 'many', label: '4+ services or complex APIs', multiplier: 1.5 }
          ]
        }
      ]
    },
    'security': {
      title: 'Security Requirements',
      icon: '🔒',
      questions: [
        {
          id: 'data_sensitivity',
          question: 'What type of data will you handle?',
          options: [
            { value: 'basic', label: 'General business information', multiplier: 1.0 },
            { value: 'personal', label: 'Customer personal data', multiplier: 1.3 },
            { value: 'sensitive', label: 'Payment/Medical/Financial data', multiplier: 1.8 }
          ]
        },
        {
          id: 'compliance',
          question: 'Do you need regulatory compliance?',
          options: [
            { value: 'none', label: 'No specific requirements', multiplier: 1.0 },
            { value: 'basic', label: 'GDPR or basic compliance', multiplier: 1.4 },
            { value: 'strict', label: 'HIPAA, PCI-DSS, or banking', multiplier: 2.0 }
          ]
        },
        {
          id: 'access_control',
          question: 'How complex is your user access?',
          options: [
            { value: 'simple', label: 'Basic login system', multiplier: 1.0 },
            { value: 'roles', label: 'Different user roles/permissions', multiplier: 1.3 },
            { value: 'enterprise', label: 'Complex org structure, SSO', multiplier: 1.7 }
          ]
        }
      ]
    },
    'ai-agents': {
      title: 'AI Integration Scope',
      icon: '🤖',
      questions: [
        {
          id: 'ai_purpose',
          question: 'What should the AI do for your business?',
          options: [
            { value: 'chatbot', label: 'Customer support chatbot', multiplier: 1.0 },
            { value: 'analysis', label: 'Data analysis and insights', multiplier: 1.4 },
            { value: 'automation', label: 'Complex workflow automation', multiplier: 1.8 }
          ]
        },
        {
          id: 'customization',
          question: 'How customized should the AI be?',
          options: [
            { value: 'standard', label: 'Use existing AI models', multiplier: 1.0 },
            { value: 'trained', label: 'Train on your specific data', multiplier: 1.5 },
            { value: 'custom', label: 'Fully custom AI solution', multiplier: 2.2 }
          ]
        },
        {
          id: 'data_volume',
          question: 'How much data will the AI process?',
          options: [
            { value: 'light', label: 'Small files, occasional use', multiplier: 1.0 },
            { value: 'moderate', label: 'Regular processing, databases', multiplier: 1.3 },
            { value: 'heavy', label: 'Real-time, large datasets', multiplier: 1.6 }
          ]
        }
      ]
    },
    'database': {
      title: 'Database Requirements',
      icon: '💾',
      questions: [
        {
          id: 'data_volume',
          question: 'How much data will you be storing?',
          options: [
            { value: 'small', label: 'Small dataset (under 10GB)', multiplier: 1.0 },
            { value: 'medium', label: 'Medium dataset (10GB - 1TB)', multiplier: 1.3 },
            { value: 'large', label: 'Large dataset (1TB+)', multiplier: 1.7 }
          ]
        },
        {
          id: 'complexity',
          question: 'How complex are your data relationships?',
          options: [
            { value: 'simple', label: 'Simple tables with basic relationships', multiplier: 1.0 },
            { value: 'moderate', label: 'Multiple tables with foreign keys', multiplier: 1.2 },
            { value: 'complex', label: 'Complex relationships and constraints', multiplier: 1.5 }
          ]
        },
        {
          id: 'performance',
          question: 'What are your performance requirements?',
          options: [
            { value: 'standard', label: 'Standard performance is fine', multiplier: 1.0 },
            { value: 'fast', label: 'Need fast queries and indexing', multiplier: 1.3 },
            { value: 'realtime', label: 'Real-time performance critical', multiplier: 1.6 }
          ]
        }
      ]
    },
    'ecommerce': {
      title: 'E-commerce Complexity',
      icon: '🛒',
      questions: [
        {
          id: 'catalog_size',
          question: 'How many products will you sell?',
          options: [
            { value: 'small', label: 'Under 100 products', multiplier: 1.0 },
            { value: 'medium', label: '100 - 1,000 products', multiplier: 1.3 },
            { value: 'large', label: '1,000+ products', multiplier: 1.7 }
          ]
        },
        {
          id: 'business_model',
          question: 'What type of e-commerce business?',
          options: [
            { value: 'simple', label: 'Simple product sales', multiplier: 1.0 },
            { value: 'marketplace', label: 'Multi-vendor marketplace', multiplier: 1.6 },
            { value: 'subscription', label: 'Subscriptions or complex pricing', multiplier: 1.4 }
          ]
        },
        {
          id: 'operations',
          question: 'What operational features do you need?',
          options: [
            { value: 'basic', label: 'Basic orders and payments', multiplier: 1.0 },
            { value: 'inventory', label: 'Inventory management, shipping', multiplier: 1.3 },
            { value: 'advanced', label: 'Warehouses, dropshipping, B2B', multiplier: 1.8 }
          ]
        }
      ]
    }
  }

  const services = [
    { 
      id: 'web-app', 
      name: 'Custom Web Application', 
      estimatedHours: 120, 
      description: 'Full-stack web development with modern frameworks',
      type: 'website' as const
    },
    { 
      id: 'ai-agents', 
      name: 'AI Agents & ML Integration', 
      estimatedHours: 100, 
      description: 'Custom AI solutions and LLM integration',
      type: 'ai' as const
    },
    { 
      id: 'database', 
      name: 'Database Design & Setup', 
      estimatedHours: 30, 
      description: 'Database architecture and optimization',
      type: 'website' as const
    },
    { 
      id: 'cloud-hosting', 
      name: 'Cloud Deployment & Hosting', 
      estimatedHours: 24, 
      description: 'Production deployment and infrastructure',
      type: 'website' as const
    },
    { 
      id: 'ecommerce', 
      name: 'E-commerce Platform', 
      estimatedHours: 150, 
      description: 'Complete online store with payment integration',
      type: 'website' as const
    },
    { 
      id: 'api-development', 
      name: 'API Development', 
      estimatedHours: 60, 
      description: 'RESTful APIs and third-party integrations',
      type: 'website' as const
    }
  ]

  const addOns = [
    { id: 'real-time', name: 'Real-time Features', hours: 50, description: 'Live updates and notifications', type: 'website' as const },
    { id: 'security', name: 'Security Implementation', hours: 40, description: 'Advanced security measures', type: 'website' as const },
    { id: 'analytics', name: 'Analytics Dashboard', hours: 45, description: 'Business intelligence tools', type: 'website' as const },
    { id: 'mobile-responsive', name: 'Mobile Optimization', hours: 25, description: 'Mobile-first responsive design', type: 'website' as const },
    { id: 'seo', name: 'SEO Optimization', hours: 20, description: 'Search engine optimization', type: 'website' as const },
    { id: 'performance', name: 'Performance Optimization', hours: 30, description: 'Speed and efficiency improvements', type: 'website' as const }
  ]

  // Calculate complexity multiplier based on project assessment answers
  const getComplexityMultiplier = React.useCallback((serviceId: string): number => {
    if (!isProjectAssessmentComplete) return 1.0

    let multiplier = 1.0
    
    // Apply complexity based on specific service and assessment answers
    const service = services.find(s => s.id === serviceId)
    if (!service) return 1.0

    // Web Application complexity
    if (serviceId === 'web-app') {
      const pages = projectAssessmentAnswers['web_pages']
      const features = projectAssessmentAnswers['web_features']
      
      if (pages === '1-5') multiplier *= 1.0
      else if (pages === '6-15') multiplier *= 1.2
      else if (pages === '16-50') multiplier *= 1.5
      else if (pages === '50+') multiplier *= 2.0

      if (features === 'basic') multiplier *= 1.0
      else if (features === 'standard') multiplier *= 1.3
      else if (features === 'advanced') multiplier *= 1.6
      else if (features === 'enterprise') multiplier *= 2.0
    }

    // AI Agents complexity
    if (serviceId === 'ai-agents') {
      const aiType = projectAssessmentAnswers['ai_type']
      const dataVolume = projectAssessmentAnswers['ai_data_volume']
      
      if (aiType === 'simple_bot') multiplier *= 1.0
      else if (aiType === 'smart_assistant') multiplier *= 1.4
      else if (aiType === 'data_processor') multiplier *= 1.7
      else if (aiType === 'custom_ai') multiplier *= 2.2

      if (dataVolume === 'small') multiplier *= 1.0
      else if (dataVolume === 'medium') multiplier *= 1.3
      else if (dataVolume === 'large') multiplier *= 1.6
      else if (dataVolume === 'enterprise') multiplier *= 2.0
    }

    // Database complexity
    if (serviceId === 'database') {
      const dbSize = projectAssessmentAnswers['db_size']
      const dbComplexity = projectAssessmentAnswers['db_complexity']
      
      if (dbSize === 'small') multiplier *= 1.0
      else if (dbSize === 'medium') multiplier *= 1.3
      else if (dbSize === 'large') multiplier *= 1.6
      else if (dbSize === 'enterprise') multiplier *= 2.0

      if (dbComplexity === 'simple') multiplier *= 1.0
      else if (dbComplexity === 'moderate') multiplier *= 1.2
      else if (dbComplexity === 'complex') multiplier *= 1.5
    }

    // E-commerce complexity
    if (serviceId === 'ecommerce') {
      const products = projectAssessmentAnswers['ecommerce_products']
      const features = projectAssessmentAnswers['ecommerce_features']
      
      if (products === '1-50') multiplier *= 1.0
      else if (products === '51-500') multiplier *= 1.3
      else if (products === '501-5000') multiplier *= 1.6
      else if (products === '5000+') multiplier *= 2.0

      if (features === 'basic') multiplier *= 1.0
      else if (features === 'standard') multiplier *= 1.3
      else if (features === 'advanced') multiplier *= 1.7
      else if (features === 'marketplace') multiplier *= 2.2
    }

    // Cloud hosting scales with overall project size
    if (serviceId === 'cloud-hosting') {
      const traffic = projectAssessmentAnswers['expected_traffic']
      
      if (traffic === 'low') multiplier *= 1.0
      else if (traffic === 'medium') multiplier *= 1.4
      else if (traffic === 'high') multiplier *= 1.8
      else if (traffic === 'enterprise') multiplier *= 2.5
    }

    return multiplier
  }, [projectAssessmentAnswers, isProjectAssessmentComplete, services])

  // Calculate pricing based on hourly rates and project type
  const calculatePricing = React.useCallback(() => {
    let totalHours = 0
    let hasWebsiteComponents = false
    let hasAiComponents = false

    // Calculate hours from selected services with complexity multipliers
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId)
      if (service) {
        const complexityMultiplier = getComplexityMultiplier(serviceId)
        const adjustedHours = service.estimatedHours * complexityMultiplier
        totalHours += adjustedHours
        if (service.type === 'website') hasWebsiteComponents = true
        if (service.type === 'ai') hasAiComponents = true
      }
    })

    // Calculate hours from selected add-ons
    selectedAddOns.forEach(addOnId => {
      const addOn = addOns.find(a => a.id === addOnId)
      if (addOn) {
        totalHours += addOn.hours
        // All current add-ons are website type
        hasWebsiteComponents = true
      }
    })

    // Determine project type based on selected services
    let currentProjectType: 'website' | 'ai' = 'website'
    if (hasAiComponents && !hasWebsiteComponents) {
      currentProjectType = 'ai'
    } else if (hasAiComponents && hasWebsiteComponents) {
      // Mixed project - use AI rate for the entire project
      currentProjectType = 'ai'
    }

    setProjectType(currentProjectType)

    // Calculate base price
    const hourlyRate = currentProjectType === 'ai' ? AI_RATE : WEBSITE_RATE
    const basePrice = totalHours * hourlyRate

    // Calculate estimated days (based on 6 hours per day)
    const estimatedDaysValue = Math.ceil(totalHours / REGULAR_HOURS_PER_DAY)
    setEstimatedDays(estimatedDaysValue)
    
    // Only set selected days to estimated days if no valid selection exists
    // This preserves manual slider adjustments
    setSelectedDays(prev => {
      // If previous value is 0 or outside valid range, use estimated days
      if (prev === 0 || prev > estimatedDaysValue) {
        return estimatedDaysValue
      }
      // Otherwise preserve the user's manual selection
      return prev
    })

    setEstimatedPrice(basePrice)

    // Calculate rush pricing if timeline is reduced
    let rushPricing = 0
    if (selectedDays < estimatedDaysValue && estimatedDaysValue > 0) {
      const reductionPercentage = ((estimatedDaysValue - selectedDays) / estimatedDaysValue) * 100
      
      // Cap at 30% reduction
      const cappedReduction = Math.min(reductionPercentage, 30)
      
      // Calculate additional cost per hour (every 10% reduction = +$1/hour)
      const additionalCostPerHour = Math.floor(cappedReduction / 10) * 1
      
      // Total additional cost for 8 hours per day for the reduced timeline
      const additionalHours = selectedDays * RUSH_HOURS_PER_DAY
      rushPricing = additionalHours * additionalCostPerHour
    }

    setRushPrice(rushPricing)

    // Calculate total with rush pricing
    const totalPrice = basePrice + rushPricing

    // Recommend tier based on total price
    if (totalPrice < 3000) {
      setRecommendedTier('Starter Package')
    } else if (totalPrice < 8000) {
      setRecommendedTier('Professional Package')
    } else {
      setRecommendedTier('Enterprise Package')
    }

    return totalPrice
  }, [selectedServices, selectedAddOns, selectedDays, getComplexityMultiplier])

  // Helper function to handle parameter-based selection
  const handleParameterSelection = React.useCallback((serviceParam: string | null, packageParam: string | null) => {
    // Clear existing selections first
    setSelectedServices([])
    setSelectedAddOns([])
    
    // Small delay to ensure state is cleared before setting new values
    const timer = setTimeout(() => {
      let servicesToSelect: string[] = []
      
      if (serviceParam) {
        // Map service types to calculator service IDs
        const serviceMapping: { [key: string]: string[] } = {
          'web-development': ['web-app'],
          'ai-systems': ['ai-agents'],
          'database': ['database'],
          'cloud-infrastructure': ['cloud-hosting'],
          'ecommerce': ['ecommerce'],
          'custom-software': ['web-app', 'api-development']
        }
        servicesToSelect = serviceMapping[serviceParam] || []
      }
      
      if (packageParam) {
        // Map package types to calculator service combinations
        const packageMapping: { [key: string]: string[] } = {
          'starter': ['web-app', 'database'],
          'professional': ['web-app', 'ai-agents', 'cloud-hosting', 'security'],
          'enterprise': ['web-app', 'ai-agents', 'cloud-hosting', 'security', 'business-intelligence', 'devops'],
          'consultation': [] // No services pre-selected for consultation
        }
        servicesToSelect = packageMapping[packageParam] || []
      }
      
      // Set services after clearing
      if (servicesToSelect.length > 0) {
        setSelectedServices(servicesToSelect)
      }
      
      // Scroll to calculator section
      const calculatorElement = document.getElementById('calculator')
      if (calculatorElement) {
        calculatorElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
    
    return () => clearTimeout(timer)
  }, [])

  // Handle URL parameters and detect page refresh
  React.useEffect(() => {
    const serviceParam = searchParams.get('service')
    const packageParam = searchParams.get('package')
    
    // Detect if this is a page refresh using Performance API
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    const isPageRefresh = navigationEntry?.type === 'reload'
    
    // If it's initial load, check for refresh and clear parameters
    if (isInitialLoad.current) {
      if (isPageRefresh && (serviceParam || packageParam)) {
        // Clear URL parameters on refresh and scroll to top
        const url = new URL(window.location.href)
        url.searchParams.delete('service')
        url.searchParams.delete('package')
        url.hash = ''
        window.history.replaceState({}, '', url.toString())
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'auto' })
        
        // Clear selections
        setSelectedServices([])
        setSelectedAddOns([])
      } else if (!isPageRefresh && (serviceParam || packageParam)) {
        // Handle normal navigation with parameters
        handleParameterSelection(serviceParam, packageParam)
      }
      
      isInitialLoad.current = false
    } else if (serviceParam || packageParam) {
      // Handle subsequent parameter changes (navigation between services)
      handleParameterSelection(serviceParam, packageParam)
    }
  }, [searchParams, handleParameterSelection])

  // Recalculate pricing when selections change
  React.useEffect(() => {
    calculatePricing()
  }, [calculatePricing])

  const toggleService = React.useCallback((serviceId: string) => {
    setSelectedServices(prev => {
      const newSelection = prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
      
      // Reset assessment when selection changes
      if (newSelection.length !== prev.length) {
        setIsProjectAssessmentComplete(false)
        setProjectAssessmentAnswers({})
      }
      
      return newSelection
    })
  }, [])

  const toggleAddOn = React.useCallback((addOnId: string) => {
    setSelectedAddOns(prev => {
      const newSelection = prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
      
      // Reset assessment when selection changes
      if (newSelection.length !== prev.length) {
        setIsProjectAssessmentComplete(false)
        setProjectAssessmentAnswers({})
      }
      
      return newSelection
    })
  }, [])



  const handleStartProjectAssessment = React.useCallback(() => {
    setShowProjectAssessmentModal(true)
  }, [])

  const handleProjectAssessmentSubmit = React.useCallback((answers: Record<string, string>) => {
    console.log('Project assessment answers:', answers)
    
    // Store the answers for pricing calculation
    setProjectAssessmentAnswers(answers)
    setIsProjectAssessmentComplete(true)
    
    // Close modal
    setShowProjectAssessmentModal(false)
  }, [])

  const handleProjectAssessmentClose = React.useCallback(() => {
    setShowProjectAssessmentModal(false)
  }, [])

  const getTierColor = React.useCallback((tier: string) => {
    switch (tier) {
      case 'Starter Package': return 'text-emerald-400'
      case 'Professional Package': return 'text-purple-400'
      case 'Enterprise Package': return 'text-blue-400'
      default: return 'text-gray-400'
    }
  }, [])

  const getTierGradient = React.useCallback((tier: string) => {
    switch (tier) {
      case 'Starter Package': return 'from-emerald-500/20 to-emerald-600/20'
      case 'Professional Package': return 'from-purple-500/20 to-pink-500/20'
      case 'Enterprise Package': return 'from-blue-500/20 to-cyan-500/20'
      default: return 'from-gray-500/20 to-gray-600/20'
    }
  }, [])

  const totalEstimatedPrice = estimatedPrice + rushPrice
  const minDays = React.useMemo(() => Math.ceil(estimatedDays * 0.7), [estimatedDays]) // 70% of estimated time

  const handleTimelineChange = React.useCallback((newDays: number) => {
    if (newDays >= minDays && newDays <= estimatedDays) {
      setSelectedDays(newDays)
    }
  }, [minDays, estimatedDays])

  // Check if project has selected services and needs assessment
  const needsAssessment = React.useMemo(() => {
    return (selectedServices.length > 0 || selectedAddOns.length > 0) && !isProjectAssessmentComplete
  }, [selectedServices.length, selectedAddOns.length, isProjectAssessmentComplete])

  // Check if ready for quote
  const readyForQuote = React.useMemo(() => {
    return (selectedServices.length > 0 || selectedAddOns.length > 0) && isProjectAssessmentComplete
  }, [selectedServices.length, selectedAddOns.length, isProjectAssessmentComplete])





      return (
    <>
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Enhanced Pricing Header */}
        <div className="text-center">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/15 via-blue-500/15 to-purple-500/15 border border-emerald-400/30 mb-6 shadow-lg shadow-emerald-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300 font-medium uppercase tracking-wider">Our Pricing Structure</span>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/70 backdrop-blur-xl border border-slate-600/40 p-4 rounded-xl text-center shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">${WEBSITE_RATE}</div>
              <div className="text-sm text-gray-300">Website Development</div>
              <div className="text-xs text-gray-500">per hour</div>
            </div>
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/70 backdrop-blur-xl border border-slate-600/40 p-4 rounded-xl text-center shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">${AI_RATE}</div>
              <div className="text-sm text-gray-300">AI Projects</div>
              <div className="text-xs text-gray-500">per hour</div>
            </div>
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/70 backdrop-blur-xl border border-slate-600/40 p-4 rounded-xl text-center shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{REGULAR_HOURS_PER_DAY}</div>
              <div className="text-sm text-gray-300">Regular Schedule</div>
              <div className="text-xs text-gray-500">hours/day</div>
            </div>
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/70 backdrop-blur-xl border border-slate-600/40 p-4 rounded-xl text-center shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">{RUSH_HOURS_PER_DAY}</div>
              <div className="text-sm text-gray-300">Rush Projects</div>
              <div className="text-xs text-gray-500">hours/day</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Services Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Core Services */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-500/20 border border-blue-400/30">
                  <Settings className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Select Your Required Services</h4>
              </motion.div>
              
              <motion.div
                className="grid gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {services.map((service, index) => {
                  const complexityMultiplier = getComplexityMultiplier(service.id)
                  const adjustedHours = service.estimatedHours * complexityMultiplier
                  const servicePrice = adjustedHours * (service.type === 'ai' ? AI_RATE : WEBSITE_RATE)
                  const isSelected = selectedServices.includes(service.id)
                  
                  return (
                    <motion.div
                      key={service.id}
                      className={`relative group ${
                        isSelected
                          ? 'bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 border-blue-400/50 shadow-lg shadow-blue-500/20'
                          : 'bg-gradient-to-r from-slate-900/80 to-slate-800/60 hover:from-slate-800/90 hover:to-slate-700/70 border-slate-600/50 hover:border-slate-500/60'
                      } border backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-slate-900/30`}
                      variants={fadeInUp}
                      whileHover={{ y: -2, scale: 1.005 }}
                      onClick={() => toggleService(service.id)}
                    >
                      {/* Premium glow effect for selected items */}
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-400/5 to-purple-500/5 rounded-2xl blur-xl"></div>
                      )}
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                          {/* Enhanced Custom Checkbox */}
                          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center mt-0.5 transition-all duration-300 ${
                            isSelected
                              ? 'border-blue-400 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-400/30'
                              : 'border-slate-400 group-hover:border-slate-300 bg-slate-800/50'
                          }`}>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              </motion.div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h5 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">{service.name}</h5>
                              <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
                                service.type === 'ai' 
                                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30' 
                                  : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-400/30'
                              }`}>
                                {service.type === 'ai' ? 'AI' : 'Web'}
                              </span>
                            </div>
                            
                            <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                            
                            <div className="flex justify-between items-center mb-4">
                              <div className="space-y-1">
                                <div className="text-gray-300 text-sm">
                                  {Math.round(adjustedHours)} hours
                                  {complexityMultiplier !== 1.0 && (
                                    <span className="text-amber-400 ml-1 font-medium">
                                      ({complexityMultiplier.toFixed(1)}x complexity)
                                    </span>
                                  )}
                                </div>
                                {complexityMultiplier !== 1.0 && (
                                  <div className="text-xs text-gray-500">
                                    Base: {service.estimatedHours} hours
                                  </div>
                                )}
                              </div>
                              <div className="text-right">
                                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                  ${servicePrice.toLocaleString()}
                                </div>
                                {complexityMultiplier !== 1.0 && (
                                  <div className="text-xs text-gray-500 line-through">
                                    ${(service.estimatedHours * (service.type === 'ai' ? AI_RATE : WEBSITE_RATE)).toLocaleString()}
                                  </div>
                                )}
                              </div>
                            </div>
                            

                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>

            {/* Enhanced Add-ons */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500/20 via-orange-400/20 to-yellow-500/20 border border-amber-400/30">
                  <Plus className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">Optional Add-ons</h4>
              </motion.div>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {addOns.map((addOn) => {
                  const addOnPrice = addOn.hours * WEBSITE_RATE
                  const isSelected = selectedAddOns.includes(addOn.id)
                  
                  return (
                    <motion.div
                      key={addOn.id}
                      className={`relative group ${
                        isSelected
                          ? 'bg-gradient-to-r from-amber-500/10 via-orange-400/10 to-yellow-500/10 border-amber-400/50 shadow-lg shadow-amber-500/20'
                          : 'bg-gradient-to-r from-slate-900/80 to-slate-800/60 hover:from-slate-800/90 hover:to-slate-700/70 border-slate-600/50 hover:border-slate-500/60'
                      } border backdrop-blur-xl rounded-xl p-4 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-slate-900/30`}
                      variants={fadeInUp}
                      whileHover={{ y: -2, scale: 1.005 }}
                      onClick={() => toggleAddOn(addOn.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'border-amber-400 bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-400/30'
                            : 'border-slate-400 group-hover:border-slate-300 bg-slate-800/50'
                        }`}>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-white group-hover:text-amber-300 transition-colors">{addOn.name}</span>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-400/30">
                                Web
                              </span>
                            </div>
                            <div className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-bold">
                              ${addOnPrice.toLocaleString()}
                            </div>
                          </div>
                          <div className="text-sm text-gray-300 mb-1">{addOn.description}</div>
                          <div className="text-xs text-gray-500">{addOn.hours} hours</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>

          {/* Premium Enhanced Price Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Matching header for alignment */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-cyan-500/20 border border-emerald-400/30">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">Project Estimate</h4>
              </motion.div>

              {/* Main Total Cost Card - Enhanced */}
              <motion.div
                className={`relative overflow-hidden border backdrop-blur-xl rounded-3xl p-8 ${
                  totalEstimatedPrice > 0 
                    ? `bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 border-blue-400/40 shadow-2xl shadow-blue-500/20`
                    : 'bg-gradient-to-br from-slate-900/80 to-slate-800/70 border-slate-600/40'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Enhanced Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-purple-500/5"></div>
                
                <div className="relative z-10">
                  {/* Enhanced Header */}
                  <div className="text-center mb-8">
                    <motion.div 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/15 via-blue-500/15 to-cyan-500/15 border border-emerald-400/30 mb-4 shadow-lg shadow-emerald-500/10"
                      whileHover={{ scale: 1.05 }}
                    >
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Total Cost</span>
                    </motion.div>
                    
                    <motion.div 
                      className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-2"
                      key={totalEstimatedPrice}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, type: "spring" }}
                    >
                      ${totalEstimatedPrice.toLocaleString()}
                    </motion.div>
                    
                    {totalEstimatedPrice > 0 && (
                      <motion.div 
                        className="text-sm text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Final cost may vary based on complexity
                      </motion.div>
                    )}
                  </div>

                  {/* Enhanced Price Breakdown */}
                  {estimatedPrice > 0 && (
                    <motion.div 
                      className="space-y-3 mb-6 p-4 bg-gradient-to-r from-slate-800/60 to-slate-700/40 rounded-xl border border-slate-600/40 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Base Price:</span>
                        <span className="text-white font-medium">${estimatedPrice.toLocaleString()}</span>
                      </div>
                      {rushPrice > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Rush Surcharge:</span>
                          <span className="text-orange-400 font-medium">+${rushPrice.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="border-t border-slate-600/40 pt-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300 font-medium">Project Type:</span>
                          <span className={`font-semibold ${projectType === 'ai' ? 'text-purple-400' : 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'}`}>
                            {projectType === 'ai' ? 'AI Project' : 'Website Project'}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Enhanced Timeline Slider */}
                  {estimatedDays > 0 && (
                    <motion.div 
                      className="mb-6 p-4 bg-gradient-to-r from-slate-800/60 to-slate-700/40 rounded-xl border border-slate-600/40 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-4 h-4 text-orange-400" />
                        <span className="text-sm font-medium bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">Project Timeline</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">{estimatedDays}</div>
                          <div className="text-xs text-gray-400">Estimated</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-xl font-bold mb-1 ${
                            selectedDays < estimatedDays 
                              ? 'bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent' 
                              : 'bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent'
                          }`}>
                            {selectedDays}
                          </div>
                          <div className="text-xs text-gray-400">Selected</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <input
                          type="range"
                          min={minDays}
                          max={estimatedDays}
                          value={selectedDays}
                          onChange={(e) => handleTimelineChange(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                          style={{
                            background: `linear-gradient(to right, #f97316 0%, #f97316 ${((selectedDays - minDays) / Math.max(estimatedDays - minDays, 1)) * 100}%, #374151 ${((selectedDays - minDays) / Math.max(estimatedDays - minDays, 1)) * 100}%, #374151 100%)`
                          }}
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Min: {minDays} days</span>
                          <span>Max: {estimatedDays} days</span>
                        </div>
                      </div>

                      {selectedDays < estimatedDays && (
                        <motion.div
                          className="mt-4 pt-4 border-t border-slate-600/40"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-gradient-to-r from-orange-500/15 to-red-500/15 border border-orange-400/30 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Lightning className="w-3 h-3 text-orange-400" />
                              <span className="text-xs text-orange-400 font-medium">Rush Project</span>
                            </div>
                            <div className="text-xs text-gray-300 space-y-1">
                              <div className="flex justify-between">
                                <span>Time Reduction:</span>
                                <span className="text-orange-400">{Math.round(((estimatedDays - selectedDays) / estimatedDays) * 100)}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Daily Hours:</span>
                                <span className="text-orange-400">{RUSH_HOURS_PER_DAY} hrs/day</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  {/* Enhanced Recommended Tier */}
                  {recommendedTier && totalEstimatedPrice > 0 && (
                    <motion.div 
                      className="text-center mb-6 p-4 bg-gradient-to-r from-yellow-500/15 to-amber-500/15 border border-yellow-400/30 rounded-xl shadow-lg shadow-yellow-500/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs text-yellow-300 font-medium uppercase tracking-wider">Recommended Package</span>
                      </div>
                      <div className={`text-lg font-bold ${getTierColor(recommendedTier)}`}>
                        {recommendedTier}
                      </div>
                    </motion.div>
                  )}

                  {/* Enhanced Project Summary */}
                  <motion.div 
                    className="space-y-4 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Selected Services:</span>
                      <span className="text-white font-semibold">{selectedServices.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Add-ons:</span>
                      <span className="text-white font-semibold">{selectedAddOns.length}</span>
                    </div>
                    {estimatedDays > 0 && (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Timeline:</span>
                          <span className="text-white font-semibold">{selectedDays} days</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Daily Hours:</span>
                          <span className="text-white font-semibold">{selectedDays < estimatedDays ? RUSH_HOURS_PER_DAY : REGULAR_HOURS_PER_DAY} hours</span>
                        </div>
                      </>
                    )}
                  </motion.div>

                  {/* Enhanced CTA Button */}
                  {totalEstimatedPrice > 0 ? (
                    readyForQuote ? (
                      <motion.button
                        onClick={() => {
                          // Navigate to contact page with pre-filled data
                          const selectedServiceNames = selectedServices.map(id => 
                            services.find(s => s.id === id)?.name
                          ).filter(Boolean).join(', ')
                          
                          const selectedAddOnNames = selectedAddOns.map(id => 
                            addOns.find(a => a.id === id)?.name
                          ).filter(Boolean).join(', ')
                          
                          const projectDetails = `Selected Services: ${selectedServiceNames}${selectedAddOnNames ? `\nAdd-ons: ${selectedAddOnNames}` : ''}\nEstimated Total: $${totalEstimatedPrice.toLocaleString()}\nTimeline: ${selectedDays} days`
                          
                          window.location.href = `/contact?project=${encodeURIComponent(projectDetails)}&amount=${totalEstimatedPrice}`
                        }}
                        className="w-full py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-3 text-lg transform hover:scale-[1.02]"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Rocket className="w-5 h-5" />
                        Get Detailed Quote
                      </motion.button>
                    ) : needsAssessment ? (
                      <motion.button
                        onClick={handleStartProjectAssessment}
                        className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 hover:shadow-xl hover:shadow-amber-500/30 flex items-center justify-center gap-3 text-lg transform hover:scale-[1.02]"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Lightbulb className="w-5 h-5" />
                        Start Project Assessment
                      </motion.button>
                    ) : (
                      <motion.div
                        className="w-full p-6 bg-gradient-to-r from-gray-500/10 to-gray-600/10 border border-gray-500/30 rounded-xl text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <Settings className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-400 font-semibold">Services Selected</span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Assessment complete! Your pricing has been calculated based on your project requirements.
                        </p>
                      </motion.div>
                    )
                  ) : (
                    <motion.div 
                      className="text-center p-8 text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Settings className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <div className="text-sm">Select services above to see your estimate</div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Enhanced Additional Information Card */}
              {totalEstimatedPrice > 0 && (
                <motion.div
                  className="bg-gradient-to-r from-slate-900/80 to-slate-800/70 backdrop-blur-xl border border-slate-600/40 rounded-2xl p-6 shadow-lg shadow-slate-900/30 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h5 className="text-lg font-semibold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                    <Info className="w-4 h-4 text-cyan-400" />
                    What's Included
                  </h5>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span>Complete source code delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span>Technical documentation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span>Deployment assistance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span>30-day support period</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span>Code review & optimization</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Assessment Modal */}
      {showProjectAssessmentModal && (
        <ProjectAssessmentModal
          selectedServices={selectedServices}
          selectedAddOns={selectedAddOns}
          services={services}
          addOns={addOns}
          isOpen={showProjectAssessmentModal}
          onClose={handleProjectAssessmentClose}
          onSubmit={handleProjectAssessmentSubmit}
        />
      )}
    </>
  )
})
PricingCalculator.displayName = 'PricingCalculator'

// Helper function to convert service titles to URL slugs
function getServiceSlug(title: string): string {
  const slugMap: { [key: string]: string } = {
    'Custom Software Development': 'custom-software',
    'AI & Intelligent Systems': 'ai-systems',
    'Full-stack Web Development': 'web-development',
    'Database Solutions': 'database',
    'Cloud & Infrastructure': 'cloud-infrastructure',
    'E-commerce Platforms': 'ecommerce'
  }
  return slugMap[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

// Helper function to convert package names to URL slugs
function getPackageSlug(name: string): string {
  const slugMap: { [key: string]: string } = {
    'Expert Consultation': 'consultation',
    'Starter Package': 'starter',
    'Professional Package': 'professional',
    'Enterprise Package': 'enterprise'
  }
  return slugMap[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

// Main Services Page Content Component  
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
      price: "Starting at $1,500",
      features: [
        "Basic web application",
        "Responsive design",
        "Basic API integration",
        "Database setup and configuration",
        "1 month support"
      ],
      ideal: "Small businesses, MVPs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional Package",
      description: "Comprehensive solution for growing businesses requiring advanced features and integrations",
      price: "Starting at $4,500",
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
      price: "Starting at $9,000",
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
                    <Link href={`/services?service=${getServiceSlug(service.title)}#calculator`}>
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
                      href={index === 0 ? "/contact" : `/services?package=${getPackageSlug(pkg.name)}#calculator`}
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
      <section id="calculator" className="py-32 px-4 border-t border-gray-800/50 relative overflow-hidden">
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

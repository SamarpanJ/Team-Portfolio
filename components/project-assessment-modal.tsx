'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Lightbulb, Brain, Database, Globe, ShoppingCart, Cloud, Code } from 'lucide-react';

interface ProjectAssessmentModalProps {
  selectedServices: string[];
  selectedAddOns: string[];
  services: Array<{
    id: string;
    name: string;
    type: 'website' | 'ai';
  }>;
  addOns: Array<{
    id: string;
    name: string;
  }>;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (answers: Record<string, string>) => void;
}

interface Question {
  id: string;
  question: string;
  type: 'select' | 'text';
  options?: { value: string; label: string; description?: string }[];
  placeholder?: string;
  required: boolean;
}

export function ProjectAssessmentModal({ 
  selectedServices, 
  selectedAddOns, 
  services, 
  addOns, 
  isOpen, 
  onClose, 
  onSubmit 
}: ProjectAssessmentModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate dynamic questions based on selected services
  const questions = useMemo(() => {
    const dynamicQuestions: Question[] = [];
    
    const hasWebApp = selectedServices.includes('web-app');
    const hasAI = selectedServices.includes('ai-agents');
    const hasDatabase = selectedServices.includes('database');
    const hasEcommerce = selectedServices.includes('ecommerce');
    const hasCloudHosting = selectedServices.includes('cloud-hosting');
    const hasAPI = selectedServices.includes('api-development');

    // Web Application specific questions
    if (hasWebApp) {
      dynamicQuestions.push({
        id: 'web_pages',
        question: 'How many pages/screens will your web application have?',
        type: 'select',
        required: true,
        options: [
          { value: '1-5', label: '1-5 pages', description: 'Simple landing page or basic app' },
          { value: '6-15', label: '6-15 pages', description: 'Small business website or focused app' },
          { value: '16-50', label: '16-50 pages', description: 'Medium-sized website or comprehensive app' },
          { value: '50+', label: '50+ pages', description: 'Large website or complex application' }
        ]
      });

      dynamicQuestions.push({
        id: 'web_features',
        question: 'What level of functionality does your web app need?',
        type: 'select',
        required: true,
        options: [
          { value: 'basic', label: 'Basic Features', description: 'Contact forms, basic content, simple navigation' },
          { value: 'standard', label: 'Standard Features', description: 'User login, dashboards, content management, search' },
          { value: 'advanced', label: 'Advanced Features', description: 'Real-time updates, complex workflows, integrations' },
          { value: 'enterprise', label: 'Enterprise Features', description: 'Multi-tenant, advanced security, custom modules' }
        ]
      });
    }

    // E-commerce specific questions
    if (hasEcommerce) {
      dynamicQuestions.push({
        id: 'ecommerce_products',
        question: 'How many products will you be selling?',
        type: 'select',
        required: true,
        options: [
          { value: '1-50', label: '1-50 products', description: 'Small boutique or specialty store' },
          { value: '51-500', label: '51-500 products', description: 'Medium-sized retail business' },
          { value: '501-5000', label: '501-5,000 products', description: 'Large retail operation' },
          { value: '5000+', label: '5,000+ products', description: 'Enterprise catalog or marketplace' }
        ]
      });

      dynamicQuestions.push({
        id: 'ecommerce_features',
        question: 'What type of e-commerce functionality do you need?',
        type: 'select',
        required: true,
        options: [
          { value: 'basic', label: 'Basic Store', description: 'Product catalog, cart, simple checkout, basic payments' },
          { value: 'standard', label: 'Standard Store', description: 'Inventory management, customer accounts, multiple payment methods' },
          { value: 'advanced', label: 'Advanced Store', description: 'Subscriptions, coupons, advanced analytics, shipping integration' },
          { value: 'marketplace', label: 'Marketplace', description: 'Multi-vendor, complex pricing, vendor management, commissions' }
        ]
      });
    }

    // AI specific questions
    if (hasAI) {
      dynamicQuestions.push({
        id: 'ai_type',
        question: 'What type of AI functionality do you need?',
        type: 'select',
        required: true,
        options: [
          { value: 'simple_bot', label: 'Simple Chatbot', description: 'Basic Q&A, FAQ responses, simple customer service' },
          { value: 'smart_assistant', label: 'Smart Assistant', description: 'Context-aware responses, task automation, intelligent routing' },
          { value: 'data_processor', label: 'Data Processing AI', description: 'Analytics, pattern recognition, automated insights' },
          { value: 'custom_ai', label: 'Custom AI Solution', description: 'Specialized machine learning, custom models, complex algorithms' }
        ]
      });

      dynamicQuestions.push({
        id: 'ai_data_volume',
        question: 'What volume of data will your AI system process?',
        type: 'select',
        required: true,
        options: [
          { value: 'small', label: 'Small Volume', description: 'Simple text processing, small datasets' },
          { value: 'medium', label: 'Medium Volume', description: 'Regular document processing, moderate datasets' },
          { value: 'large', label: 'Large Volume', description: 'Heavy data processing, large datasets, frequent operations' },
          { value: 'enterprise', label: 'Enterprise Volume', description: 'Real-time processing, massive datasets, continuous operations' }
        ]
      });
    }

    // Database specific questions
    if (hasDatabase) {
      dynamicQuestions.push({
        id: 'db_size',
        question: 'What size database do you expect to need?',
        type: 'select',
        required: true,
        options: [
          { value: 'small', label: 'Small Database', description: 'Basic user data, simple content (< 10GB)' },
          { value: 'medium', label: 'Medium Database', description: 'Business data, moderate content (10GB - 500GB)' },
          { value: 'large', label: 'Large Database', description: 'Extensive data, large content library (500GB - 5TB)' },
          { value: 'enterprise', label: 'Enterprise Database', description: 'Big data, complex relationships, analytics (5TB+)' }
        ]
      });

      dynamicQuestions.push({
        id: 'db_complexity',
        question: 'How complex will your data relationships be?',
        type: 'select',
        required: true,
        options: [
          { value: 'simple', label: 'Simple Structure', description: 'Basic tables, minimal relationships' },
          { value: 'moderate', label: 'Moderate Structure', description: 'Multiple tables, standard relationships, some joins' },
          { value: 'complex', label: 'Complex Structure', description: 'Many tables, complex relationships, advanced queries, optimization needed' }
        ]
      });
    }

    // Traffic/Performance question for cloud hosting or multiple services
    if (hasCloudHosting || selectedServices.length > 2) {
      dynamicQuestions.push({
        id: 'expected_traffic',
        question: 'What level of traffic/usage do you expect?',
        type: 'select',
        required: true,
        options: [
          { value: 'low', label: 'Low Traffic', description: 'Small team, light usage (< 1,000 visitors/month)' },
          { value: 'medium', label: 'Medium Traffic', description: 'Growing business, regular usage (1,000-50,000 visitors/month)' },
          { value: 'high', label: 'High Traffic', description: 'Popular application, heavy usage (50,000+ visitors/month)' },
          { value: 'enterprise', label: 'Enterprise Scale', description: 'Massive usage, peak loads, global audience' }
        ]
      });
    }

    // Integration question for multiple services
    if (selectedServices.length > 1) {
      dynamicQuestions.push({
        id: 'integrations',
        question: 'What systems or services need to be integrated?',
        type: 'text',
        required: false,
        placeholder: 'e.g., Payment gateways (Stripe, PayPal), CRM (Salesforce), Email (Mailchimp), Analytics (Google Analytics), Social media APIs...'
      });
    }

    return dynamicQuestions;
  }, [selectedServices, selectedAddOns]);

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onSubmit(answers);
    setIsSubmitting(false);
    
    // Reset form
    setCurrentStep(0);
    setAnswers({});
  };

  const canProceed = currentQuestion?.required ? !!answers[currentQuestion.id] : true;

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'web-app': return <Globe className="w-4 h-4" />;
      case 'ai-agents': return <Brain className="w-4 h-4" />;
      case 'database': return <Database className="w-4 h-4" />;
      case 'ecommerce': return <ShoppingCart className="w-4 h-4" />;
      case 'cloud-hosting': return <Cloud className="w-4 h-4" />;
      case 'api-development': return <Code className="w-4 h-4" />;
      default: return <Lightbulb className="w-4 h-4" />;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <motion.div
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Project Assessment</h3>
                <p className="text-gray-400">Let's understand your project requirements</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* Selected Services Preview */}
          <div className="mb-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-3">Your Selected Services</h4>
            <div className="flex flex-wrap gap-2">
              {selectedServices.map(serviceId => {
                const service = services.find(s => s.id === serviceId);
                return service ? (
                  <div key={serviceId} className="flex items-center gap-2 px-3 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 text-sm">
                    {getServiceIcon(serviceId)}
                    {service.name}
                  </div>
                ) : null;
              })}
              {selectedAddOns.map(addOnId => {
                const addOn = addOns.find(a => a.id === addOnId);
                return addOn ? (
                  <div key={addOnId} className="flex items-center gap-2 px-3 py-2 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-300 text-sm">
                    <Lightbulb className="w-4 h-4" />
                    {addOn.name}
                  </div>
                ) : null;
              })}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Content */}
          {currentQuestion && (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <h4 className="text-2xl font-semibold text-white mb-6">
                {currentQuestion.question}
              </h4>

              {currentQuestion.type === 'select' && currentQuestion.options && (
                <div className="space-y-4">
                  {currentQuestion.options.map((option) => (
                    <div
                      key={option.value}
                      className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20 scale-[1.02]'
                          : 'border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800/70 hover:scale-[1.01]'
                      }`}
                      onClick={() => handleAnswerChange(currentQuestion.id, option.value)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition-all duration-300 ${
                          answers[currentQuestion.id] === option.value
                            ? 'border-blue-500 bg-blue-500 scale-110'
                            : 'border-gray-500'
                        }`}>
                          {answers[currentQuestion.id] === option.value && (
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
                          <div className="font-semibold text-white mb-2 text-lg">
                            {option.label}
                          </div>
                          {option.description && (
                            <div className="text-gray-400 leading-relaxed">
                              {option.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'text' && (
                <div>
                  <textarea
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    rows={4}
                    className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none resize-none text-lg leading-relaxed"
                  />
                </div>
              )}
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="px-8 py-4 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300 text-lg"
              >
                Previous
              </button>
            )}
            
            <div className="flex-1" />
            
            {!isLastStep ? (
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 text-lg ${
                  canProceed
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                Next Question
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed || isSubmitting}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 text-lg ${
                  canProceed && !isSubmitting
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Calculating Complexity...
                  </>
                ) : (
                  <>
                    Complete Assessment
                    <CheckCircle2 className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
} 
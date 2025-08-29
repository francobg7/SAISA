import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Check, Recycle, Droplets, Leaf, Zap, Shield, Target, ChevronDown, ExternalLink } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { services } from '../../data/companyData'

const Services: React.FC = () => {
  const { language } = useLanguage()
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      sectionTitle: 'Nuestros Servicios',
      sectionSubtitle: 'Tecnologías innovadoras que transforman el futuro',
      learnMore: 'Explorar servicio',
      contactUs: 'Comenzar proyecto',
      features: 'Lo que incluye',
      benefits: 'Beneficios clave',
      getQuote: 'Obtener propuesta',
      customSolution: 'Proyectos personalizados',
      customSolutionDesc: 'Cada desafío es único. Creamos soluciones a medida.',
      talkToExperts: 'Consulta gratuita'
    },
    en: {
      sectionTitle: 'Our Services',
      sectionSubtitle: 'Innovative technologies that transform the future',
      learnMore: 'Explore service',
      contactUs: 'Start project',
      features: 'What\'s included',
      benefits: 'Key benefits',
      getQuote: 'Get proposal',
      customSolution: 'Custom projects',
      customSolutionDesc: 'Every challenge is unique. We create tailored solutions.',
      talkToExperts: 'Free consultation'
    }
  }

  const currentContent = content[language]

  const getServiceIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'leaf': Leaf,
      'recycle': Recycle,
      'droplets': Droplets,
      'zap': Zap,
      'shield': Shield,
      'target': Target
    }
    return iconMap[iconName] || Target
  }

  const getServiceGradient = (index: number) => {
    const gradients = [
      'from-blue-500 via-blue-600 to-indigo-600',
      'from-emerald-500 via-green-600 to-teal-600',
      'from-purple-500 via-violet-600 to-purple-600',
      'from-orange-500 via-red-500 to-pink-600',
      'from-cyan-500 via-blue-500 to-indigo-600',
      'from-amber-500 via-orange-500 to-red-500'
    ]
    return gradients[index % gradients.length]
  }

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId)
  }

  const handleContactClick = (serviceId: string) => {
    const service = services.find((s: any) => s.id === serviceId)
    const message = language === 'es'
      ? `Hola, quiero iniciar un proyecto de ${service?.title.es}`
      : `Hello, I want to start a ${service?.title.en} project`
    
    const whatsappUrl = `https://wa.me/+595984774091?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-8 shadow-lg shadow-blue-500/25">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {currentContent.sectionTitle}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {currentContent.sectionSubtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {services.map((service: any, index: number) => {
            const IconComponent = getServiceIcon(service.icon)
            const gradientClass = getServiceGradient(index)
            const isExpanded = selectedService === service.id
            const isHovered = hoveredService === service.id
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="group"
              >
                {/* Service Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Card content */}
                  <div className="relative p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.button
                        onClick={() => handleServiceClick(service.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 border border-white/20"
                      >
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.button>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                      {service.title[language]}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-8 line-clamp-3">
                      {service.description[language]}
                    </p>

                    {/* Quick stats or features */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="text-2xl font-bold text-white mb-1">
                          {service.features[language].length}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">
                          {language === 'es' ? 'Características' : 'Features'}
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="text-2xl font-bold text-emerald-400 mb-1">
                          100%
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">
                          {language === 'es' ? 'Sostenible' : 'Sustainable'}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <motion.button
                        onClick={() => handleServiceClick(service.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
                      >
                        {currentContent.learnMore}
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => handleContactClick(service.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full bg-gradient-to-r ${gradientClass} text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        {currentContent.contactUs}
                      </motion.button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="border-t border-white/10 bg-black/20 backdrop-blur-sm"
                      >
                        <div className="p-8">
                          <div className="space-y-8">
                            
                            {/* Features */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                                {currentContent.features}
                              </h4>
                              <div className="grid gap-3">
                                {service.features[language].map((feature: string, featureIndex: number) => (
                                  <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: featureIndex * 0.1 }}
                                    className="flex items-center gap-3"
                                  >
                                    <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                      <Check className="w-3 h-3 text-emerald-400" />
                                    </div>
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* CTA */}
                            <motion.button
                              onClick={() => handleContactClick(service.id)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-gradient-to-r from-white to-gray-100 text-gray-900 py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              {currentContent.getQuote}
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 border border-white rounded-full animate-pulse" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8"
              >
                <Target className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-4xl font-bold text-white mb-6">
                {currentContent.customSolution}
              </h3>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                {currentContent.customSolutionDesc}
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = language === 'es'
                    ? 'Hola, necesito una consulta para un proyecto personalizado'
                    : 'Hello, I need a consultation for a custom project'
                  const whatsappUrl = `https://wa.me/+595984774091?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                }}
                className="bg-white text-purple-600 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
              >
                {currentContent.talkToExperts}
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Check, Recycle, Droplets, Leaf, Zap, Shield, Target } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { services } from '../data/companyData'

const Services: React.FC = () => {
  const { language } = useLanguage()
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      sectionTitle: 'Nuestros Servicios',
      sectionSubtitle: 'Soluciones integrales y tecnologías innovadoras para los desafíos ambientales del siglo XXI',
      learnMore: 'Conocer Más',
      viewDetails: 'Ver Detalles',
      features: 'Características Principales',
      contactUs: 'Contáctanos',
      getQuote: 'Solicitar Cotización'
    },
    en: {
      sectionTitle: 'Our Services',
      sectionSubtitle: 'Comprehensive solutions and innovative technologies for the environmental challenges of the 21st century',
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      features: 'Key Features',
      contactUs: 'Contact Us',
      getQuote: 'Get Quote'
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

  const getServiceColor = (colorName: string) => {
    const colorMap: { [key: string]: string } = {
      'primary': 'from-primary-500 to-primary-600',
      'secondary': 'from-secondary-500 to-secondary-600',
      'accent': 'from-accent-500 to-accent-600',
      'green': 'from-green-500 to-green-600',
      'blue': 'from-blue-500 to-blue-600',
      'purple': 'from-purple-500 to-purple-600'
    }
    return colorMap[colorName] || 'from-primary-500 to-primary-600'
  }

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId)
  }

  const handleContactClick = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId)
    const message = language === 'es'
      ? `Hola, me interesa el servicio de ${service?.title.es}`
      : `Hello, I am interested in the ${service?.title.en} service`
    
    const whatsappUrl = `https://wa.me/+595984774091?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-secondary-50" />
      
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-accent-50 to-primary-50 rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header - Full Width */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                {currentContent.sectionTitle}
              </h2>
              <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {currentContent.sectionSubtitle}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid - Expanded Layout */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const IconComponent = getServiceIcon(service.icon)
                const gradientClass = getServiceColor(service.color)
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div 
                      className={`relative overflow-hidden rounded-3xl transition-all duration-500 group-hover:shadow-2xl ${
                        selectedService === service.id ? 'ring-4 ring-primary-500 ring-offset-4' : ''
                      }`}
                      onClick={() => handleServiceClick(service.id)}
                    >
                      {/* Service Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-90`} />
                      
                      {/* Service Content */}
                      <div className="relative p-8 text-white">
                        {/* Service Header */}
                        <div className="flex items-start justify-between mb-8">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30"
                          >
                            <ArrowRight className="w-5 h-5 text-white" />
                          </motion.button>
                        </div>

                        {/* Service Content */}
                        <div className="mb-8">
                          <h3 className="text-3xl font-bold mb-6 group-hover:text-white transition-colors duration-300">
                            {service.title[language]}
                          </h3>
                          <p className="text-lg leading-relaxed text-white/90">
                            {service.description[language]}
                          </p>
                        </div>

                        {/* Features Preview */}
                        <div className="space-y-4 mb-8">
                          {service.features[language].slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-white/90">{feature}</span>
                            </div>
                          ))}
                          {service.features[language].length > 3 && (
                            <div className="text-white/80 font-medium">
                              +{service.features[language].length - 3} {language === 'es' ? 'más características' : 'more features'}
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleServiceClick(service.id)
                            }}
                            className="flex-1 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl py-3 px-6 font-medium transition-all duration-300 hover:bg-white/30 hover:border-white/50"
                          >
                            {selectedService === service.id ? currentContent.viewDetails : currentContent.learnMore}
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleContactClick(service.id)
                            }}
                            className="flex-1 bg-white text-gray-900 rounded-xl py-3 px-6 font-medium transition-all duration-300 hover:bg-gray-100 shadow-lg"
                          >
                            {currentContent.contactUs}
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Service Details */}
                    <AnimatePresence>
                      {selectedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -20 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -20 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="mt-8"
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                            <div className="grid md:grid-cols-2 gap-8">
                              {/* Features List */}
                              <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                                  {language === 'es' ? 'Características Principales' : 'Key Features'}
                                </h4>
                                <div className="space-y-4">
                                  {service.features[language].map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center space-x-3">
                                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                                        <Check className="w-4 h-4 text-primary-600" />
                                      </div>
                                      <span className="text-gray-700">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Benefits */}
                              <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                                  {language === 'es' ? 'Beneficios' : 'Benefits'}
                                </h4>
                                <div className="space-y-4">
                                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100">
                                    <div className="flex items-center space-x-3 mb-3">
                                      <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-white" />
                                      </div>
                                      <span className="font-semibold text-gray-900">
                                        {language === 'es' ? 'Eficiencia' : 'Efficiency'}
                                      </span>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                      {language === 'es' 
                                        ? 'Optimización de procesos para máxima efectividad'
                                        : 'Process optimization for maximum effectiveness'
                                      }
                                    </p>
                                  </div>
                                  
                                  <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-2xl p-6 border border-secondary-100">
                                    <div className="flex items-center space-x-3 mb-3">
                                      <div className="w-8 h-8 bg-secondary-500 rounded-lg flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-white" />
                                      </div>
                                      <span className="font-semibold text-gray-900">
                                        {language === 'es' ? 'Sostenibilidad' : 'Sustainability'}
                                      </span>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                      {language === 'es'
                                        ? 'Soluciones respetuosas con el medio ambiente'
                                        : 'Environmentally friendly solutions'
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Call to Action */}
                            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleContactClick(service.id)}
                                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300"
                              >
                                {language === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full" />
                <div className="absolute top-10 right-10 w-24 h-24 border-2 border-white rounded-full" />
                <div className="absolute bottom-10 left-20 w-20 h-20 border-2 border-white rounded-full" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">
                  {language === 'es' 
                    ? '¿Necesitas una Solución Personalizada?' 
                    : 'Need a Custom Solution?'
                  }
                </h3>
                <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                  {language === 'es'
                    ? 'Nuestro equipo de expertos está listo para crear soluciones ambientales adaptadas a tus necesidades específicas'
                    : 'Our team of experts is ready to create environmental solutions tailored to your specific needs'
                  }
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const message = language === 'es'
                      ? 'Hola, necesito una solución personalizada para mi empresa'
                      : 'Hello, I need a custom solution for my company'
                    const whatsappUrl = `https://wa.me/+595984774091?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, '_blank')
                  }}
                  className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-xl"
                >
                  {language === 'es' ? 'Conversar con Expertos' : 'Talk to Experts'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Check, ExternalLink, Recycle, Droplets, Wind, RefreshCw } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { services } from '../data/companyData'
import { AnimatePresence } from 'framer-motion'

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
      'recycle': Recycle,
      'droplets': Droplets,
      'wind': Wind,
      'refresh-cw': RefreshCw
    }
    return iconMap[iconName] || Recycle
  }

  const getServiceColor = (colorName: string) => {
    const colorMap: { [key: string]: string } = {
      'primary': 'from-primary-500 to-primary-600',
      'secondary': 'from-secondary-500 to-secondary-600',
      'accent': 'from-accent-500 to-accent-600'
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
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {currentContent.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.sectionSubtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = getServiceIcon(service.icon)
            const gradientClass = getServiceColor(service.color)
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div 
                  className={`card p-8 h-full transition-all duration-300 group-hover:shadow-2xl ${
                    selectedService === service.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => handleServiceClick(service.id)}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4 text-gray-600" />
                    </motion.button>
                  </div>

                  {/* Service Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title[language]}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description[language]}
                    </p>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-3 mb-6">
                    {service.features[language].slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary-600" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {service.features[language].length > 2 && (
                      <div className="text-sm text-primary-600 font-medium">
                        +{service.features[language].length - 2} {language === 'es' ? 'más características' : 'more features'}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleServiceClick(service.id)
                      }}
                      className="flex-1 btn-outline text-sm py-2 px-4"
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
                      className="flex-1 btn-primary text-sm py-2 px-4"
                    >
                      {currentContent.contactUs}
                    </motion.button>
                  </div>
                </div>

                {/* Expanded Service Details */}
                <AnimatePresence>
                  {selectedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        {currentContent.features}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {service.features[language].map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-primary-600" />
                            </div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleContactClick(service.id)
                          }}
                          className="btn-primary flex items-center justify-center space-x-2"
                        >
                          <span>{currentContent.getQuote}</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'es' 
                ? '¿Necesitas una solución personalizada?' 
                : 'Need a customized solution?'
              }
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {language === 'es'
                ? 'Nuestro equipo de expertos está listo para diseñar la solución perfecta para tu empresa'
                : 'Our team of experts is ready to design the perfect solution for your company'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                {currentContent.contactUs}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/+595984774091', '_blank')}
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

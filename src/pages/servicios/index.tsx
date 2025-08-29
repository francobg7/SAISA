import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '../../components/ui'
import { useLanguage } from '../../contexts/LanguageContext'
import { services } from '../../data/companyData'

const ServiciosPage: React.FC = () => {
  const { language } = useLanguage()

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      pageTitle: 'Nuestros Servicios',
      pageSubtitle: 'Soluciones integrales y sostenibles para los desafíos ambientales más complejos de Latinoamérica.',
      servicesTitle: 'Servicios Principales',
      servicesSubtitle: 'Ofrecemos una gama completa de servicios ambientales diseñados para maximizar el impacto positivo y la rentabilidad.',
      features: {
        title: '¿Por qué elegir nuestros servicios?',
        subtitle: 'Combinamos innovación tecnológica con experiencia local para resultados excepcionales.',
        items: [
          {
            title: 'Tecnología de Vanguardia',
            description: 'Utilizamos las últimas innovaciones en tecnología ambiental',
            icon: '🚀'
          },
          {
            title: 'Experiencia Local',
            description: 'Conocimiento profundo de los desafíos regionales',
            icon: '🌍'
          },
          {
            title: 'Resultados Medibles',
            description: 'Impacto cuantificable en métricas ambientales y económicas',
            icon: '📊'
          },
          {
            title: 'Sostenibilidad Integral',
            description: 'Soluciones que benefician al medio ambiente y a tu negocio',
            icon: '♻️'
          }
        ]
      },
      cta: {
        title: '¿Listo para transformar tu impacto ambiental?',
        subtitle: 'Contáctanos para discutir cómo podemos ayudarte a alcanzar tus objetivos de sostenibilidad.',
        button: 'Solicitar Consulta'
      }
    },
    en: {
      pageTitle: 'Our Services',
      pageSubtitle: 'Comprehensive and sustainable solutions for the most complex environmental challenges in Latin America.',
      servicesTitle: 'Core Services',
      servicesSubtitle: 'We offer a complete range of environmental services designed to maximize positive impact and profitability.',
      features: {
        title: 'Why choose our services?',
        subtitle: 'We combine technological innovation with local expertise for exceptional results.',
        items: [
          {
            title: 'Cutting-edge Technology',
            description: 'We use the latest innovations in environmental technology',
            icon: '🚀'
          },
          {
            title: 'Local Expertise',
            description: 'Deep knowledge of regional challenges',
            icon: '🌍'
          },
          {
            title: 'Measurable Results',
            description: 'Quantifiable impact on environmental and economic metrics',
            icon: '📊'
          },
          {
            title: 'Comprehensive Sustainability',
            description: 'Solutions that benefit both the environment and your business',
            icon: '♻️'
          }
        ]
      },
      cta: {
        title: 'Ready to transform your environmental impact?',
        subtitle: 'Contact us to discuss how we can help you achieve your sustainability goals.',
        button: 'Request Consultation'
      }
    }
  }

  const currentContent = content[language]

  return (
    <motion.main
      key="servicios"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50"
    >
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {currentContent.pageTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {currentContent.pageSubtitle}
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16" ref={servicesRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.servicesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.servicesSubtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} animate delay={index * 0.1}>
                <div className="text-center">
                  <div className={`w-20 h-20 bg-${service.color}-100 text-${service.color}-600 flex items-center justify-center mx-auto mb-6 rounded-full`}>
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description[language]}
                  </p>
                  <div className="space-y-2">
                    {service.features[language].map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.features.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.features.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.features.items.map((feature, index) => (
              <Card key={index} animate delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <h2 className="text-3xl font-bold mb-4">
              {currentContent.cta.title}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {currentContent.cta.subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {currentContent.cta.button}
            </motion.button>
          </Card>
        </div>
      </div>
    </motion.main>
  )
}

export default ServiciosPage 
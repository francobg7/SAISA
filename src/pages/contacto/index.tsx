import React from 'react'
import { motion } from 'framer-motion'

import { Building2, Users, Globe } from 'lucide-react'
import { Card, GoogleMap } from '../../components/ui'
import ContactForm from '../../components/forms/ContactForm'
import ContactInfo from '../../components/forms/ContactInfo'
import { useLanguage } from '../../contexts/LanguageContext'

const ContactoPage: React.FC = () => {
  const { language } = useLanguage()



  const content = {
    es: {
      pageTitle: 'Contáctanos',
      pageSubtitle: 'Estamos aquí para ayudarte a transformar tu impacto ambiental. ¡Conversemos sobre tus necesidades!',
      sendMessage: 'Enviar Mensaje',
      getInTouch: 'Ponte en Contacto',
      readyToHelp: 'Estamos listos para ayudarte a alcanzar tus objetivos de sostenibilidad',
      backToHome: 'Volver al Inicio',
      whyChooseUs: '¿Por qué elegir SAISA?',
      whyChooseUsDescription: 'Somos líderes en innovación ambiental con soluciones probadas y resultados medibles.',
      features: [
        {
          icon: Building2,
          title: 'Experiencia Comprobada',
          description: 'Más de 15 proyectos exitosos en Latinoamérica'
        },
        {
          icon: Users,
          title: 'Equipo Especializado',
          description: 'Profesionales con más de 10 años en el sector ambiental'
        },
        {
          icon: Globe,
          title: 'Alcance Internacional',
          description: 'Presencia en 4 países con alianzas estratégicas'
        }
      ]
    },
    en: {
      pageTitle: 'Contact Us',
      pageSubtitle: 'We are here to help you transform your environmental impact. Let\'s talk about your needs!',
      sendMessage: 'Send Message',
      getInTouch: 'Get in Touch',
      readyToHelp: 'We are ready to help you achieve your sustainability goals',
      backToHome: 'Back to Home',
      whyChooseUs: 'Why Choose SAISA?',
      whyChooseUsDescription: 'We are leaders in environmental innovation with proven solutions and measurable results.',
      features: [
        {
          icon: Building2,
          title: 'Proven Experience',
          description: 'More than 15 successful projects in Latin America'
        },
        {
          icon: Users,
          title: 'Specialized Team',
          description: 'Professionals with more than 10 years in the environmental sector'
        },
        {
          icon: Globe,
          title: 'International Reach',
          description: 'Presence in 4 countries with strategic alliances'
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <motion.main
      key="contacto"
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

      {/* Contact Info Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <ContactInfo />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {currentContent.sendMessage}
            </h2>
            <ContactForm />
          </Card>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.whyChooseUs}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.whyChooseUsDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.features.map((feature, index) => (
              <Card key={index} animate delay={index * 0.2}>
                <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-6 rounded-full">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Nuestra Ubicación' : 'Our Location'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'es' 
                ? 'Encuéntranos en el corazón de Paraguay, donde la innovación ambiental se encuentra con la sostenibilidad.' 
                : 'Find us in the heart of Paraguay, where environmental innovation meets sustainability.'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <GoogleMap
                center={{ lat: -25.2637, lng: -57.5759 }} // Coordenadas de Asunción, Paraguay
                zoom={14}
                height="400px"
                markerTitle="SAISA - Servicios Ambientales Integrales"
              />
            </div>
            
            {/* Location Info */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-white p-6 shadow-lg border border-gray-100 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === 'es' ? 'Información de Ubicación' : 'Location Information'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 flex items-center justify-center rounded-full flex-shrink-0">
                      <span className="text-sm">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Dirección</p>
                      <p className="text-gray-600">R.I 4 Curupayty 639, Paraguay</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 flex items-center justify-center rounded-full flex-shrink-0">
                      <span className="text-sm">🕒</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Horario de Atención</p>
                      <p className="text-gray-600">Lun - Vie: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 flex items-center justify-center rounded-full flex-shrink-0">
                      <span className="text-sm">🚗</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Acceso</p>
                      <p className="text-gray-600">Fácil acceso desde el centro de Asunción</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-100">
                <h4 className="text-lg font-semibold text-primary-800 mb-3">
                  {language === 'es' ? '¿Necesitas Direcciones?' : 'Need Directions?'}
                </h4>
                <p className="text-primary-700 mb-4">
                  {language === 'es' 
                    ? 'Usa el mapa interactivo para encontrar la mejor ruta hacia nuestras oficinas.'
                    : 'Use the interactive map to find the best route to our offices.'
                  }
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  onClick={() => {
                    // Abrir Google Maps en nueva pestaña
                    window.open('https://maps.google.com/?q=-25.2637,-57.5759', '_blank')
                  }}
                >
                  {language === 'es' ? 'Abrir en Google Maps' : 'Open in Google Maps'}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default ContactoPage 
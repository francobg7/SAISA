import React from 'react'
import { motion } from 'framer-motion'

import { Building2, Users, Globe } from 'lucide-react'
import { Card } from '../../components/ui'
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
    </motion.main>
  )
}

export default ContactoPage 
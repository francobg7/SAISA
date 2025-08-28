import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Building2, Users, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

import { companyInfo, services } from '../data/companyData'

const ContactPage: React.FC = () => {
  const { language } = useLanguage()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [advisorsRef, advisorsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [mapsRef, mapsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      pageTitle: 'Contáctanos',
      pageSubtitle: 'Estamos aquí para ayudarte a transformar tu impacto ambiental. ¡Conversemos sobre tus necesidades!',
      contactInfo: 'Información de Contacto',
      sendMessage: 'Enviar Mensaje',
      messageSent: '¡Mensaje Enviado!',
      messageSentDescription: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
      formLabels: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        company: 'Empresa',
        service: 'Servicio de Interés',
        message: 'Mensaje',
        submit: 'Enviar Mensaje'
      },
      placeholders: {
        name: 'Tu nombre completo',
        email: 'tu@email.com',
        company: 'Nombre de tu empresa',
        message: 'Cuéntanos sobre tu proyecto o consulta...'
      },
      contactMethods: {
        whatsapp: 'WhatsApp',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        address: 'Dirección',
        hours: 'Horario de Atención'
      },
      businessHours: 'Lun - Vie: 8:00 AM - 6:00 PM',
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
      contactInfo: 'Contact Information',
      sendMessage: 'Send Message',
      messageSent: 'Message Sent!',
      messageSentDescription: 'Thank you for contacting us. We will get back to you soon.',
      formLabels: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company',
        service: 'Service of Interest',
        message: 'Message',
        submit: 'Send Message'
      },
      placeholders: {
        name: 'Your full name',
        email: 'your@email.com',
        company: 'Your company name',
        message: 'Tell us about your project or inquiry...'
      },
      contactMethods: {
        whatsapp: 'WhatsApp',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        hours: 'Business Hours'
      },
      businessHours: 'Mon - Fri: 8:00 AM - 6:00 PM',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
    }, 3000)
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            {currentContent.pageTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {currentContent.pageSubtitle}
          </p>
          
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Ubicación' : 'Location'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'es' ? 'R.I 4 Curupayty 639, Paraguay' : 'R.I 4 Curupayty 639, Paraguay'}
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'Email' : 'Email'}
              </h3>
              <p className="text-sm text-gray-600">
                info@saisa.com.py
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'es' ? 'WhatsApp' : 'WhatsApp'}
              </h3>
              <p className="text-sm text-gray-600">
                +595 981 123 456
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mb-8">
          <div className="bg-white p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {currentContent.sendMessage}
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {currentContent.messageSent}
                </h3>
                <p className="text-lg text-gray-600">
                  {currentContent.messageSentDescription}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.formLabels.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={currentContent.placeholders.name}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.formLabels.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={currentContent.placeholders.email}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.formLabels.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={currentContent.placeholders.company}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.formLabels.service}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">{language === 'es' ? 'Seleccionar servicio' : 'Select service'}</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title[language]}>
                          {service.title[language]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder={currentContent.placeholders.message}
                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent  animate-spin" />
                      <span>{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>{currentContent.formLabels.submit}</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <div className="bg-white p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {currentContent.contactMethods.whatsapp}
              </h3>
              <p className="text-sm text-gray-600">
                {companyInfo.whatsapp}
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {currentContent.contactMethods.email}
              </h3>
              <p className="text-sm text-gray-600">
                {companyInfo.email}
              </p>
            </div>

            {/* Address */}
            <div className="bg-white p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gray-100 text-gray-600 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {currentContent.contactMethods.address}
              </h3>
              <p className="text-sm text-gray-600">
                {companyInfo.location}
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {currentContent.contactMethods.hours}
              </h3>
              <p className="text-sm text-gray-600">
                {currentContent.businessHours}
              </p>
            </div>
          </div>
        </div>

        {/* Advisors Section */}
        <motion.div
          ref={advisorsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={advisorsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'es' ? 'Nuestros Asesores Especializados' : 'Our Specialized Advisors'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Conecta directamente con nuestro equipo de expertos ambientales para obtener asesoramiento personalizado.'
                : 'Connect directly with our team of environmental experts for personalized advice.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Advisor 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={advisorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-8 shadow-xl border border-gray-100 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-600 text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                DR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Dr. Roberto Silva
              </h3>
              <p className="text-primary-600 font-semibold mb-4">
                {language === 'es' ? 'Director de Proyectos Ambientales' : 'Environmental Projects Director'}
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2 text-primary-600" />
                  roberto.silva@saisa.com.py
                </div>
                <div className="flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-primary-600" />
                  +595 981 123 456
                </div>
              </div>
            </motion.div>

            {/* Advisor 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={advisorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white p-8 shadow-xl border border-gray-100 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                ING
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ing. María González
              </h3>
              <p className="text-emerald-600 font-semibold mb-4">
                {language === 'es' ? 'Especialista en Tratamiento de Aguas' : 'Water Treatment Specialist'}
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2 text-emerald-600" />
                  maria.gonzalez@saisa.com.py
                </div>
                <div className="flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-emerald-600" />
                  +595 981 234 567
                </div>
              </div>
            </motion.div>

            {/* Advisor 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={advisorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white p-8 shadow-xl border border-gray-100 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                LIC
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Lic. Carlos Mendoza
              </h3>
              <p className="text-blue-600 font-semibold mb-4">
                {language === 'es' ? 'Consultor en Economía Circular' : 'Circular Economy Consultant'}
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-600" />
                  carlos.mendoza@saisa.com.py
                </div>
                <div className="flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-blue-600" />
                  +595 981 345 678
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Google Maps Section */}
        <motion.div
          ref={mapsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={mapsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'es' ? 'Nuestra Ubicación' : 'Our Location'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Visítanos en nuestra sede principal en Paraguay. Estamos ubicados estratégicamente para servir a toda Latinoamérica.'
                : 'Visit us at our main office in Paraguay. We are strategically located to serve all of Latin America.'
              }
            </p>
          </div>

          <div className="bg-white p-8 shadow-xl border border-gray-100">
            {/* Google Maps Embed */}
            <div className="w-full h-96 bg-gray-200 mb-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  {language === 'es' ? 'Mapa de Google Maps' : 'Google Maps'}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {language === 'es' 
                    ? 'R.I 4 Curupayty 639, Paraguay'
                    : 'R.I 4 Curupayty 639, Paraguay'
                  }
                </p>
                <a 
                  href="https://maps.google.com/?q=R.I+4+Curupayty+639,+Paraguay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-300"
                >
                  {language === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}
                </a>
              </div>
            </div>

            {/* Address Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'es' ? 'Dirección Completa' : 'Complete Address'}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Ruta:</strong> R.I 4 Curupayty 639</p>
                  <p><strong>Ciudad:</strong> Asunción</p>
                  <p><strong>País:</strong> Paraguay</p>
                  <p><strong>Código Postal:</strong> 1001</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'es' ? 'Información de Contacto' : 'Contact Information'}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Teléfono:</strong> +595 21 123 456</p>
                  <p><strong>WhatsApp:</strong> +595 981 123 456</p>
                  <p><strong>Email:</strong> info@saisa.com.py</p>
                  <p><strong>Horario:</strong> Lun - Vie: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Special Contact Section - Statistics & Trust Indicators */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          {/* Statistics Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white p-6 shadow-lg">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">
                  {language === 'es' ? 'Proyectos Completados' : 'Completed Projects'}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 shadow-lg">
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm opacity-90">
                  {language === 'es' ? 'Países de Operación' : 'Operating Countries'}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 shadow-lg">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">
                  {language === 'es' ? 'Compromiso Ambiental' : 'Environmental Commitment'}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 shadow-lg">
                <div className="text-3xl font-bold mb-2">24h</div>
                <div className="text-sm opacity-90">
                  {language === 'es' ? 'Tiempo de Respuesta' : 'Response Time'}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators & Testimonials */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'es' ? 'Confían en Nosotros' : 'They Trust Us'}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {language === 'es' 
                  ? 'Empresas líderes en Latinoamérica confían en nuestras soluciones ambientales innovadoras.'
                  : 'Leading companies in Latin America trust our innovative environmental solutions.'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-white p-6 shadow-lg border-l-4 border-primary-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'es' ? 'Calidad Garantizada' : 'Guaranteed Quality'}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  {language === 'es'
                    ? 'Todos nuestros proyectos cumplen con los más altos estándares internacionales de calidad ambiental.'
                    : 'All our projects meet the highest international environmental quality standards.'
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="bg-white p-6 shadow-lg border-l-4 border-emerald-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'es' ? 'Experiencia Global' : 'Global Experience'}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  {language === 'es'
                    ? 'Más de una década de experiencia en proyectos ambientales en toda Latinoamérica.'
                    : 'Over a decade of experience in environmental projects across Latin America.'
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="bg-white p-6 shadow-lg border-l-4 border-blue-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {language === 'es' ? 'Equipo Especializado' : 'Specialized Team'}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  {language === 'es'
                    ? 'Profesionales certificados con amplia experiencia en tecnologías ambientales.'
                    : 'Certified professionals with extensive experience in environmental technologies.'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage

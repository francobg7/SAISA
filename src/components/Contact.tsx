import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { companyInfo, services } from '../data/companyData'

const Contact: React.FC = () => {
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      sectionTitle: 'Contáctanos',
      sectionSubtitle: 'Estamos aquí para ayudarte a transformar tu impacto ambiental. ¡Conversemos sobre tus necesidades!',
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
      readyToHelp: 'Estamos listos para ayudarte a alcanzar tus objetivos de sostenibilidad'
    },
    en: {
      sectionTitle: 'Contact Us',
      sectionSubtitle: 'We are here to help you transform your environmental impact. Let\'s talk about your needs!',
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
      readyToHelp: 'We are ready to help you achieve your sustainability goals'
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

  const handleWhatsApp = () => {
    const message = language === 'es'
      ? `Hola, mi nombre es ${formData.name || 'Cliente'} y me interesa ${formData.service || 'los servicios de SAISA'}. ${formData.message ? `\n\nMensaje: ${formData.message}` : ''}`
      : `Hello, my name is ${formData.name || 'Client'} and I am interested in ${formData.service || 'SAISA services'}. ${formData.message ? `\n\nMessage: ${formData.message}` : ''}`
    
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmail = () => {
    const subject = language === 'es' 
      ? `Consulta sobre ${formData.service || 'servicios de SAISA'}`
      : `Inquiry about ${formData.service || 'SAISA services'}`
    
    const body = language === 'es'
      ? `Hola,\n\nMi nombre es ${formData.name || 'Cliente'} y trabajo en ${formData.company || 'una empresa'}.\n\n${formData.message || 'Me interesa conocer más sobre los servicios de SAISA.'}\n\nSaludos,\n${formData.name || 'Cliente'}`
      : `Hello,\n\nMy name is ${formData.name || 'Client'} and I work at ${formData.company || 'a company'}.\n\n${formData.message || 'I am interested in learning more about SAISA services.'}\n\nBest regards,\n${formData.name || 'Client'}`
    
    const mailtoUrl = `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl)
  }

  return (
    <section id="contact" className="section-padding bg-white">
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {currentContent.sendMessage}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {currentContent.messageSent}
                  </h4>
                  <p className="text-gray-600">
                    {currentContent.messageSentDescription}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
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
                      rows={4}
                      placeholder={currentContent.placeholders.message}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{currentContent.formLabels.submit}</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {currentContent.contactInfo}
              </h3>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsApp}
                  className="w-full flex items-center space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-all duration-300 border border-green-200"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-green-600">
                      {currentContent.contactMethods.whatsapp}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {companyInfo.whatsapp}
                    </p>
                  </div>
                </motion.button>

                {/* Email */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEmail}
                  className="w-full flex items-center space-x-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 border border-blue-200"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-blue-600">
                      {currentContent.contactMethods.email}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {companyInfo.email}
                    </p>
                  </div>
                </motion.button>

                {/* Address */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-primary-600">
                      {currentContent.contactMethods.address}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {companyInfo.location}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-secondary-600">
                      {currentContent.contactMethods.hours}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {currentContent.businessHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">
                {currentContent.getInTouch}
              </h4>
              <p className="text-primary-100 mb-4">
                {currentContent.readyToHelp}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="w-full bg-white text-primary-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                {currentContent.contactMethods.whatsapp}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

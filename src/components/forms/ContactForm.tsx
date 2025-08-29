import React from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { Button, Input, Textarea, Select } from '../ui'
import { useLanguage } from '../../contexts/LanguageContext'
import { useContactForm } from '../../hooks/useContactForm'
import { services } from '../../data/companyData'

const ContactForm: React.FC = () => {
  const { language } = useLanguage()
  const {
    formData,
    isSubmitting,
    isSubmitted,
    handleInputChange,
    handleSubmit
  } = useContactForm()

  const content = {
    es: {
      title: 'Enviar Mensaje',
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
      servicePlaceholder: 'Seleccionar servicio',
      sending: 'Enviando...'
    },
    en: {
      title: 'Send Message',
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
      servicePlaceholder: 'Select service',
      sending: 'Sending...'
    }
  }

  const currentContent = content[language]
  const serviceOptions = services.map(service => ({
    value: service.title[language],
    label: service.title[language]
  }))

  if (isSubmitted) {
    return (
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
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          id="name"
          name="name"
          label={currentContent.formLabels.name}
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder={currentContent.placeholders.name}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label={currentContent.formLabels.email}
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder={currentContent.placeholders.email}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          id="company"
          name="company"
          label={currentContent.formLabels.company}
          value={formData.company}
          onChange={handleInputChange}
          placeholder={currentContent.placeholders.company}
        />
        <Select
          id="service"
          name="service"
          label={currentContent.formLabels.service}
          value={formData.service}
          onChange={handleInputChange}
          options={serviceOptions}
          placeholder={currentContent.servicePlaceholder}
        />
      </div>

      <Textarea
        id="message"
        name="message"
        label={currentContent.formLabels.message}
        value={formData.message}
        onChange={handleInputChange}
        rows={6}
        placeholder={currentContent.placeholders.message}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        loading={isSubmitting}
        icon={Send}
        size="lg"
        className="w-full"
      >
        {isSubmitting ? currentContent.sending : currentContent.formLabels.submit}
      </Button>
    </form>
  )
}

export default ContactForm 
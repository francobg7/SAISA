import React from 'react'

import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Card } from '../ui'
import { useLanguage } from '../../contexts/LanguageContext'
import { companyInfo } from '../../data/companyData'

const ContactInfo: React.FC = () => {
  const { language } = useLanguage()

  const content = {
    es: {
      title: 'Información de Contacto',
      contactMethods: {
        whatsapp: 'WhatsApp',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        address: 'Dirección',
        hours: 'Horario de Atención'
      },
      businessHours: 'Lun - Vie: 8:00 AM - 6:00 PM'
    },
    en: {
      title: 'Contact Information',
      contactMethods: {
        whatsapp: 'WhatsApp',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        hours: 'Business Hours'
      },
      businessHours: 'Mon - Fri: 8:00 AM - 6:00 PM'
    }
  }

  const currentContent = content[language]

  const contactItems = [
    {
      icon: MessageCircle,
      title: currentContent.contactMethods.whatsapp,
      value: companyInfo.whatsapp,
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      icon: Mail,
      title: currentContent.contactMethods.email,
      value: companyInfo.email,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: currentContent.contactMethods.address,
      value: companyInfo.location,
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-600'
    },
    {
      icon: Clock,
      title: currentContent.contactMethods.hours,
      value: currentContent.businessHours,
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ]

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {currentContent.title}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactItems.map((item, index) => (
          <Card key={index} animate delay={index * 0.1}>
            <div className={`w-12 h-12 ${item.bgColor} ${item.textColor} flex items-center justify-center mx-auto mb-4 rounded-full`}>
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-center">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {item.value}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ContactInfo 
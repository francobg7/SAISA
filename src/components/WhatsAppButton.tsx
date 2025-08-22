import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { companyInfo } from '../data/companyData'

const WhatsAppButton: React.FC = () => {
  const { language } = useLanguage()

  const handleWhatsAppClick = () => {
    const message = language === 'es'
      ? 'Hola, me interesa conocer más sobre los servicios de SAISA'
      : 'Hello, I am interested in learning more about SAISA services'
    
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 5
      }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 left-8 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 group"
      aria-label={language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
    </motion.button>
  )
}

export default WhatsAppButton

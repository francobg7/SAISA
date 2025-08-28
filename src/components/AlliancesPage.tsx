import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Building2, Globe, ArrowRight, CheckCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

import { alliances } from '../data/companyData'

const AlliancesPage: React.FC = () => {
  const { language } = useLanguage()

  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedAlliance, setSelectedAlliance] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      pageTitle: 'Nuestras Alianzas',
      pageSubtitle: 'Colaboraciones estratégicas para un futuro ambiental sostenible',
      backToHome: 'Volver al Inicio',
      learnMore: 'Saber Más',
      viewDetails: 'Ver Detalles',
      contactUs: 'Contáctanos',
      allTypes: 'Todos',
      government: 'Gobierno',
      private: 'Sector Privado',
      ngo: 'ONG',
      academic: 'Académico',
      partnershipBenefits: 'Beneficios de la Alianza',
      strategicPartnership: '¿Interesado en una Alianza Estratégica?',
      strategicPartnershipText: 'Únete a nuestra red de colaboradores para crear un impacto ambiental positivo',
      contactPartnership: 'Contactar para Alianza',
      keyBenefits: 'Beneficios Clave',
      collaboration: 'Colaboración',
      innovation: 'Innovación',
      impact: 'Impacto',
      sustainability: 'Sostenibilidad'
    },
    en: {
      pageTitle: 'Our Alliances',
      pageSubtitle: 'Strategic collaborations for a sustainable environmental future',
      backToHome: 'Back to Home',
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      contactUs: 'Contact Us',
      allTypes: 'All',
      government: 'Government',
      private: 'Private Sector',
      ngo: 'NGO',
      academic: 'Academic',
      partnershipBenefits: 'Partnership Benefits',
      strategicPartnership: 'Interested in a Strategic Alliance?',
      strategicPartnershipText: 'Join our network of collaborators to create positive environmental impact',
      contactPartnership: 'Contact for Alliance',
      keyBenefits: 'Key Benefits',
      collaboration: 'Collaboration',
      innovation: 'Innovation',
      impact: 'Impact',
      sustainability: 'Sustainability'
    }
  }

  const currentContent = content[language]

  const getTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      'government': 'from-blue-500 to-blue-600',
      'private': 'from-green-500 to-green-600',
      'ngo': 'from-purple-500 to-purple-600',
      'academic': 'from-orange-500 to-orange-600'
    }
    return colorMap[type] || 'from-gray-500 to-gray-600'
  }

  const getTypeIcon = (type: string) => {
    const iconMap: { [key: string]: any } = {
      'government': Building2,
      'private': Users,
      'ngo': Globe,
      'academic': Users
    }
    return iconMap[type] || Users
  }

  const getTypeLabel = (type: string) => {
    const labelMap: { [key: string]: string } = {
      'government': currentContent.government,
      'private': currentContent.private,
      'ngo': currentContent.ngo,
      'academic': currentContent.academic
    }
    return labelMap[type] || type
  }

  const filteredAlliances = selectedType === 'all' 
    ? alliances 
    : alliances.filter(a => a.type === selectedType)

  const handleAllianceClick = (allianceId: string) => {
    setSelectedAlliance(selectedAlliance === allianceId ? null : allianceId)
  }

  const handlePartnershipContact = () => {
    const message = language === 'es'
      ? 'Hola, me interesa establecer una alianza estratégica con SAISA'
      : 'Hello, I am interested in establishing a strategic alliance with SAISA'
    
    const whatsappUrl = `https://wa.me/+595984774091?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-secondary-50 pt-20">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            {currentContent.pageTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {currentContent.pageSubtitle}
          </p>
        </motion.div>

        {/* Type Filter - Full Width */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['all', 'government', 'private', 'ngo', 'academic'].map((type) => (
              <motion.button
                key={type}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3  font-medium transition-all duration-300 ${
                  selectedType === type
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-primary-50 hover:border-primary-200'
                }`}
              >
                {type === 'all' 
                  ? currentContent.allTypes
                  : getTypeLabel(type)
                }
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Alliances Grid - Full Width */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlliances.map((alliance, index) => {
              const IconComponent = getTypeIcon(alliance.type)
              const gradientClass = getTypeColor(alliance.type)
              
              return (
                <motion.div
                  key={alliance.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <div 
                    className="bg-white  overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer rounded-2xl"
                    onClick={() => handleAllianceClick(alliance.id)}
                  >
                    {/* Alliance Header */}
                    <div className={`bg-gradient-to-br ${gradientClass} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm  flex items-center justify-center border border-white/30 rounded-full">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30 rounded-full"
                        >
                          <ArrowRight className="w-4 h-4 text-white" />
                        </motion.button>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">
                        {alliance.name}
                      </h3>
                      
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm  text-sm font-medium border border-white/30 rounded-full">
                        {getTypeLabel(alliance.type)}
                      </span>
                    </div>

                    {/* Alliance Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {alliance.description[language]}
                      </p>

                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAllianceClick(alliance.id)
                        }}
                        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium py-3 px-6  hover:shadow-lg transition-all duration-300 rounded-xl"
                      >
                        {currentContent.viewDetails}
                      </motion.button>
                    </div>
                  </div>

                  {/* Expanded Alliance Details */}
                  <AnimatePresence>
                    {selectedAlliance === alliance.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-6"
                      >
                        <div className="bg-white/95 backdrop-blur-sm  p-8 shadow-2xl border border-white/20 rounded-2xl">
                          <div className="grid md:grid-cols-2 gap-8">
                            {/* Alliance Details */}
                            <div>
                              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                                {alliance.name}
                              </h4>
                              <div className="space-y-4">
                                <div className="bg-gradient-to-r from-primary-50 to-primary-100  p-4 border border-primary-200 rounded-xl">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-8 h-8 bg-primary-500  flex items-center justify-center rounded-full">
                                      <IconComponent className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                      {getTypeLabel(alliance.type)}
                                    </span>
                                  </div>
                                  <p className="text-gray-700 text-sm">
                                    {alliance.description[language]}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Partnership Benefits */}
                            <div>
                              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                                {currentContent.partnershipBenefits}
                              </h4>
                              <div className="space-y-4">
                                <div className="bg-gradient-to-r from-primary-50 to-secondary-50  p-4 border border-primary-100 rounded-xl">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-8 h-8 bg-primary-500  flex items-center justify-center rounded-full">
                                      <Users className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                      {currentContent.collaboration}
                                    </span>
                                  </div>
                                  <p className="text-gray-700 text-sm">
                                    {language === 'es' 
                                      ? 'Trabajo conjunto para lograr objetivos ambientales comunes'
                                      : 'Joint work to achieve common environmental goals'
                                    }
                                  </p>
                                </div>
                                
                                <div className="bg-gradient-to-r from-secondary-50 to-accent-50  p-4 border border-secondary-100 rounded-xl">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-8 h-8 bg-secondary-500  flex items-center justify-center rounded-full">
                                      <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                      {currentContent.impact}
                                    </span>
                                  </div>
                                  <p className="text-gray-700 text-sm">
                                    {language === 'es'
                                      ? 'Resultados medibles y sostenibles a largo plazo'
                                      : 'Measurable and sustainable long-term results'
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
                              onClick={handlePartnershipContact}
                              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-4 px-8  hover:shadow-xl transition-all duration-300 rounded-xl"
                            >
                              {currentContent.contactUs}
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

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600  p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white " />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-white " />
            <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-white " />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">
              {currentContent.strategicPartnership}
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {currentContent.strategicPartnershipText}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePartnershipContact}
              className="bg-white text-primary-600 font-semibold px-8 py-4  hover:bg-gray-100 transition-colors duration-300 shadow-xl"
            >
              {currentContent.contactPartnership}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AlliancesPage

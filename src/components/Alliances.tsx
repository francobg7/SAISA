import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, GraduationCap, Globe, Users, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { alliances } from '../data/companyData'

const Alliances: React.FC = () => {
  const { language } = useLanguage()
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedAlliance, setSelectedAlliance] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      sectionTitle: 'Alianzas Estratégicas',
      sectionSubtitle: 'Colaboramos con organizaciones líderes para maximizar nuestro impacto ambiental y crear soluciones sostenibles',
      allAlliances: 'Todas las Alianzas',
      viewDetails: 'Ver Detalles',
      learnMore: 'Conocer Más',
      contactUs: 'Contáctanos',
      filterLabel: 'Filtrar por tipo:',
      partnershipTypes: {
        government: 'Gobierno',
        private: 'Sector Privado',
        ngo: 'ONG',
        academic: 'Académico'
      },
      becomePartner: 'Conviértete en Nuestro Socio',
      partnershipDescription: '¿Eres una organización comprometida con la sostenibilidad? Únete a nuestra red de alianzas estratégicas.',
      contactForPartnership: 'Contactar para Alianza'
    },
    en: {
      sectionTitle: 'Strategic Alliances',
      sectionSubtitle: 'We collaborate with leading organizations to maximize our environmental impact and create sustainable solutions',
      allAlliances: 'All Alliances',
      viewDetails: 'View Details',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      filterLabel: 'Filter by type:',
      partnershipTypes: {
        government: 'Government',
        private: 'Private Sector',
        ngo: 'NGO',
        academic: 'Academic'
      },
      becomePartner: 'Become Our Partner',
      partnershipDescription: 'Are you an organization committed to sustainability? Join our network of strategic alliances.',
      contactForPartnership: 'Contact for Partnership'
    }
  }

  const currentContent = content[language]

  // Get unique alliance types
  const allianceTypes = ['all', ...Array.from(new Set(alliances.map(a => a.type)))]

  // Filter alliances by type
  const filteredAlliances = selectedType === 'all' 
    ? alliances 
    : alliances.filter(a => a.type === selectedType)

  const handleAllianceClick = (allianceId: string) => {
    setSelectedAlliance(selectedAlliance === allianceId ? null : allianceId)
  }

  const getTypeIcon = (type: string) => {
    const iconMap: { [key: string]: any } = {
      'government': Building2,
      'private': Building2,
      'ngo': Globe,
      'academic': GraduationCap
    }
    return iconMap[type] || Users
  }

  const getTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      'government': 'from-blue-500 to-blue-600',
      'private': 'from-green-500 to-green-600',
      'ngo': 'from-purple-500 to-purple-600',
      'academic': 'from-orange-500 to-orange-600'
    }
    return colorMap[type] || 'from-gray-500 to-gray-600'
  }

  const handlePartnershipContact = () => {
    const message = language === 'es'
      ? 'Hola, me interesa establecer una alianza estratégica con SAISA'
      : 'Hello, I am interested in establishing a strategic alliance with SAISA'
    
    const whatsappUrl = `https://wa.me/+595984774091?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="alliances" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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

        {/* Type Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <span className="text-gray-600 font-medium flex items-center">
            <Users className="w-4 h-4 mr-2" />
            {currentContent.filterLabel}
          </span>
          {allianceTypes.map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedType === type
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type !== 'all' && (
                <span className="w-2 h-2 rounded-full bg-current opacity-60" />
              )}
              <span>
                {type === 'all' ? currentContent.allAlliances : currentContent.partnershipTypes[type as keyof typeof currentContent.partnershipTypes]}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Alliances Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredAlliances.map((alliance, index) => {
            const IconComponent = getTypeIcon(alliance.type)
            const gradientClass = getTypeColor(alliance.type)
            
            return (
              <motion.div
                key={alliance.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div 
                  className="card p-8 h-full transition-all duration-300 group-hover:shadow-2xl"
                  onClick={() => handleAllianceClick(alliance.id)}
                >
                  {/* Alliance Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      alliance.type === 'government' ? 'bg-blue-100 text-blue-700' :
                      alliance.type === 'private' ? 'bg-green-100 text-green-700' :
                      alliance.type === 'ngo' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {currentContent.partnershipTypes[alliance.type]}
                    </span>
                  </div>

                  {/* Alliance Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {alliance.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {alliance.description[language]}
                    </p>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAllianceClick(alliance.id)
                    }}
                    className="w-full btn-outline text-sm py-2"
                  >
                    {selectedAlliance === alliance.id ? currentContent.viewDetails : currentContent.learnMore}
                  </motion.button>
                </div>

                {/* Expanded Alliance Details */}
                <AnimatePresence>
                  {selectedAlliance === alliance.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                    >
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {currentContent.partnershipTypes[alliance.type]}
                          </h4>
                          <p className="text-gray-600">{alliance.name}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {language === 'es' ? 'Descripción' : 'Description'}
                          </h4>
                          <p className="text-gray-600">{alliance.description[language]}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            handlePartnershipContact()
                          }}
                          className="btn-primary flex items-center justify-center space-x-2"
                        >
                          <span>{currentContent.contactUs}</span>
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

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {currentContent.becomePartner}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {currentContent.partnershipDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePartnershipContact}
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                {currentContent.contactForPartnership}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                {currentContent.contactUs}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Alliance Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
                         {
               icon: Users,
               title: language === 'es' ? 'Colaboración Estratégica' : 'Strategic Collaboration',
               description: language === 'es' 
                 ? 'Trabajamos juntos para maximizar el impacto ambiental y crear soluciones innovadoras'
                 : 'We work together to maximize environmental impact and create innovative solutions'
             },
            {
              icon: Users,
              title: language === 'es' ? 'Red de Expertos' : 'Expert Network',
              description: language === 'es'
                ? 'Acceso a una red global de profesionales y organizaciones comprometidas con la sostenibilidad'
                : 'Access to a global network of professionals and organizations committed to sustainability'
            },
            {
              icon: Globe,
              title: language === 'es' ? 'Alcance Global' : 'Global Reach',
              description: language === 'es'
                ? 'Ampliamos nuestro impacto a través de alianzas en diferentes regiones y mercados'
                : 'We expand our impact through alliances in different regions and markets'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h4>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Alliances

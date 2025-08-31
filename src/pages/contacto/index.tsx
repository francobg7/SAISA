import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Building, Globe } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

const ContactoPage: React.FC = () => {
  const { language } = useLanguage()

  const content = {
    es: {
      pageTitle: 'Contacto',
      pageSubtitle: 'Información de contacto y ubicación de SAISA',
      companyInfo: {
        title: 'Información de la Empresa',
        legalName: 'Nombre legal',
        legalNameValue: 'SAISA - Servicios Ambientales Integrales S.A',
        commercialName: 'Nombre comercial',
        commercialNameValue: 'SAISA',
        foundationYear: 'Año de fundación',
        foundationYearValue: '26 de mayo de 2022',
        location: 'Ubicación',
        locationValue: 'R.I 4 Curupayty 639, Paraguay'
      },
      map: {
        title: 'Nuestra Ubicación',
        subtitle: 'Encuéntranos en el corazón de Paraguay'
      }
    },
    en: {
      pageTitle: 'Contact',
      pageSubtitle: 'SAISA contact information and location',
      companyInfo: {
        title: 'Company Information',
        legalName: 'Legal name',
        legalNameValue: 'SAISA - Servicios Ambientales Integrales S.A',
        commercialName: 'Commercial name',
        commercialNameValue: 'SAISA',
        foundationYear: 'Foundation year',
        foundationYearValue: 'May 26, 2022',
        location: 'Location',
        locationValue: 'R.I 4 Curupayty 639, Paraguay'
      },
      map: {
        title: 'Our Location',
        subtitle: 'Find us in the heart of Paraguay'
      }
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
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
    >
      {/* Hero Section - Same design as Nosotros */}
      <div 
        className="relative min-h-[65vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero/contacto-hero.jpg)',
          backgroundSize: '100%',
          backgroundPosition: 'center 60%'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Organic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-green-200/30 rounded-full opacity-60 blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full opacity-60 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full opacity-60 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
          >
            {currentContent.pageTitle}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto"
          >
            {currentContent.pageSubtitle}
          </motion.p>
        </div>
      </div>

      {/* Company Information Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {currentContent.companyInfo.title}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Company Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Legal Name */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      {currentContent.companyInfo.legalName}
                    </h3>
                    <p className="text-gray-900 text-lg font-medium">
                      {currentContent.companyInfo.legalNameValue}
                    </p>
                  </div>
                </div>
              </div>

              {/* Commercial Name */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      {currentContent.companyInfo.commercialName}
                    </h3>
                    <p className="text-gray-900 text-lg font-medium">
                      {currentContent.companyInfo.commercialNameValue}
                    </p>
                  </div>
                </div>
              </div>

              {/* Foundation Year */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      {currentContent.companyInfo.foundationYear}
                    </h3>
                    <p className="text-gray-900 text-lg font-medium">
                      {currentContent.companyInfo.foundationYearValue}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      {currentContent.companyInfo.location}
                    </h3>
                    <p className="text-gray-900 text-lg font-medium">
                      {currentContent.companyInfo.locationValue}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default ContactoPage 
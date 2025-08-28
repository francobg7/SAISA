import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Heart, Award, CheckCircle, Eye } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

import { companyInfo } from '../data/companyData'

const AboutPage: React.FC = () => {
  const { language } = useLanguage()

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      pageTitle: 'Sobre Nosotros',
      pageSubtitle: 'Transformando desafíos ambientales en oportunidades sostenibles',
      backToHome: 'Volver al Inicio',
      founded: 'Fundada',
      location: 'Ubicación',
      vision: 'Visión',
      mission: 'Misión',

      visionText: 'Ser el referente latinoamericano en innovación ambiental y tecnologías sostenibles, liderando el cambio hacia un continente más limpio.',
      missionText: 'Motor de transformación sostenible en Latinoamérica, creando valor ambiental, social y económico mediante tecnologías limpias e innovadoras.',
      stats: [
        { value: '2022', label: 'Año de Fundación', icon: Award },
        { value: 'Paraguay', label: 'Sede Principal', icon: Target },
        { value: '15+', label: 'Proyectos Completados', icon: CheckCircle },
        { value: '100%', label: 'Compromiso Ambiental', icon: Heart }
      ]
    },
    en: {
      pageTitle: 'About Us',
      pageSubtitle: 'Transforming environmental challenges into sustainable opportunities',
      backToHome: 'Back to Home',
      founded: 'Founded',
      location: 'Location',
      vision: 'Vision',
      mission: 'Mission',

      visionText: 'To be the Latin American reference in environmental innovation and sustainable technologies, leading the change towards a cleaner continent.',
      missionText: 'Engine of sustainable transformation in Latin America, creating environmental, social and economic value through clean and innovative technologies.',
      stats: [
        { value: '2022', label: 'Year Founded', icon: Award },
        { value: 'Paraguay', label: 'Main Office', icon: Target },
        { value: '15+', label: 'Completed Projects', icon: CheckCircle },
        { value: '100%', label: 'Environmental Commitment', icon: Heart }
      ]
    }
  }

  const currentContent = content[language]





  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-20">


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



        {/* Company Info - Expanded Layout */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Company Description - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="space-y-8">
                {/* Company Description */}
                <div className="bg-white/80 backdrop-blur-sm  p-8 shadow-xl border border-white/20 rounded-2xl">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {companyInfo.name}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {companyInfo.description[language]}
                  </p>
                </div>

                {/* Company Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100  p-6 border border-primary-200 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-primary-500  flex items-center justify-center shadow-lg rounded-full">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-600 font-medium">
                          {currentContent.founded}
                        </p>
                        <p className="text-xl font-bold text-gray-900">
                          {companyInfo.founded}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-secondary-50 to-secondary-100  p-6 border border-secondary-200 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-secondary-500  flex items-center justify-center shadow-lg rounded-full">
                        <Target className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-secondary-600 font-medium">
                          {currentContent.location}
                        </p>
                        <p className="text-xl font-bold text-gray-900">
                          {companyInfo.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats - Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              {currentContent.stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-white/90 backdrop-blur-sm  p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600  flex items-center justify-center mx-auto mb-4 shadow-lg rounded-full">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary-600 mb-2 text-center">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium text-center">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission - Full Width Background */}
        <div className="w-full py-20 mb-24 relative overflow-hidden" style={{ backgroundColor: '#00217e' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white " />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-white " />
            <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-white " />
          </div>
          
          <div className="relative z-10 px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center lg:text-left"
              >
                <div className="bg-white/10 backdrop-blur-sm  p-8 border border-white/20 rounded-2xl">
                  <div className="w-20 h-20 bg-white/20  flex items-center justify-center mx-auto lg:mx-0 mb-6 rounded-full">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {currentContent.vision}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {currentContent.visionText}
                  </p>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-center lg:text-left"
              >
                <div className="bg-white/10 backdrop-blur-sm  p-8 border border-white/20 rounded-2xl">
                  <div className="w-20 h-20 bg-white/20  flex items-center justify-center mx-auto lg:mx-0 mb-6 rounded-full">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {currentContent.mission}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {currentContent.missionText}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AboutPage

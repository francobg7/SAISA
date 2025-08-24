import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Zap, Heart, Users, Award, Shield, CheckCircle, Eye, ArrowLeft } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useNavigation } from '../contexts/NavigationContext'
import { companyInfo } from '../data/companyData'

const AboutPage: React.FC = () => {
  const { language } = useLanguage()
  const { navigateTo } = useNavigation()
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
      values: 'Valores',
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
      values: 'Values',
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

  const getValueIcon = (value: string) => {
    const iconMap: { [key: string]: any } = {
      'Sostenibilidad': Shield,
      'Sustainability': Shield,
      'Innovación': Zap,
      'Innovation': Zap,
      'Integridad': Shield,
      'Integrity': Shield,
      'Colaboración': Users,
      'Collaboration': Users,
      'Excelencia': Award,
      'Excellence': Award,
      'Resiliencia': Heart,
      'Resilience': Heart
    }
    return iconMap[value] || Target
  }

  const goBack = () => {
    navigateTo('home')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Custom Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">{currentContent.backToHome}</span>
              </motion.button>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl font-display">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 font-display">SAISA</h1>
                <p className="text-xs text-gray-600 -mt-1">
                  {language === 'es' ? 'Servicios Ambientales' : 'Environmental Services'}
                </p>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>

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
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {companyInfo.name}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {companyInfo.description[language]}
                  </p>
                </div>

                {/* Company Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg">
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

                  <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-6 border border-secondary-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
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
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
        <div className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl py-20 mb-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-white rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-white rounded-full" />
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
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
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
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
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

        {/* Values - Grid Layout */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              {currentContent.values}
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(companyInfo.values[language]).map(([key, value], index) => {
              const IconComponent = getValueIcon(key)
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:border-primary-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {key}
                    </h4>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {value}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Zap, Heart, Users, Award, Shield } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { companyInfo } from '../data/companyData'

const About: React.FC = () => {
  const { language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      sectionTitle: 'Sobre Nosotros',
      sectionSubtitle: 'Conoce la empresa que está transformando el futuro ambiental de Latinoamérica',
      founded: 'Fundada',
      location: 'Ubicación',
      team: 'Equipo',
      visionTitle: 'Nuestra Visión',
      missionTitle: 'Nuestra Misión',
      valuesTitle: 'Nuestros Valores',
      stats: [
        { value: '2022', label: 'Año de Fundación', icon: Award },
        { value: '4+', label: 'Países de Operación', icon: Users },
        { value: '15+', label: 'Proyectos Completados', icon: Target },
        { value: '100%', label: 'Compromiso Ambiental', icon: Heart }
      ]
    },
    en: {
      sectionTitle: 'About Us',
      sectionSubtitle: 'Meet the company that is transforming the environmental future of Latin America',
      founded: 'Founded',
      location: 'Location',
      team: 'Team',
      visionTitle: 'Our Vision',
      missionTitle: 'Our Mission',
      valuesTitle: 'Our Values',
      stats: [
        { value: '2022', label: 'Year Founded', icon: Award },
        { value: '4+', label: 'Countries of Operation', icon: Users },
        { value: '15+', label: 'Completed Projects', icon: Target },
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

  return (
    <section id="about" className="section-padding bg-white">
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

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* Company Description */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {companyInfo.name}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {companyInfo.description[language]}
                </p>
              </div>

              {/* Company Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      {currentContent.founded}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {companyInfo.founded}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      {currentContent.location}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {companyInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {currentContent.stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 text-center border border-primary-100"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 border border-primary-200"
          >
            <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {currentContent.visionTitle}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {companyInfo.vision[language]}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8 border border-secondary-200"
          >
            <div className="w-16 h-16 bg-secondary-600 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {currentContent.missionTitle}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {companyInfo.mission[language]}
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            {currentContent.valuesTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companyInfo.values[language].map((value, index) => {
              const IconComponent = getValueIcon(value)
              return (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-gray-100 group-hover:border-primary-300 group-hover:shadow-xl transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors duration-300">
                    {value}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'es' 
                ? '¿Listo para transformar tu impacto ambiental?' 
                : 'Ready to transform your environmental impact?'
              }
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {language === 'es'
                ? 'Únete a nosotros en la construcción de un futuro más sostenible'
                : 'Join us in building a more sustainable future'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {language === 'es' ? 'Contáctanos' : 'Contact Us'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

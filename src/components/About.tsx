import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Heart, Award, CheckCircle, Eye } from 'lucide-react'
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
      sectionSubtitle: 'Transformando desafíos ambientales en oportunidades sostenibles',
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
      sectionTitle: 'About Us',
      sectionSubtitle: 'Transforming environmental challenges into sustainable opportunities',
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
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
          style={{ objectPosition: 'center center' }}
        >
          <source src="/main/prueba-icon.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        

      </div>

      <div className="relative z-10">
        {/* Section Header - Full Width */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                {currentContent.sectionTitle}
              </h2>
              <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {currentContent.sectionSubtitle}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Company Info - Expanded Layout */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16 items-start">
              {/* Company Description - Takes 2 columns */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="space-y-8">
                  {/* Company Description */}
                  <div className="bg-white/90 backdrop-blur-sm p-8 shadow-xl border border-white/20 rounded-2xl">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {companyInfo.name}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {companyInfo.description[language]}
                    </p>
                  </div>

                  {/* Company Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 border border-primary-200 rounded-xl">
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

                    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 border border-secondary-200 rounded-xl">
                      <div className="text-center">
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
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {currentContent.stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-white/95 backdrop-blur-sm p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600  flex items-center justify-center mx-auto mb-4 shadow-lg overflow-hidden rounded-full">
                        {stat.value === 'Paraguay' ? (
                          <img 
                            src="/main/PARAGUAY.png" 
                            alt="Bandera de Paraguay" 
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <IconComponent className="w-8 h-8 text-white" />
                        )}
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
        </div>

        {/* Vision & Mission - Full Width Background */}
        <div className="w-full bg-navy-500 py-20 mb-24">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center lg:text-left"
                >
                  <div className="bg-white/20 backdrop-blur-sm p-8 border border-white/30 rounded-2xl">
                    <div className="w-20 h-20 bg-white/30 flex items-center justify-center mx-auto lg:mx-0 mb-6 rounded-full">
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
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center lg:text-left"
                >
                  <div className="bg-white/20 backdrop-blur-sm p-8 border border-white/30 rounded-2xl">
                    <div className="w-20 h-20 bg-white/30 flex items-center justify-center mx-auto lg:mx-0 mb-6 rounded-full">
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
    </section>
  )
}

export default About

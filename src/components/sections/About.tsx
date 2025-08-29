import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ArrowRight, Building2, Calendar } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useNavigation } from '../../contexts/NavigationContext'
import { companyInfo } from '../../data/companyData'

const About: React.FC = () => {
  const { language } = useLanguage()
  const { navigateTo } = useNavigation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      sectionTitle: 'Sobre Nosotros',
      sectionSubtitle: 'Transformando desafíos ambientales en oportunidades sostenibles',
      founded: 'Fundada en',
      location: 'Ubicación',
      companyOverview: 'Nuestra Empresa',
      learnMore: 'Aprende más sobre nosotros',
      learnMoreDesc: 'Descubre nuestra historia completa, visión y misión'
    },
    en: {
      sectionTitle: 'About Us',
      sectionSubtitle: 'Transforming environmental challenges into sustainable opportunities',
      founded: 'Founded in',
      location: 'Location',
      companyOverview: 'Our Company',
      learnMore: 'Learn more about us',
      learnMoreDesc: 'Discover our complete story, vision and mission'
    }
  }

  const currentContent = content[language]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Image Background with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/hero/about-bg.jpg"
          alt="About Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {currentContent.sectionTitle}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {currentContent.sectionSubtitle}
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Company Overview - Main Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-10 h-full">
                  {/* Header with Icon */}
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {currentContent.companyOverview}
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Company Name */}
                  <h4 className="text-2xl font-bold text-primary-600 mb-6">
                    {companyInfo.name}
                  </h4>

                  {/* Company Description */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {companyInfo.description[language]}
                  </p>

                  {/* Learn More Button */}
                  <div className="border-t border-gray-100 pt-8">
                    <motion.button
                      onClick={() => navigateTo('about')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-between w-full p-6 bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-100 hover:to-secondary-100 border border-primary-200 rounded-2xl transition-all duration-300 group cursor-pointer"
                    >
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">
                          {currentContent.learnMore}
                        </h5>
                        <p className="text-gray-600">
                          {currentContent.learnMoreDesc}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Company Details - Side Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Founded Card */}
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 font-medium mb-1">
                        {currentContent.founded}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {companyInfo.founded}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="w-full bg-emerald-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                      <img 
                        src="/main/PARAGUAY.png" 
                        alt="Paraguay Flag" 
                        className="w-8 h-8 object-contain rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 font-medium mb-1">
                        {currentContent.location}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {companyInfo.location}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>

                {/* Excellence Badge */}
                <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 rounded-2xl shadow-xl p-6 text-white">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h5 className="text-xl font-bold mb-2">Excelencia</h5>
                    <p className="text-amber-100 text-sm">
                      Comprometidos con la innovación y calidad
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

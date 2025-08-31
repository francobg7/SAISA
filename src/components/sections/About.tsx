import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Building2, Calendar } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useNavigation } from '../../contexts/NavigationContext'
import { companyInfo } from '../../data/companyData'

const About: React.FC = () => {
  const { language } = useLanguage()
  const { navigateTo } = useNavigation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      sectionTitle: 'Sobre Nosotros',
      sectionSubtitle: 'Transformando desafíos ambientales en oportunidades sostenibles',
      founded: 'Fundada en',
      companyOverview: 'Nuestra Empresa',
      learnMore: 'Aprende más sobre nosotros',
      learnMoreDesc: 'Descubre nuestra historia completa, visión y misión'
    },
    en: {
      sectionTitle: 'About Us',
      sectionSubtitle: 'Transforming environmental challenges into sustainable opportunities',
      founded: 'Founded in',
      companyOverview: 'Our Company',
      learnMore: 'Learn more about us',
      learnMoreDesc: 'Discover our complete story, vision and mission'
    }
  }

  const currentContent = content[language]

  return (
    <section ref={ref} id="about" className="relative py-24" style={{ backgroundColor: '#e8e8e8' }}>
      <div className="relative z-10">
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="w-320 h-320 bg-white rounded-3xl shadow-2xl border-4 border-white overflow-hidden">
                  <img 
                    src="/main/about-us.jpg"
                    alt="About Us"
                    className="w-full h-full object-cover object-center rounded-3xl"
                  />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Company Overview */}
                <div>
                  <div className="flex items-center mb-6">
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
                </div>

                {/* Founded Info */}
                <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-2xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium mb-1">
                      {currentContent.founded}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {companyInfo.founded}
                    </p>
                  </div>
                </div>

                {/* Learn More Button */}
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Hero: React.FC = () => {
  const { language } = useLanguage()
  const content = {
    title: language === 'es' ? 'Transformamos' : 'We Transform',
    titleHighlight: language === 'es' ? 'el Futuro Ambiental' : 'Environmental Future',
    subtitle: language === 'es' 
      ? 'Somos pioneros en innovación y aplicación de tecnologías sostenibles, bajas en carbono y orientadas a la economía circular. Transformamos fuentes de contaminación en activos ambientales con valor de mercado.'
      : 'We are pioneers in innovation and application of sustainable, low-carbon technologies oriented towards the circular economy. We transform pollution sources into environmental assets with market value.',
    ctaPrimary: language === 'es' ? 'Conoce Nuestros Servicios' : 'Discover Our Services',
    ctaSecondary: language === 'es' ? 'Ver Proyectos' : 'View Projects'
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200 shadow-sm">
                  {language === 'es' ? 'Innovación Ambiental' : 'Environmental Innovation'}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              >
                {content.title}{' '}
                <span className="gradient-text">{content.titleHighlight}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {content.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-lg px-8 py-4 shadow-xl rounded-lg font-semibold transition-all duration-300"
                >
                  {content.ctaPrimary}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  {content.ctaSecondary}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Earth Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              {/* Earth Globe */}
              <motion.img
                src="/hero/earth-globe.webp"
                alt="Earth Globe - Environmental Sustainability"
                className="w-full h-auto max-w-none object-contain scale-200 lg:scale-300 xl:scale-400 2xl:scale-500 relative z-20"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))' }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.05,
                  filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.2))'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

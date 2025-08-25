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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid Pattern */}
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34, 197, 94, 0.1)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="organicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            </linearGradient>
          </defs>
          
          {/* Background Elements */}
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Organic Shapes */}
          <path
            d="M 0 600 Q 300 500 600 600 T 1200 650 L 1200 800 L 0 800 Z"
            fill="url(#organicGradient)"
            opacity="0.3"
          />
          
          {/* Environmental Icons */}
          <g className="opacity-20">
            {/* Leaf */}
            <motion.path
              d="M 200 200 Q 220 180 240 200 T 280 220 Q 260 240 240 220 T 200 200"
              fill="rgba(34, 197, 94, 0.3)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            
            {/* Recycling Symbol */}
            <motion.circle
              cx="1000"
              cy="300"
              r="40"
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="3"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Water Drop */}
            <motion.path
              d="M 150 400 Q 170 380 190 400 T 210 420 Q 190 440 170 420 T 150 400"
              fill="rgba(59, 130, 246, 0.3)"
              initial={{ y: 0 }}
              animate={{ y: -20 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />
            
            {/* Wind Turbine */}
            <motion.path
              d="M 900 500 L 900 600 M 850 550 L 950 550 M 850 570 L 950 570"
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth="4"
              initial={{ rotate: 0 }}
              animate={{ rotate: 5 }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            />
          </g>
        </svg>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-secondary-200 to-accent-200 rounded-full opacity-15"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-20"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200 shadow-sm">
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
                  className="btn-primary text-lg px-8 py-4 shadow-xl"
                >
                  {content.ctaPrimary}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline text-lg px-8 py-4 border-2"
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
              <motion.img
                src="/earth-globe.png"
                alt="Earth Globe - Environmental Sustainability"
                className="w-full h-auto max-w-none object-contain scale-200 lg:scale-300 xl:scale-400 2xl:scale-500"
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

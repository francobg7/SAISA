import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Download, MessageCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { companyInfo } from '../data/companyData'

const Hero: React.FC = () => {
  const { language } = useLanguage()

  const heroContent = {
    es: {
      title: 'Transformamos la Contaminación en',
      titleHighlight: 'Oportunidades Sostenibles',
      subtitle: 'Empresa pionera en tecnologías ambientales innovadoras que convierten desafíos ecológicos en activos de valor para el futuro del planeta.',
      ctaPrimary: 'Conoce Nuestros Servicios',
      ctaSecondary: 'Descargar Catálogo',
      ctaWhatsApp: 'Contactar por WhatsApp',
      stats: [
        { value: '60%', label: 'Reducción de Residuos' },
        { value: '40%', label: 'Ahorro de Agua' },
        { value: '15+', label: 'Parámetros Monitoreados' }
      ]
    },
    en: {
      title: 'We Transform Pollution into',
      titleHighlight: 'Sustainable Opportunities',
      subtitle: 'Pioneering company in innovative environmental technologies that convert ecological challenges into valuable assets for the planet\'s future.',
      ctaPrimary: 'Discover Our Services',
      ctaSecondary: 'Download Catalog',
      ctaWhatsApp: 'Contact via WhatsApp',
      stats: [
        { value: '60%', label: 'Waste Reduction' },
        { value: '40%', label: 'Water Savings' },
        { value: '15+', label: 'Monitored Parameters' }
      ]
    }
  }

  const content = heroContent[language]

  const handleWhatsApp = () => {
    const message = language === 'es' 
      ? 'Hola, me interesa conocer más sobre los servicios de SAISA'
      : 'Hello, I am interested in learning more about SAISA services'
    const url = `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleDownload = () => {
    // Simulate download - in real app, this would link to actual PDF
    const link = document.createElement('a')
    link.href = '#'
    link.download = `SAISA-Catalogo-${language.toUpperCase()}.pdf`
    link.click()
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid Pattern */}
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-200"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Organic Shapes */}
          <path 
            d="M300,200 C500,150 700,250 900,200 C1100,150 1300,250 1500,200 L1500,400 C1300,350 1100,450 900,400 C700,350 500,450 300,400 Z" 
            fill="url(#gradient1)" 
            opacity="0.3"
          />
          <path 
            d="M200,600 C400,550 600,650 800,600 C1000,550 1200,650 1400,600 L1400,800 C1200,750 1000,850 800,800 C600,750 400,850 200,800 Z" 
            fill="url(#gradient2)" 
            opacity="0.3"
          />
          
          {/* Environmental Icons */}
          <g className="text-primary-300" opacity="0.2">
            {/* Leaf Shape */}
            <path d="M150,300 Q200,250 250,300 Q200,350 150,300 Z" fill="currentColor"/>
            {/* Recycling Symbol */}
            <g transform="translate(1600,150)">
              <path d="M0,0 L15,25 L30,0 M7.5,12.5 L22.5,12.5" stroke="currentColor" strokeWidth="3" fill="none"/>
            </g>
            {/* Water Drop */}
            <path d="M1700,600 Q1720,580 1740,600 Q1720,620 1700,600 Z" fill="currentColor"/>
            {/* Wind Turbine */}
            <g transform="translate(100,800)">
              <line x1="15" y1="0" x2="15" y2="40" stroke="currentColor" strokeWidth="2"/>
              <path d="M15,5 L25,15 L15,10 L5,15 Z" fill="currentColor"/>
            </g>
          </g>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#22c55e', stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0.3}} />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:'#22c55e', stopOpacity:0.3}} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Environmental Particles */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-40 h-40 opacity-10"
        >
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-sm" />
          <div className="absolute inset-4 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full blur-sm" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 w-32 h-32 opacity-15"
        >
          <div className="w-full h-full bg-gradient-to-tr from-accent-400 to-accent-600 rounded-2xl blur-sm rotate-45" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-40 left-20 w-28 h-28 opacity-10"
        >
          <div className="w-full h-full bg-gradient-to-bl from-primary-500 to-secondary-500 rounded-full blur-md" />
        </motion.div>
        
        {/* Technology Circuit Elements */}
        <motion.div
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-60 right-40 w-24 h-24"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-300">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.4"/>
            <line x1="50" y1="10" x2="50" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
            <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
            <line x1="10" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
            <line x1="70" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-60 right-60 w-20 h-20"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-secondary-300">
            <path d="M50,10 L75,40 L50,30 L25,40 Z" fill="currentColor" opacity="0.2"/>
            <path d="M50,30 L75,60 L50,50 L25,60 Z" fill="currentColor" opacity="0.3"/>
            <path d="M50,50 L75,80 L50,70 L25,80 Z" fill="currentColor" opacity="0.4"/>
            <circle cx="50" cy="90" r="3" fill="currentColor" opacity="0.6"/>
          </svg>
        </motion.div>
        
        {/* Environmental Data Visualization */}
        <motion.div
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            y: [0, -10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-80 left-60 w-36 h-20"
        >
          <svg viewBox="0 0 144 80" className="w-full h-full text-primary-400">
            <path d="M10,70 Q30,50 50,60 T90,40 T130,50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
            <circle cx="30" cy="55" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="70" cy="45" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="110" cy="48" r="2" fill="currentColor" opacity="0.6"/>
            <rect x="10" y="75" width="4" height="5" fill="currentColor" opacity="0.3"/>
            <rect x="30" y="72" width="4" height="8" fill="currentColor" opacity="0.3"/>
            <rect x="50" y="68" width="4" height="12" fill="currentColor" opacity="0.3"/>
            <rect x="70" y="65" width="4" height="15" fill="currentColor" opacity="0.3"/>
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                {language === 'es' ? 'Innovación Ambiental' : 'Environmental Innovation'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {content.title}{' '}
              <span className="gradient-text">{content.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>{content.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="btn-outline flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>{content.ctaSecondary}</span>
              </motion.button>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="inline-flex items-center space-x-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{content.ctaWhatsApp}</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-96 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl shadow-2xl relative overflow-hidden"
              >
                {/* Abstract Environmental Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-300/30 to-secondary-400/30" />
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-sm" />
                <div className="absolute bottom-20 right-16 w-16 h-16 bg-white/20 rounded-full blur-sm" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-6xl font-bold">🌱</span>
                  </div>
                </div>
              </motion.div>

              {/* Play Button Overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300"
              >
                <Play className="w-8 h-8 text-primary-600 ml-1" />
              </motion.button>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 left-0 right-0">
              <div className="grid grid-cols-3 gap-4">
                {content.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-lg text-center"
                  >
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

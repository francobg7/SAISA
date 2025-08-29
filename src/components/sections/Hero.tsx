
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const Hero: React.FC = () => {
  const { language } = useLanguage()
  const title = language === 'es'
    ? 'Transformamos el futuro Ambiental'
    : 'We Transform Environmental Future'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Ecological Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900">
        {/* Enhanced organic floating shapes - leaves and nature elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-teal-400/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-cyan-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Enhanced leaf-like shapes */}
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-green-400/10 rounded-full transform rotate-45 blur-md animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-emerald-400/15 rounded-full transform -rotate-12 blur-md animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* New: Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-blue-400/15 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-18 h-18 bg-teal-400/12 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2.2s' }} />
        <div className="absolute top-2/3 left-2/3 w-10 h-10 bg-green-400/18 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.2s' }} />
        
        {/* Water ripple effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
      </div>

      {/* NEW: Floating Recycling Symbols and Environmental Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Recycling symbols floating around */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`recycle-${i}`}
            className="absolute text-2xl md:text-3xl lg:text-4xl text-green-400/40"
            style={{
              left: `${20 + (i * 15) % 80}%`,
              top: `${30 + (i * 20) % 70}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ♻️
          </motion.div>
        ))}

        {/* Floating bottles and cans */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`bottle-${i}`}
            className="absolute text-xl md:text-2xl lg:text-3xl text-blue-400/30"
            style={{
              left: `${10 + (i * 25) % 90}%`,
              top: `${20 + (i * 30) % 80}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
              rotate: [0, 15, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            🍶
          </motion.div>
        ))}

        {/* Floating leaves and nature elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`leaf-${i}`}
            className="absolute text-lg md:text-xl lg:text-2xl text-emerald-400/35"
            style={{
              left: `${15 + (i * 18) % 85}%`,
              top: `${25 + (i * 22) % 75}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 7 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2.5,
            }}
          >
            🍃
          </motion.div>
        ))}

        {/* Enhanced animated particles representing environmental elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-green-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-24 lg:py-32 relative z-10">
        {/* Left: Title with ecological vertical bar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-row items-center w-full lg:w-1/2"
        >
          <div className="hidden lg:block h-32 w-2 rounded-full bg-gradient-to-b from-emerald-400 via-teal-400 to-cyan-400 mr-8 shadow-lg relative">
            {/* Enhanced small leaf decoration */}
            <div className="absolute -top-2 -right-1 w-4 h-4 bg-green-400/60 rounded-full transform rotate-45" />
            <div className="absolute -bottom-2 -left-1 w-3 h-3 bg-teal-400/60 rounded-full transform -rotate-45" />
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-cyan-400/60 rounded-full" />
          </div>
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl text-left uppercase tracking-wide">
              {title}
            </h1>
            
            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-300/30 hover:border-blue-200/50"
                onClick={() => {
                  // Navegar a la página de servicios
                  window.location.hash = '#services'
                  // O usar el contexto de navegación si está disponible
                  if (typeof window !== 'undefined' && window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent('navigate', { detail: 'services' }))
                  }
                }}
              >
                {language === 'es' ? 'Conocer Servicios' : 'Discover Services'}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-400/30 hover:border-blue-300/50"
                onClick={() => {
                  // Navegar a la página de proyectos
                  window.location.hash = '#projects'
                  // O usar el contexto de navegación si está disponible
                  if (typeof window !== 'undefined' && window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' }))
                  }
                }}
              >
                {language === 'es' ? 'Conocer Proyectos' : 'Discover Projects'}
              </motion.button>
            </div>
            
            {/* Ecological accent line */}
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-lg" />
          </div>
        </motion.div>

        {/* Right: Enhanced Earth Globe with more ecological effects */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0 relative"
        >
          {/* Enhanced orbital rings representing environmental cycles */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main outer ring */}
            <motion.div
              className="w-[500px] h-[500px] border border-emerald-400/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Secondary ring */}
            <motion.div
              className="absolute w-[420px] h-[420px] border border-teal-400/15 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            {/* NEW: Third ring */}
            <motion.div
              className="absolute w-[480px] h-[480px] border border-blue-400/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            {/* NEW: Fourth ring */}
            <motion.div
              className="absolute w-[380px] h-[380px] border border-cyan-400/12 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            {/* NEW: Fifth ring */}
            <motion.div
              className="absolute w-[520px] h-[520px] border border-green-400/8 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* NEW: Floating recycling symbols around the orbital rings */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`orbital-recycle-${i}`}
              className="absolute text-lg md:text-xl lg:text-2xl text-green-400/50"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                rotate: [0, 360],
                x: [0, Math.cos((i * 45) * Math.PI / 180) * 250],
                y: [0, Math.sin((i * 45) * Math.PI / 180) * 250],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: (i * 2.5),
              }}
            >
              ♻️
            </motion.div>
          ))}

          {/* Enhanced Earth Globe */}
          <motion.img
            src="/hero/earth-globe.webp"
            alt="Earth Globe - Environmental Sustainability"
            className="w-[260px] md:w-[340px] lg:w-[420px] h-auto object-contain rounded-full shadow-2xl border-4 border-emerald-900/40 relative z-10"
            style={{ 
              filter: 'drop-shadow(0 25px 50px rgba(16, 185, 129, 0.4))',
              boxShadow: '0 0 60px rgba(16, 185, 129, 0.3), inset 0 0 60px rgba(16, 185, 129, 0.1)'
            }}
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
              filter: 'drop-shadow(0 30px 60px rgba(16, 185, 129, 0.5))'
            }}
          />

          {/* Enhanced floating environmental icons around the globe */}
          <motion.div
            className="absolute top-4 left-4 w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-3 h-3 bg-emerald-400 rounded-full" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-8 right-8 w-6 h-6 bg-teal-400/20 rounded-full flex items-center justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-2 h-2 bg-teal-400 rounded-full" />
          </motion.div>

          {/* NEW: Additional floating elements around the globe */}
          <motion.div
            className="absolute top-8 right-4 w-5 h-5 bg-blue-400/25 rounded-full flex items-center justify-center"
            animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
          </motion.div>

          <motion.div
            className="absolute bottom-4 left-8 w-7 h-7 bg-cyan-400/20 rounded-full flex items-center justify-center"
            animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full" />
          </motion.div>

          {/* NEW: Floating recycling symbols near the globe */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`globe-recycle-${i}`}
              className="absolute text-sm md:text-base lg:text-lg text-green-400/60"
              style={{
                left: `${50 + (i * 20 - 20)}%`,
                top: `${50 + (i * 15 - 15)}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            >
              ♻️
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced bottom ecological wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-800/40 via-transparent to-transparent" />
    </section>
  )
}

export default Hero


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
      {/* Ecological Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900">
        {/* Organic floating shapes - leaves and nature elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-teal-400/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-cyan-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Leaf-like shapes */}
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-green-400/10 rounded-full transform rotate-45 blur-md animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-emerald-400/15 rounded-full transform -rotate-12 blur-md animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Water ripple effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
      </div>

      {/* Animated particles representing environmental elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
            {/* Add small leaf decoration */}
            <div className="absolute -top-2 -right-1 w-4 h-4 bg-green-400/60 rounded-full transform rotate-45" />
            <div className="absolute -bottom-2 -left-1 w-3 h-3 bg-teal-400/60 rounded-full transform -rotate-45" />
          </div>
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl text-left uppercase tracking-wide">
              {title}
            </h1>
            
            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ 
                  scale: 1.02, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden"
                onClick={() => {
                  // Navegar a la página de servicios
                  window.location.hash = '#services'
                  // O usar el contexto de navegación si está disponible
                  if (typeof window !== 'undefined' && window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent('navigate', { detail: 'services' }))
                  }
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                
                {/* Button content */}
                <div className="relative flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300" />
                  {language === 'es' ? 'Conocer Servicios' : 'Discover Services'}
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-5 h-5"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-50 blur-xl scale-110 group-hover:scale-125 transition-transform duration-500 -z-10" />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.02, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 text-white font-bold text-lg rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden"
                onClick={() => {
                  // Navegar a la página de proyectos
                  window.location.hash = '#projects'
                  // O usar el contexto de navegación si está disponible
                  if (typeof window !== 'undefined' && window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' }))
                  }
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                
                {/* Button content */}
                <div className="relative flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300" />
                  {language === 'es' ? 'Conocer Proyectos' : 'Discover Projects'}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="w-5 h-5"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 opacity-50 blur-xl scale-110 group-hover:scale-125 transition-transform duration-500 -z-10" />
              </motion.button>
            </div>
            
            {/* Ecological accent line */}
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-lg" />
          </div>
        </motion.div>

        {/* Right: Earth Globe with enhanced ecological effects */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0 relative"
        >
          {/* Orbital rings representing environmental cycles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[500px] h-[500px] border border-emerald-400/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[420px] h-[420px] border border-teal-400/15 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>

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

          {/* Floating environmental icons around the globe */}
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
        </motion.div>
      </div>

      {/* Bottom ecological wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-800/30 via-transparent to-transparent" />
    </section>
  )
}

export default Hero

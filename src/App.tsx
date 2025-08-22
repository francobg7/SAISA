import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Alliances from './components/Alliances'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LanguageContext from './contexts/LanguageContext'
import { Language } from './types'

function App() {
  const [language, setLanguage] = useState<Language>('es')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-primary-600 mb-2">SAISA</h2>
          <p className="text-gray-600">Cargando...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Alliances />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageContext.Provider>
  )
}

export default App

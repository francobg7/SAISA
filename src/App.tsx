import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import { 
  HomePage, 
  NosotrosPage, 
  ServiciosPage, 
  ProyectosPage, 
  AlianzasPage, 
  ContactoPage 
} from './pages'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LanguageContext from './contexts/LanguageContext'
import { NavigationProvider, useNavigation } from './contexts/NavigationContext'
import { Language } from './types'

function AppContent() {
  const { currentPage } = useNavigation()
  const [language, setLanguage] = useState<Language>('es')

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <NosotrosPage />
      case 'services':
        return <ServiciosPage />
      case 'projects':
        return <ProyectosPage />
      case 'alliances':
        return <AlianzasPage />
      case 'contact':
        return <ContactoPage />
      default:
        return <HomePage />
    }
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageContext.Provider>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 border-4 border-primary-200 border-t-primary-600  animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-primary-600 mb-2">SAISA</h2>
          <p className="text-gray-600">Cargando...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  )
}

export default App

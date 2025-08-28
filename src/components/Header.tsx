import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useNavigation } from '../contexts/NavigationContext'
import { navigationItems } from '../data/companyData'

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage()
  const { navigateTo } = useNavigation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href === '#contact') {
      navigateTo('contact')
    } else if (href === '#about') {
      navigateTo('about')
    } else if (href === '#services') {
      navigateTo('services')
    } else if (href === '#projects') {
      navigateTo('projects')
    } else if (href === '#alliances') {
      navigateTo('alliances')
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-800/95 backdrop-blur-custom shadow-lg'
          : 'bg-slate-800/90 backdrop-blur-custom'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateTo('home')}
            className="cursor-pointer"
          >
            <img 
              src="/logos/Logo.png" 
              alt="SAISA Logo" 
              className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
            />
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-slate-200 font-medium transition-colors duration-200"
              >
                {item.label[language]}
              </motion.button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 transition-colors duration-200"
            >
              <Globe className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                {language === 'es' ? 'ES' : 'EN'}
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-slate-700 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-700 bg-slate-800/95 backdrop-blur-custom"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-white hover:text-slate-200 hover:bg-slate-700 transition-all duration-200 font-medium"
                  >
                    {item.label[language]}
                  </motion.button>
                ))}
                
                {/* Mobile Language Switcher */}
                <div className="px-4 py-3">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 transition-colors duration-200 w-full justify-center"
                  >
                    <Globe className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">
                      {language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header

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

  // Add a style to the header before component mounts
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement('style')
    styleElement.innerHTML = `
      .header-shadow-overlay {
        background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
        pointer-events: none;
        z-index: -1;
      }
      
      .text-shadow {
        text-shadow: 0px 1px 2px rgba(0,0,0,0.5);
      }
    `
    // Append the style element to the head
    document.head.appendChild(styleElement)

    // Clean up function
    return () => {
      document.head.removeChild(styleElement)
    }
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
          ? 'bg-[#00217e]/95 backdrop-blur-custom shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {!isScrolled && <div className="absolute inset-0 header-shadow-overlay"></div>}
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
              className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain"
            />
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-slate-200 font-medium transition-colors duration-200 text-shadow"
              >
                {item.label[language]}
              </motion.button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-[#001a65] hover:bg-[#001550] transition-colors duration-200"
              >
              <Globe className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white text-shadow">
                {language === 'es' ? 'ES' : 'EN'}
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-[#001a65] transition-colors duration-200"
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
              className="lg:hidden border-t border-white/20 bg-[#00217e]/95 backdrop-blur-custom"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-white hover:text-slate-200 hover:bg-[#001a65] transition-all duration-200 font-medium"
                  >
                    {item.label[language]}
                  </motion.button>
                ))}
                
                {/* Mobile Language Switcher */}
                <div className="px-4 py-3">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 px-3 py-2 bg-[#001a65] hover:bg-[#001550] transition-colors duration-200 w-full justify-center"
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

      {/* Shadow overlay for better text readability */}
      <div className="header-shadow-overlay" />
    </motion.header>
  )
}

export default Header

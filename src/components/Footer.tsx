import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useNavigation } from '../contexts/NavigationContext'
import { companyInfo, navigationItems, socialLinks } from '../data/companyData'

const Footer: React.FC = () => {
  const { language } = useLanguage()
  const { navigateTo } = useNavigation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      description: 'Empresa pionera en innovación y aplicación de tecnologías sostenibles, bajas en carbono y orientadas a la economía circular.',
      quickLinks: 'Enlaces Rápidos',
      services: 'Servicios',
      contact: 'Contacto',
      followUs: 'Síguenos',
      allRightsReserved: 'Todos los derechos reservados',
      backToTop: 'Volver arriba',
      newsletter: {
        title: 'Mantente Informado',
        description: 'Suscríbete a nuestro boletín para recibir las últimas noticias sobre sostenibilidad',
        placeholder: 'Tu correo electrónico',
        subscribe: 'Suscribirse'
      }
    },
    en: {
      description: 'Pioneering company in innovation and application of sustainable technologies, low-carbon and oriented towards the circular economy.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved',
      backToTop: 'Back to top',
      newsletter: {
        title: 'Stay Informed',
        description: 'Subscribe to our newsletter to receive the latest sustainability news',
        placeholder: 'Your email address',
        subscribe: 'Subscribe'
      }
    }
  }

  const currentContent = content[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getSocialIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'linkedin': '🔗',
      'twitter': '🐦',
      'facebook': '📘',
      'instagram': '📷'
    }
    return iconMap[iconName] || '🔗'
  }

  const handleNavigation = (href: string) => {
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
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateTo('home')}
                className="flex items-center space-x-3 mb-6 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-display">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">SAISA</h3>
                  <p className="text-sm text-gray-400">
                    {language === 'es' ? 'Servicios Ambientales' : 'Environmental Services'}
                  </p>
                </div>
              </motion.button>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                {currentContent.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">{companyInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">{companyInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span className="text-sm">{companyInfo.whatsapp}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">
                {currentContent.quickLinks}
              </h4>
              <ul className="space-y-3">
                {navigationItems.slice(1, -1).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {item.label[language]}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  {currentContent.followUs}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <span className="text-lg">{getSocialIcon(social.icon)}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  {currentContent.newsletter.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  {currentContent.newsletter.description}
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder={currentContent.newsletter.placeholder}
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors duration-200"
                  >
                    {currentContent.newsletter.subscribe}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {companyInfo.name}. {currentContent.allRightsReserved}.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>
                {language === 'es' ? 'Fundada en' : 'Founded in'} {companyInfo.founded}
              </span>
              <span>•</span>
              <span>
                {language === 'es' ? 'Paraguay' : 'Paraguay'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40"
        aria-label={currentContent.backToTop}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer

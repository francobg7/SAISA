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
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero/footer-image.png" 
          alt="SAISA Environmental Services Background" 
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
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
              {/* Logo section removed to respect the logo in the background image */}

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold">{companyInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold">{companyInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold">{companyInfo.whatsapp}</span>
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
                      className="text-white hover:text-gray-200 transition-colors duration-200 text-sm font-semibold"
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
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 rounded-full"
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
                <p className="text-white text-sm mb-4 font-semibold">
                  {currentContent.newsletter.description}
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder={currentContent.newsletter.placeholder}
                    className="flex-1 px-4 py-2 bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent rounded-l-lg"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-200 font-semibold rounded-r-lg"
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
          className="border-t border-white/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white text-sm font-semibold">
              © {new Date().getFullYear()} {companyInfo.name}. {currentContent.allRightsReserved}.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white font-semibold">
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
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg flex items-center justify-center transition-all duration-300 z-40 rounded-full"
        aria-label={currentContent.backToTop}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer

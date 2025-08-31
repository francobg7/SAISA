import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Phone, ArrowUp, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { companyInfo, socialLinks } from '../data/companyData'

const Footer: React.FC = () => {
  const { language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      quickLinks: 'Enlaces Rápidos',
      about: 'Nosotros',
      projects: 'Proyectos',

      followUs: 'Síguenos',
      allRightsReserved: 'Todos los derechos reservados',
      backToTop: 'Volver arriba'
    },
    en: {
      quickLinks: 'Quick Links',
      about: 'About',
      projects: 'Projects',

      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved',
      backToTop: 'Back to top'
    }
  }

  const currentContent = content[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getSocialIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'linkedin': <Linkedin className="w-5 h-5" />,
      'twitter': <Twitter className="w-5 h-5" />,
      'facebook': <Facebook className="w-5 h-5" />,
      'instagram': <Instagram className="w-5 h-5" />
    }
    return iconMap[iconName] || <Linkedin className="w-5 h-5" />
  }

  const quickLinks = [
    { id: 'about', label: currentContent.about, href: '/nosotros' },
    { id: 'projects', label: currentContent.projects, href: '/proyectos' },

  ]

  return (
    <footer className="relative text-white" style={{ backgroundColor: '#113188' }}>
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
              {/* Logo */}
              <div className="mb-6">
                <img 
                  src="/logos/Logo.png" 
                  alt="SAISA Logo" 
                  className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)' }}
                />
              </div>

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
                {quickLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-white hover:text-gray-200 transition-colors duration-200 text-sm font-semibold"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
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
                    {getSocialIcon(social.icon)}
                  </motion.a>
                ))}
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
              <span>Paraguay</span>
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

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, Award, Globe, Leaf, Zap } from 'lucide-react'
import { Card } from '../../components/ui'
import { useLanguage } from '../../contexts/LanguageContext'
import { companyInfo } from '../../data/companyData'

const NosotrosPage: React.FC = () => {
  const { language } = useLanguage()

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      pageTitle: 'Sobre Nosotros',
      pageSubtitle: 'Somos una empresa pionera en innovación ambiental, comprometida con la transformación sostenible de Latinoamérica.',
      companyDescription: companyInfo.description.es,
      vision: companyInfo.vision.es,
      mission: companyInfo.mission.es,
      founded: 'Fundada',
      location: 'Ubicación',
      stats: {
        title: 'Nuestros Números',
        projects: 'Proyectos Completados',
        countries: 'Países',
        years: 'Años de Experiencia',
        impact: 'Impacto Ambiental'
      },
      values: {
        title: 'Nuestros Valores',
        innovation: 'Innovación',
        innovationDesc: 'Buscamos constantemente nuevas soluciones tecnológicas',
        sustainability: 'Sostenibilidad',
        sustainabilityDesc: 'Compromiso con el futuro del planeta',
        excellence: 'Excelencia',
        excellenceDesc: 'Calidad en cada proyecto que emprendemos',
        collaboration: 'Colaboración',
        collaborationDesc: 'Trabajamos juntos para lograr más'
      },
      team: {
        title: 'Nuestro Equipo',
        subtitle: 'Profesionales apasionados por la innovación ambiental',
        description: 'Contamos con un equipo multidisciplinario de expertos en ingeniería ambiental, biología, química y tecnología.'
      }
    },
    en: {
      pageTitle: 'About Us',
      pageSubtitle: 'We are a pioneering company in environmental innovation, committed to the sustainable transformation of Latin America.',
      companyDescription: companyInfo.description.en,
      vision: companyInfo.vision.en,
      mission: companyInfo.mission.en,
      founded: 'Founded',
      location: 'Location',
      stats: {
        title: 'Our Numbers',
        projects: 'Completed Projects',
        countries: 'Countries',
        years: 'Years of Experience',
        impact: 'Environmental Impact'
      },
      values: {
        title: 'Our Values',
        innovation: 'Innovation',
        innovationDesc: 'We constantly seek new technological solutions',
        sustainability: 'Sustainability',
        sustainabilityDesc: 'Commitment to the future of the planet',
        excellence: 'Excellence',
        excellenceDesc: 'Quality in every project we undertake',
        collaboration: 'Collaboration',
        collaborationDesc: 'We work together to achieve more'
      },
      team: {
        title: 'Our Team',
        subtitle: 'Professionals passionate about environmental innovation',
        description: 'We have a multidisciplinary team of experts in environmental engineering, biology, chemistry and technology.'
      }
    }
  }

  const currentContent = content[language]

  const stats = [
    { number: '15+', label: currentContent.stats.projects, icon: Award },
    { number: '4', label: currentContent.stats.countries, icon: Globe },
    { number: '10+', label: currentContent.stats.years, icon: Users },
    { number: '100%', label: currentContent.stats.impact, icon: Leaf }
  ]

  const values = [
    { icon: Zap, title: currentContent.values.innovation, description: currentContent.values.innovationDesc },
    { icon: Leaf, title: currentContent.values.sustainability, description: currentContent.values.sustainabilityDesc },
    { icon: Award, title: currentContent.values.excellence, description: currentContent.values.excellenceDesc },
    { icon: Users, title: currentContent.values.collaboration, description: currentContent.values.collaborationDesc }
  ]

  return (
    <motion.main
      key="nosotros"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50"
    >
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {currentContent.pageTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {currentContent.pageSubtitle}
          </motion.p>
        </div>
      </div>

      {/* Company Info */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {companyInfo.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {currentContent.companyDescription}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">
                    <strong>{currentContent.founded}:</strong> {companyInfo.founded}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">
                    <strong>{currentContent.location}:</strong> {companyInfo.location}
                  </span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visión</h3>
                <p className="text-gray-600">{currentContent.vision}</p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Misión</h3>
                <p className="text-gray-600">{currentContent.mission}</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16" ref={statsRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.stats.title}
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} animate delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.values.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} animate delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 text-secondary-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16" ref={teamRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.team.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {currentContent.team.subtitle}
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {currentContent.team.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
}

export default NosotrosPage 
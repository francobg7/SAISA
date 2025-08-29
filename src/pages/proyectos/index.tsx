import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '../../components/ui'
import { useLanguage } from '../../contexts/LanguageContext'
import { projects } from '../../data/companyData'

const ProyectosPage: React.FC = () => {
  const { language } = useLanguage()

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      pageTitle: 'Nuestros Proyectos',
      pageSubtitle: 'Descubre cómo hemos transformado desafíos ambientales en oportunidades de valor sostenible en toda Latinoamérica.',
      projectsTitle: 'Proyectos Destacados',
      projectsSubtitle: 'Cada proyecto representa nuestro compromiso con la innovación ambiental y la creación de valor sostenible.',
      impact: {
        title: 'Impacto Medible',
        subtitle: 'Nuestros proyectos generan resultados tangibles en múltiples dimensiones.',
        metrics: [
          { label: 'Reducción de CO2', value: '15,000+ toneladas/año' },
          { label: 'Agua Tratada', value: '2.5M+ litros/día' },
          { label: 'Residuos Valorizados', value: '85%+ eficiencia' },
          { label: 'Retorno de Inversión', value: '3-5 años' }
        ]
      },
      categories: {
        title: 'Categorías de Proyectos',
        subtitle: 'Especializaciones que abarcan todo el espectro de la sostenibilidad ambiental.',
        items: [
          {
            title: 'Gestión de Residuos',
            description: 'Soluciones integrales para residuos industriales y urbanos',
            icon: '♻️'
          },
          {
            title: 'Tratamiento de Aguas',
            description: 'Tecnologías avanzadas para purificación y reutilización',
            icon: '💧'
          },
          {
            title: 'Calidad del Aire',
            description: 'Monitoreo y control de emisiones contaminantes',
            icon: '🌬️'
          },
          {
            title: 'Energía Renovable',
            description: 'Sistemas de generación limpia y eficiente',
            icon: '⚡'
          }
        ]
      },
      cta: {
        title: '¿Tienes un proyecto ambiental en mente?',
        subtitle: 'Conversemos sobre cómo podemos ayudarte a hacerlo realidad.',
        button: 'Discutir Proyecto'
      }
    },
    en: {
      pageTitle: 'Our Projects',
      pageSubtitle: 'Discover how we have transformed environmental challenges into sustainable value opportunities across Latin America.',
      projectsTitle: 'Featured Projects',
      projectsSubtitle: 'Each project represents our commitment to environmental innovation and sustainable value creation.',
      impact: {
        title: 'Measurable Impact',
        subtitle: 'Our projects generate tangible results in multiple dimensions.',
        metrics: [
          { label: 'CO2 Reduction', value: '15,000+ tons/year' },
          { label: 'Water Treated', value: '2.5M+ liters/day' },
          { label: 'Waste Valorized', value: '85%+ efficiency' },
          { label: 'Return on Investment', value: '3-5 years' }
        ]
      },
      categories: {
        title: 'Project Categories',
        subtitle: 'Specializations covering the entire spectrum of environmental sustainability.',
        items: [
          {
            title: 'Waste Management',
            description: 'Comprehensive solutions for industrial and urban waste',
            icon: '♻️'
          },
          {
            title: 'Water Treatment',
            description: 'Advanced technologies for purification and reuse',
            icon: '💧'
          },
          {
            title: 'Air Quality',
            description: 'Monitoring and control of pollutant emissions',
            icon: '🌬️'
          },
          {
            title: 'Renewable Energy',
            description: 'Clean and efficient generation systems',
            icon: '⚡'
          }
        ]
      },
      cta: {
        title: 'Have an environmental project in mind?',
        subtitle: 'Let\'s talk about how we can help you make it a reality.',
        button: 'Discuss Project'
      }
    }
  }

  const currentContent = content[language]

  return (
    <motion.main
      key="proyectos"
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

      {/* Projects Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16" ref={projectsRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.projectsTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.projectsSubtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} animate delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-6xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description[language]}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-gray-500">
                      <strong>Categoría:</strong> {project.category[language]}
                    </div>
                    <div className="text-xs text-gray-500">
                      <strong>Año:</strong> {project.year}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-primary-50 p-2 rounded">
                      <div className="font-semibold text-primary-700">Impacto</div>
                      <div className="text-gray-600">{project.stats.impact}</div>
                    </div>
                    <div className="bg-secondary-50 p-2 rounded">
                      <div className="font-semibold text-secondary-700">Duración</div>
                      <div className="text-gray-600">{project.stats.duration}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.impact.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.impact.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.impact.metrics.map((metric, index) => (
              <Card key={index} animate delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-600">{metric.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.categories.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.categories.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.categories.items.map((category, index) => (
              <Card key={index} animate delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <h2 className="text-3xl font-bold mb-4">
              {currentContent.cta.title}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {currentContent.cta.subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {currentContent.cta.button}
            </motion.button>
          </Card>
        </div>
      </div>
    </motion.main>
  )
}

export default ProyectosPage 
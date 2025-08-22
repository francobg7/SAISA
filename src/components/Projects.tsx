import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, TrendingUp, ExternalLink, Filter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { projects } from '../data/companyData'

const Projects: React.FC = () => {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      sectionTitle: 'Nuestros Proyectos',
      sectionSubtitle: 'Casos de éxito que demuestran nuestro compromiso con la innovación ambiental y la sostenibilidad',
      allProjects: 'Todos los Proyectos',
      viewDetails: 'Ver Detalles',
      impact: 'Impacto',
      category: 'Categoría',
      year: 'Año',
      location: 'Ubicación',
      learnMore: 'Conocer Más',
      contactUs: 'Contáctanos',
      filterLabel: 'Filtrar por categoría:'
    },
    en: {
      sectionTitle: 'Our Projects',
      sectionSubtitle: 'Success cases that demonstrate our commitment to environmental innovation and sustainability',
      allProjects: 'All Projects',
      viewDetails: 'View Details',
      impact: 'Impact',
      category: 'Category',
      year: 'Year',
      location: 'Location',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      filterLabel: 'Filter by category:'
    }
  }

  const currentContent = content[language]

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category[language])))]

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category[language] === selectedCategory)

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(selectedProject === projectId ? null : projectId)
  }

  const handleContactClick = () => {
    const message = language === 'es'
      ? 'Hola, me interesa conocer más sobre los proyectos de SAISA'
      : 'Hello, I am interested in learning more about SAISA projects'
    
    const whatsappUrl = `https://wa.me/+595984774091?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {currentContent.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.sectionSubtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <span className="text-gray-600 font-medium flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            {currentContent.filterLabel}
          </span>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? currentContent.allProjects : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div 
                className="card overflow-hidden h-full transition-all duration-300 group-hover:shadow-2xl"
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🌱</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-600">
                      {project.category[language]}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-secondary-600">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                    {project.title[language]}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description[language]}
                  </p>

                  {/* Project Stats */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{project.title[language].split(' - ')[1]}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="line-clamp-1">{project.impact[language]}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProjectClick(project.id)
                    }}
                    className="w-full btn-outline text-sm py-2"
                  >
                    {selectedProject === project.id ? currentContent.viewDetails : currentContent.learnMore}
                  </motion.button>
                </div>
              </div>

              {/* Expanded Project Details */}
              <AnimatePresence>
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{currentContent.category}</h4>
                        <p className="text-gray-600">{project.category[language]}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{currentContent.impact}</h4>
                        <p className="text-gray-600">{project.impact[language]}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{currentContent.year}</h4>
                        <p className="text-gray-600">{project.year}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleContactClick()
                        }}
                        className="btn-primary flex items-center justify-center space-x-2"
                      >
                        <span>{currentContent.contactUs}</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'es' 
                ? '¿Quieres ser parte de nuestros próximos proyectos?' 
                : 'Want to be part of our next projects?'
              }
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {language === 'es'
                ? 'Contáctanos para discutir cómo podemos ayudarte a alcanzar tus objetivos de sostenibilidad'
                : 'Contact us to discuss how we can help you achieve your sustainability goals'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                {currentContent.contactUs}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

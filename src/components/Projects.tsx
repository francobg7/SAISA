import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { projects } from '../data/companyData'

const Projects: React.FC = () => {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredProjects.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredProjects.length / 3)) % Math.ceil(filteredProjects.length / 3))
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50" />
      
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary-100 to-secondary-100  opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary-100 to-accent-100  opacity-20 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-accent-50 to-primary-50  opacity-15 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header - Full Width */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                {currentContent.sectionTitle}
              </h2>
              <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {currentContent.sectionSubtitle}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Category Filter - Full Width */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {['all', ...Array.from(new Set(projects.map(p => p.category[language])))].map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3  font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 rounded-xl'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-primary-50 hover:border-primary-200 rounded-xl'
                  }`}
                >
                  {category === 'all' 
                    ? (language === 'es' ? 'Todos' : 'All')
                    : category
                  }
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Projects Carousel - Full Width */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(filteredProjects.length / 3) }, (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project, index) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            className="group"
                          >
                            <div 
                              className="bg-white overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer rounded-2xl"
                              onClick={() => handleProjectClick(project.id)}
                            >
                              {/* Project Image */}
                              <div className="relative h-64 overflow-hidden">
                                <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-80`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm  flex items-center justify-center border border-white/30 rounded-full">
                                    <Target className="w-10 h-10 text-white" />
                                  </div>
                                </div>
                                <div className="absolute top-4 right-4">
                                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700  border border-white/50 rounded-full">
                                    {project.category[language]}
                                  </span>
                                </div>
                              </div>

                              {/* Project Content */}
                              <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                                  {project.title[language]}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                  {project.description[language]}
                                </p>
                                
                                {/* Project Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-primary-600">
                                      {project.stats.impact}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {language === 'es' ? 'Impacto' : 'Impact'}
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-secondary-600">
                                      {project.stats.duration}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {language === 'es' ? 'Duración' : 'Duration'}
                                    </div>
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
                                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium py-3 px-6 hover:shadow-lg transition-all duration-300"
                                >
                                  {currentContent.viewDetails}
                                </motion.button>
                              </div>
                            </div>

                            {/* Expanded Project Details */}
                            <AnimatePresence>
                              {selectedProject === project.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0, y: -20 }}
                                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                                  exit={{ opacity: 0, height: 0, y: -20 }}
                                  transition={{ duration: 0.4, ease: "easeInOut" }}
                                  className="mt-6"
                                >
                                  <div className="bg-white/95 backdrop-blur-sm p-8 shadow-2xl border border-white/20">
                                    <div className="grid md:grid-cols-2 gap-8">
                                      {/* Project Details */}
                                      <div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-6">
                                          {language === 'es' ? 'Detalles del Proyecto' : 'Project Details'}
                                        </h4>
                                        <div className="space-y-4">
                                          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 border border-primary-200">
                                            <div className="flex items-center space-x-3 mb-2">
                                              <div className="w-8 h-8 bg-primary-500  flex items-center justify-center">
                                                <Target className="w-4 h-4 text-white" />
                                              </div>
                                              <span className="font-semibold text-gray-900">
                                                {language === 'es' ? 'Objetivo' : 'Objective'}
                                              </span>
                                            </div>
                                            <p className="text-gray-700 text-sm">
                                              {project.objective[language]}
                                            </p>
                                          </div>
                                          
                                          <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 p-4 border border-secondary-200">
                                            <div className="flex items-center space-x-3 mb-2">
                                              <div className="w-8 h-8 bg-secondary-500  flex items-center justify-center">
                                                <CheckCircle className="w-4 h-4 text-white" />
                                              </div>
                                              <span className="font-semibold text-gray-900">
                                                {language === 'es' ? 'Resultados' : 'Results'}
                                              </span>
                                            </div>
                                            <p className="text-gray-700 text-sm">
                                              {project.results[language]}
                                            </p>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Technologies Used */}
                                      <div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-6">
                                          {language === 'es' ? 'Tecnologías Utilizadas' : 'Technologies Used'}
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3">
                                          {project.technologies.map((tech, techIndex) => (
                                            <div key={techIndex} className="bg-gray-50 p-3 text-center border border-gray-200">
                                              <span className="text-sm font-medium text-gray-700">{tech}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>

                                    {/* Call to Action */}
                                    <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                                      <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleContactClick}
                                        className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-4 px-8 hover:shadow-xl transition-all duration-300"
                                      >
                                        {language === 'es' ? 'Consultar Proyecto Similar' : 'Consult Similar Project'}
                                      </motion.button>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Carousel Navigation */}
              {filteredProjects.length > 3 && (
                <>
                  {/* Previous Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm  flex items-center justify-center shadow-lg border border-gray-200 hover:bg-white transition-all duration-300 z-10 rounded-full"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                  </motion.button>

                  {/* Next Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm  flex items-center justify-center shadow-lg border border-gray-200 hover:bg-white transition-all duration-300 z-10 rounded-full"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </motion.button>

                  {/* Dots Indicator */}
                  <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: Math.ceil(filteredProjects.length / 3) }, (_, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3  transition-all duration-300 ${
                          currentSlide === index
                            ? 'bg-primary-600 scale-125 rounded-full'
                            : 'bg-gray-300 hover:bg-gray-400 rounded-full'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-secondary-600 to-primary-600  p-12 text-center text-white relative overflow-hidden rounded-2xl"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white " />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-white " />
                <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-white " />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">
                  {language === 'es' 
                    ? '¿Tienes un Proyecto en Mente?' 
                    : 'Have a Project in Mind?'
                  }
                </h3>
                <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                  {language === 'es'
                    ? 'Conversemos sobre cómo podemos ayudarte a implementar soluciones ambientales innovadoras'
                    : 'Let\'s talk about how we can help you implement innovative environmental solutions'
                  }
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactClick}
                  className="bg-white text-secondary-600 font-semibold px-8 py-4  hover:bg-gray-100 transition-colors duration-300 shadow-xl rounded-xl"
                >
                  {language === 'es' ? 'Iniciar Conversación' : 'Start Conversation'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Globe, Leaf, Shield, Recycle, Droplets, Waves, Activity, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { projects } from '../../data/companyData'

const Projects: React.FC = () => {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const carouselRef = useRef<HTMLDivElement>(null)

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
      filterLabel: 'Filtrar por categoría:',
      exploreProject: 'Explorar Proyecto',
      backToProjects: 'Volver a Proyectos',
      selectProject: 'Selecciona un Proyecto',
      selectProjectDesc: 'Haz click en cualquier proyecto para explorar su impacto ambiental'
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
      filterLabel: 'Filter by category:',
      exploreProject: 'Explore Project',
      backToProjects: 'Back to Projects',
      selectProject: 'Select a Project',
      selectProjectDesc: 'Click on any project to explore its environmental impact'
    }
  }

  const currentContent = content[language]

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter((p: any) => p.category[language] === selectedCategory)

  const handleContactClick = () => {
    const message = language === 'es'
      ? 'Hola, me interesa conocer más sobre los proyectos de SAISA'
      : 'Hello, I am interested in learning more about SAISA projects'
    
    const whatsappUrl = `https://wa.me/+595984774091?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'waste-management': Recycle,
      'water-treatment': Droplets,
      'air-quality': Activity,
      'sustainability': Leaf,
      'environmental-consulting': Shield,
      'default': Globe
    }
    return iconMap[category] || iconMap.default
  }

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'waste-management': 'from-slate-700 to-slate-800',
      'water-treatment': 'from-blue-700 to-blue-800',
      'air-quality': 'from-indigo-700 to-indigo-800',
      'sustainability': 'from-emerald-700 to-emerald-800',
      'environmental-consulting': 'from-violet-700 to-violet-800',
      'default': 'from-gray-700 to-gray-800'
    }
    return colorMap[category] || colorMap.default
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [filteredProjects.length])

  return (
    <section id="projects" className="relative py-24 overflow-hidden min-h-screen">
              {/* Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/3 to-white/1" />
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Energy Waves with Custom Colors */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-white/10 rounded-full"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header with Floating Elements */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center relative"
            >


              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative">
                {currentContent.sectionTitle}
              </h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              >
                {currentContent.sectionSubtitle}
              </motion.p>

              {/* Professional Accent Line */}
              <motion.div
                className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full mx-auto"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Category Filter with Custom Colors */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory('all')}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-600/50'
                    : 'bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                                  {selectedCategory === 'all' && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                <span className="relative z-10">{currentContent.allProjects}</span>
              </motion.button>
              
              {Array.from(new Set(projects.map((p: any) => p.category[language]))).map((category: string) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-2xl shadow-emerald-600/50'
                      : 'bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm border border-white/20'
                  }`}
                >
                                      {selectedCategory === category && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-20"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  <span className="relative z-10">{category}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Carousel Container */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Carousel Navigation */}
            <div className="flex justify-between items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-14 h-14 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-slate-700/50 transition-all duration-300 z-20"
              >
                <ChevronLeft className="w-7 h-7" />
              </motion.button>

              <div className="flex space-x-2">
                {filteredProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => goToSlide(index)}
                                                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
                               index === currentIndex
                                 ? 'bg-white scale-125 shadow-lg shadow-white/50'
                                 : 'bg-white/40 hover:bg-white/60'
                             }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-14 h-14 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-blue-700/50 transition-all duration-300 z-20"
              >
                <ChevronRight className="w-7 h-7" />
              </motion.button>
            </div>

            {/* 3D Carousel */}
            <div className="relative overflow-hidden">
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {filteredProjects.map((project: any, index: number) => {
                  const IconComponent = getCategoryIcon(project.category.en)
                  const gradientClass = getCategoryColor(project.category.en)
                                     const isCenter = index === currentIndex
                   const isLeft = index < currentIndex
                  
                  return (
                    <div
                      key={project.id}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                        animate={{ 
                          opacity: 1, 
                          scale: isCenter ? 1 : 0.85,
                          rotateY: isCenter ? 0 : isLeft ? -15 : 15,
                          x: isCenter ? 0 : isLeft ? -50 : 50,
                          z: isCenter ? 100 : 0
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        className={`relative cursor-pointer group transition-all duration-500 transform-gpu ${
                          isCenter ? 'z-20' : 'z-10'
                        }`}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px',
                        }}
                      >
                        {/* 3D Project Card */}
                        <motion.div
                                                     className={`relative bg-gradient-to-br ${gradientClass} rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform-gpu ${
                             isCenter 
                               ? 'shadow-blue-500/30 shadow-2xl' 
                               : 'shadow-lg opacity-80'
                           }`}
                          style={{
                            transform: isCenter ? 'translateZ(50px)' : 'translateZ(0px)',
                          }}
                        >
                          {/* Project Image */}
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title[language]}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-medium text-white border border-white/30 rounded-full">
                                {project.category[language]}
                              </span>
                            </div>

                            {/* Floating Icon */}
                            <motion.div
                              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                              animate={{
                                y: [0, -5, 0],
                                rotate: [0, 180, 360],
                              }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <IconComponent className="w-5 h-5 text-white" />
                            </motion.div>
                          </div>

                          {/* Card Content */}
                          <div className="relative p-6 text-white">
                                                      <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                            {project.title[language]}
                          </h3>
                            
                            <p className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-3">
                              {project.description[language]}
                            </p>

                            {/* Project Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                <div className="text-xl font-bold mb-1">
                                  {project.year}
                                </div>
                                <div className="text-xs text-white/70 uppercase tracking-wide">
                                  {currentContent.year}
                                </div>
                              </div>
                              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                                            <div className="text-xl font-bold text-white mb-1">
                              {project.impact[language]}
                            </div>
                                <div className="text-xs text-white/70 uppercase tracking-wide">
                                  {currentContent.impact}
                                </div>
                              </div>
                            </div>

                            {/* Action Button */}
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-white/20 backdrop-blur-sm text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 border border-white/30 hover:bg-white/30 flex items-center justify-center gap-2 group/btn"
                            >
                              <span>{currentContent.exploreProject}</span>
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </motion.div>
                            </motion.button>
                          </div>

                                                   {/* Professional Accent Line at Bottom */}
                         <motion.div
                           className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                           animate={{
                             scaleX: [0, 1, 0],
                           }}
                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                         />
                        </motion.div>

                                                 {/* Center Card Glow */}
                         {isCenter && (
                           <motion.div
                             layoutId="centerGlow"
                             className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/15 to-purple-500/10 rounded-3xl opacity-40 blur-xl"
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 0.4 }}
                             transition={{ duration: 0.3 }}
                           />
                         )}
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Call to Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-20 text-center"
            >
                               <div className="bg-gradient-to-r from-slate-800/50 via-slate-700/30 to-slate-600/20 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-12 relative overflow-hidden">
                   {/* Background Pattern */}
                   <div className="absolute inset-0 opacity-10">
                     <div className="absolute top-0 right-0 w-32 h-32 border-2 border-blue-400 rounded-full" />
                     <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-indigo-400 rounded-full" />
                     <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-purple-400 rounded-full" />
                   </div>
                
                <div className="relative z-10">
                  <motion.h3
                    className="text-4xl font-bold text-white mb-6"
                                         animate={{
                       textShadow: [
                         "0 0 20px rgba(255, 255, 255, 0.5)",
                         "0 0 40px rgba(255, 255, 255, 0.8)",
                         "0 0 20px rgba(255, 255, 255, 0.5)"
                       ]
                     }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {language === 'es' 
                      ? '¿Tienes un Proyecto en Mente?' 
                      : 'Have a Project in Mind?'
                    }
                  </motion.h3>
                  
                  <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                    {language === 'es'
                      ? 'Conversemos sobre cómo podemos ayudarte a implementar soluciones ambientales innovadoras'
                      : 'Let\'s talk about how we can help you implement innovative environmental solutions'
                    }
                  </p>
                  
                                     <motion.button
                     whileHover={{ scale: 1.05, y: -2 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={handleContactClick}
                     className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300 flex items-center gap-2 mx-auto"
                   >
                    <Waves className="w-5 h-5" />
                    {language === 'es' ? 'Iniciar Conversación' : 'Start Conversation'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

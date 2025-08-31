import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../../contexts/LanguageContext'

const Projects: React.FC = () => {
  const { language } = useLanguage()

  const [objectivesRef, objectivesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      objectives: {
        title: 'Nuestros Objetivos Estratégicos',
        subtitle: 'Hacia un futuro más sostenible e innovador',
        items: [
          {
            title: 'Crecimiento',
            items: [
              'Expandir la presencia regional en LATAM en 3–5 años',
              '40% sector privado / 60% sector público',
              'Incrementar facturación con nuevas líneas sostenibles'
            ]
          },
          {
            title: 'Posicionamiento',
            items: [
              'Consolidar la marca SAISA como referente en sostenibilidad',
              'Obtener certificaciones internacionales (ISO 14001, B Corp)',
              'Participar en redes de innovación verde'
            ]
          },
          {
            title: 'Extrategia de expansión',
            items: [
              'Alianzas estratégicas con grandes empresas e instituciones',
              'Proyectos piloto con resultados medibles',
              'Modelos de negocio flexibles (servicios, PPP, leasing tecnológico)'
            ]
          }
        ]
      }
    },
    en: {
      objectives: {
        title: 'Our Strategic Objectives',
        subtitle: 'Towards a more sustainable and innovative future',
        items: [
          {
            title: 'Growth',
            items: [
              'Expand regional presence in LATAM in 3–5 years',
              '40% private sector / 60% public sector',
              'Increase revenue with new sustainable lines'
            ]
          },
          {
            title: 'Positioning',
            items: [
              'Consolidate SAISA brand as a reference in sustainability',
              'Obtain international certifications (ISO 14001, B Corp)',
              'Participate in green innovation networks'
            ]
          },
          {
            title: 'Expansion strategy',
            items: [
              'Partnerships with large companies and institutions',
              'Pilot projects with measurable results',
              'Flexible business models (services, PPP, technology leasing)'
            ]
          }
        ]
      }
    }
  }

  const currentContent = content[language]

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Objectives Section - Minimalist & Professional */}
        <div 
          className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed rounded-2xl overflow-hidden" 
          style={{
            backgroundImage: 'url(/Proyectos/proyecto03.jpg)'
          }}
          ref={objectivesRef}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={objectivesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                {currentContent.objectives.title}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-light">
                {currentContent.objectives.subtitle}
              </p>
            </motion.div>

            {/* Objectives Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {currentContent.objectives.items.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={objectivesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  {/* Clean Card Design */}
                  <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-8 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                    
                    {/* Simple Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                        {index === 0 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
                          </svg>
                        ) : index === 1 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                          </svg>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {objective.title}
                      </h3>
                      
                      <div className="w-12 h-0.5 bg-green-500"></div>
                    </div>

                    {/* Clean List */}
                    <div className="space-y-3">
                      {objective.items.map((item, itemIndex) => (
                        <motion.div 
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={objectivesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) + 0.3 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Simple Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={objectivesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center space-x-2 text-sm text-white/80">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Estrategia Corporativa 2030</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

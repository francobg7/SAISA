import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../../contexts/LanguageContext'

const ProyectosPage: React.FC = () => {
  const { language } = useLanguage()

  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [objectivesRef, objectivesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      hero: {
        title: 'Nuestros Proyectos',
        subtitle: 'Soluciones ambientales sostenibles que generan impacto real en la sociedad, la economía y el medio ambiente'
      },
      introduction: {
        title: 'SAISA: Innovación Ambiental',
        description: 'SAISA es una empresa pionera en la innovación y aplicación de tecnologías sostenibles, bajas en carbono y orientadas a la economía circular. Ofrecemos soluciones ambientales integrales que combinan ciencia, ingeniería y compromiso con el planeta.',
        subtitle: 'A través de alianzas estratégicas, transformamos fuentes de contaminación en activos ambientales con valor de mercado, creando oportunidades reales para regenerar ecosistemas y revitalizar comunidades.'
      },
      transition: {
        quote: 'Transformamos fuentes de contaminación en activos ambientales con valor de mercado, creando oportunidades reales para regenerar ecosistemas y revitalizar comunidades.'
      },
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
            title: 'Penetración',
            items: [
              'Alianzas estratégicas con grandes empresas e instituciones',
              'Proyectos piloto con resultados medibles',
              'Modelos de negocio flexibles (servicios, PPP, leasing tecnológico)'
            ]
          }
        ]
      },
      cta: {
        title: 'Construyamos juntos un futuro más sostenible',
        button: 'Contáctanos'
      }
    },
    en: {
      hero: {
        title: 'Our Projects',
        subtitle: 'Sustainable environmental solutions that generate real impact on society, economy and the environment'
      },
      introduction: {
        title: 'SAISA: Environmental Innovation',
        description: 'SAISA is a pioneering company in innovation and application of sustainable technologies, low-carbon and oriented towards the circular economy. We offer comprehensive environmental solutions that combine science, engineering and commitment to the planet.',
        subtitle: 'We transform sources of pollution into environmental assets with market value, creating real opportunities to regenerate ecosystems and revitalize communities.'
      },
      transition: {
        quote: 'We transform sources of pollution into environmental assets with market value, creating real opportunities to regenerate ecosystems and revitalize communities.'
      },
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
            title: 'Penetration',
            items: [
              'Partnerships with large companies and institutions',
              'Pilot projects with measurable results',
              'Flexible business models (services, PPP, technology leasing)'
            ]
          }
        ]
      },
      cta: {
        title: 'Let\'s build a more sustainable future together',
        button: 'Contact Us'
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
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div 
        className="relative min-h-[65vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/public/Proyectos/proyecto01.jpg)',
          backgroundSize: '100%',
          backgroundPosition: 'center 60%'
        }}
      >
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            {currentContent.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed"
          >
            {currentContent.hero.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={introRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#4fd929' }}>
                {currentContent.introduction.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {currentContent.introduction.description}
              </p>
              <div className="p-6 rounded-lg border-l-4" style={{ backgroundColor: '#f2f2f2', borderLeftColor: '#8ed91e' }}>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {currentContent.introduction.subtitle}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/public/Proyectos/eco-solutions.jpg" 
                  alt="SAISA Environmental Solutions"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4fd929]/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Transition Video Section */}
      <div className="relative py-32 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/public/Proyectos/videobackground.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
          >
            "{currentContent.transition.quote}"
          </motion.blockquote>
        </div>
      </div>

      {/* Objectives Section - Minimalist & Professional */}
      <div 
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed" 
        style={{
          backgroundImage: 'url(/public/Proyectos/proyecto03.jpg)'
        }}
        ref={objectivesRef}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={objectivesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              {currentContent.objectives.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
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
                <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                  
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
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Estrategia Corporativa 2030</span>
            </div>
          </motion.div>
        </div>
      </div>


    </motion.main>
  )
}

export default ProyectosPage 
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Leaf, 
  Zap, 
  Eye, 
  Heart, 
  Shield, 
  Users2, 
  Star,
  
  TreePine,
  Sprout,
  Mountain,
  Droplets,
  Sun,
  Wind
} from 'lucide-react'

import { useLanguage } from '../../contexts/LanguageContext'
import { companyInfo } from '../../data/companyData'

const NosotrosPage: React.FC = () => {
  const { language } = useLanguage()

  const [visionRef, visionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [impactRef, impactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      pageTitle: 'Nosotros',
      pageSubtitle: 'Somos una empresa pionera en innovación ambiental, comprometida con la transformación sostenible de Latinoamérica.',
      companyDescription: companyInfo.description.es,
      vision: {
        title: 'Nuestra Visión',
        description: 'Ser el referente latinoamericano en innovación ambiental, inspirando y liderando el cambio a un continente más limpio, innovando y desarrollando tecnologías sostenibles y fortaleciendo alianzas para construir un futuro próspero y bajo en carbono.',
        image: '/img/vision.jpg'
      },
      mission: {
        title: 'Nuestra Misión',
        description: 'Convertirnos en el motor de transformación sostenible en Latinoamérica, creando valor ambiental, social y económico mediante tecnologías limpias e innovadoras',
        image: '/img/mision.jpg'
      },
      values: {
        title: 'Nuestros Valores',
        subtitle: 'Los principios que guían nuestro trabajo y compromiso con el futuro',
        items: [
          {
            title: 'Sostenibilidad',
            description: 'Compromiso inquebrantable con el futuro del planeta y las generaciones venideras',
            icon: Leaf,
            color: 'from-green-500 to-green-600',
            ecoIcon: TreePine
          },
          {
            title: 'Innovación',
            description: 'Búsqueda constante de soluciones tecnológicas disruptivas y eficientes',
            icon: Zap,
            color: 'from-blue-500 to-blue-600',
            ecoIcon: Wind
          },
          {
            title: 'Integridad',
            description: 'Actuamos con transparencia, ética y responsabilidad en todas nuestras acciones',
            icon: Shield,
            color: 'from-purple-500 to-purple-600',
            ecoIcon: Mountain
          },
          {
            title: 'Colaboración',
            description: 'Creemos en el poder de trabajar juntos para lograr un impacto mayor',
            icon: Users2,
            color: 'from-orange-500 to-orange-600',
            ecoIcon: Sprout
          },
          {
            title: 'Excelencia',
            description: 'Buscamos la perfección en cada proyecto y servicio que ofrecemos',
            icon: Star,
            color: 'from-yellow-500 to-yellow-600',
            ecoIcon: Sun
          },
          {
            title: 'Resiliencia',
            description: 'Adaptabilidad y fortaleza para superar desafíos y crear soluciones duraderas',
            icon: Heart,
            color: 'from-red-500 to-red-600',
            ecoIcon: Droplets
          }
        ]
      },
      impact: {
        title: 'Nuestro Impacto Ambiental',
        subtitle: 'Transformando el presente, preservando el futuro',
        items: [
          {
            title: 'Reducción de Emisiones',
            description: 'Hemos ayudado a reducir más de 10,000 toneladas de CO2',
            icon: Wind,
            metric: '10,000+',
            unit: 'ton CO2'
          },
          {
            title: 'Agua Recuperada',
            description: 'Sistemas que han tratado y reutilizado millones de litros',
            icon: Droplets,
            metric: '5M+',
            unit: 'litros'
          },
          {
            title: 'Residuos Valorizados',
            description: 'Transformando desechos en recursos valiosos',
            icon: Leaf,
            metric: '85%',
            unit: 'eficiencia'
          }
        ]
      },
      cta: {
        title: '¿Listo para unirte a la transformación sostenible?',
        subtitle: 'Trabajemos juntos para crear un futuro más limpio y próspero',
        button: 'Contáctanos',
        buttonSecondary: 'Conoce nuestros proyectos'
      },

    },
    en: {
      pageTitle: 'About Us',
      pageSubtitle: 'We are a pioneering company in environmental innovation, committed to the sustainable transformation of Latin America.',
      companyDescription: companyInfo.description.en,
      vision: {
        title: 'Our Vision',
        description: 'To be the Latin American reference in environmental innovation, inspiring and leading change towards a cleaner continent, innovating and developing sustainable technologies to build a prosperous, low-carbon future.',
        image: '/img/vision.jpg'
      },
      mission: {
        title: 'Our Mission',
        description: 'To become the engine of sustainable transformation in Latin America, creating environmental, social and economic value through clean and innovative technologies',
        image: '/img/mision.jpg'
      },
      values: {
        title: 'Our Values',
        subtitle: 'The principles that guide our work and commitment to the future',
        items: [
          {
            title: 'Sustainability',
            description: 'Unwavering commitment to the future of the planet and future generations',
            icon: Leaf,
            color: 'from-green-500 to-green-600',
            ecoIcon: TreePine
          },
          {
            title: 'Innovation',
            description: 'Constant search for disruptive and efficient technological solutions',
            icon: Zap,
            color: 'from-blue-500 to-blue-600',
            ecoIcon: Wind
          },
          {
            title: 'Integrity',
            description: 'We act with transparency, ethics and responsibility in all our actions',
            icon: Shield,
            color: 'from-purple-500 to-purple-600',
            ecoIcon: Mountain
          },
          {
            title: 'Collaboration',
            description: 'We believe in the power of working together to achieve greater impact',
            icon: Users2,
            color: 'from-orange-500 to-orange-600',
            ecoIcon: Sprout
          },
          {
            title: 'Excellence',
            description: 'We seek perfection in every project and service we offer',
            icon: Star,
            color: 'from-yellow-500 to-yellow-600',
            ecoIcon: Sun
          },
          {
            title: 'Resilience',
            description: 'Adaptability and strength to overcome challenges and create lasting solutions',
            icon: Heart,
            color: 'from-red-500 to-red-600',
            ecoIcon: Droplets
          }
        ]
      },
      impact: {
        title: 'Our Environmental Impact',
        subtitle: 'Transforming the present, preserving the future',
        items: [
          {
            title: 'Emissions Reduction',
            description: 'We have helped reduce more than 10,000 tons of CO2',
            icon: Wind,
            metric: '10,000+',
            unit: 'ton CO2'
          },
          {
            title: 'Water Recovered',
            description: 'Systems that have treated and reused millions of liters',
            icon: Droplets,
            metric: '5M+',
            unit: 'liters'
          },
          {
            title: 'Waste Valorized',
            description: 'Transforming waste into valuable resources',
            icon: Leaf,
            metric: '85%',
            unit: 'efficiency'
          }
        ]
      },
      cta: {
        title: 'Ready to join the sustainable transformation?',
        subtitle: 'Let\'s work together to create a cleaner and more prosperous future',
        button: 'Contact Us',
        buttonSecondary: 'See our projects'
      },

    }
  }

  const currentContent = content[language]

  return (
    <motion.main
      key="nosotros"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
    >
      {/* Hero Section - Eco Modern */}
      <div 
        className="relative min-h-[65vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/nosotros-hero.jpg)',
          backgroundSize: '100%',
          backgroundPosition: 'center 60%'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Organic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">

          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
          >
            {currentContent.pageTitle}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            {currentContent.pageSubtitle}
          </motion.p>
          

        </div>
      </div>

      {/* Vision Section - Eco Modern */}
      <div className="px-4 sm:px-6 lg:px-8 mb-24" ref={visionRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-gradient-to-br from-emerald-600 to-green-700 text-white p-10 rounded-3xl shadow-2xl">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                      <Eye className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl font-bold">{currentContent.vision.title}</h2>
                  </div>
                  <p className="text-xl leading-relaxed text-emerald-50">
                    {currentContent.vision.description}
                  </p>
                  
                  {/* Eco Accent */}
                  <div className="mt-8 flex items-center space-x-4">
                    <div className="w-2 h-2 bg-emerald-200 rounded-full animate-pulse"></div>
                    <span className="text-emerald-100 text-sm">Visión Sostenible</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={visionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full opacity-60 blur-xl"></div>
                <img
                  src={currentContent.vision.image}
                  alt="Visión de SAISA"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent rounded-3xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Section - Eco Modern */}
      <div className="px-4 sm:px-6 lg:px-8 mb-24" ref={missionRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={missionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full opacity-60 blur-xl"></div>
                <img
                  src={currentContent.mission.image}
                  alt="Misión de SAISA"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent rounded-3xl"></div>
              </motion.div>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl transform -rotate-2"></div>
                <div className="relative bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-10 rounded-3xl shadow-2xl">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                      <Target className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl font-bold">{currentContent.mission.title}</h2>
                  </div>
                  <p className="text-xl leading-relaxed text-teal-50">
                    {currentContent.mission.description}
                  </p>
                  
                  {/* Eco Accent */}
                  <div className="mt-8 flex items-center space-x-4">
                    <div className="w-2 h-2 bg-teal-200 rounded-full animate-pulse"></div>
                    <span className="text-teal-100 text-sm">Misión Transformadora</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section - Eco Modern */}
      <div className="px-4 sm:px-6 lg:px-8 mb-24" ref={valuesRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
              <Heart className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Principios Fundamentales</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {currentContent.values.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.values.subtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.values.items.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${value.color} text-white flex items-center justify-center rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                    
                    {/* Eco Icon */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <value.ecoIcon className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Eco Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact Section - New */}
      <div className="px-4 sm:px-6 lg:px-8 mb-24" ref={impactRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
              <Globe className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Impacto Medible</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {currentContent.impact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.impact.subtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.impact.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-10 h-10 text-emerald-600" />
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-emerald-600 mb-1">
                        {item.metric}
                      </div>
                      <div className="text-sm text-emerald-500 font-medium">
                        {item.unit}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </motion.main>
  )
}

export default NosotrosPage 
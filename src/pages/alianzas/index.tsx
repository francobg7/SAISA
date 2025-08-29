import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '../../components/ui'
import { useLanguage } from '../../contexts/LanguageContext'
import { alliances } from '../../data/companyData'

const AlianzasPage: React.FC = () => {
  const { language } = useLanguage()

  const [alliancesRef, alliancesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const content = {
    es: {
      pageTitle: 'Nuestras Alianzas',
      pageSubtitle: 'Colaboramos con organizaciones líderes para amplificar nuestro impacto ambiental y crear soluciones más efectivas.',
      alliancesTitle: 'Alianzas Estratégicas',
      alliancesSubtitle: 'Nuestras colaboraciones abarcan sectores gubernamentales, privados, ONGs y académicos.',
      types: {
        title: 'Tipos de Alianzas',
        subtitle: 'Diversificamos nuestras colaboraciones para maximizar el impacto.',
        government: {
          title: 'Gobierno',
          description: 'Colaboración con entidades públicas para políticas ambientales',
          icon: '🏛️'
        },
        private: {
          title: 'Sector Privado',
          description: 'Alianzas con empresas para innovación sostenible',
          icon: '🏢'
        },
        ngo: {
          title: 'ONGs',
          description: 'Trabajo conjunto con organizaciones no gubernamentales',
          icon: '🤝'
        },
        academic: {
          title: 'Academia',
          description: 'Investigación y desarrollo con instituciones educativas',
          icon: '🎓'
        }
      },
      benefits: {
        title: 'Beneficios de Nuestras Alianzas',
        subtitle: 'Crear valor compartido a través de la colaboración estratégica.',
        items: [
          {
            title: 'Innovación Acelerada',
            description: 'Combinamos recursos y conocimientos para resultados más rápidos',
            icon: '⚡'
          },
          {
            title: 'Alcance Ampliado',
            description: 'Llegamos a más comunidades y sectores',
            icon: '🌍'
          },
          {
            title: 'Recursos Compartidos',
            description: 'Optimizamos costos y maximizamos eficiencia',
            icon: '💰'
          },
          {
            title: 'Impacto Sostenible',
            description: 'Soluciones que perduran en el tiempo',
            icon: '♻️'
          }
        ]
      },
      cta: {
        title: '¿Interesado en colaborar con nosotros?',
        subtitle: 'Conversemos sobre cómo podemos crear valor juntos.',
        button: 'Proponer Alianza'
      }
    },
    en: {
      pageTitle: 'Our Alliances',
      pageSubtitle: 'We collaborate with leading organizations to amplify our environmental impact and create more effective solutions.',
      alliancesTitle: 'Strategic Alliances',
      alliancesSubtitle: 'Our collaborations span government, private, NGO and academic sectors.',
      types: {
        title: 'Types of Alliances',
        subtitle: 'We diversify our collaborations to maximize impact.',
        government: {
          title: 'Government',
          description: 'Collaboration with public entities for environmental policies',
          icon: '🏛️'
        },
        private: {
          title: 'Private Sector',
          description: 'Alliances with companies for sustainable innovation',
          icon: '🏢'
        },
        ngo: {
          title: 'NGOs',
          description: 'Joint work with non-governmental organizations',
          icon: '🤝'
        },
        academic: {
          title: 'Academia',
          description: 'Research and development with educational institutions',
          icon: '🎓'
        }
      },
      benefits: {
        title: 'Benefits of Our Alliances',
        subtitle: 'Creating shared value through strategic collaboration.',
        items: [
          {
            title: 'Accelerated Innovation',
            description: 'We combine resources and knowledge for faster results',
            icon: '⚡'
          },
          {
            title: 'Expanded Reach',
            description: 'We reach more communities and sectors',
            icon: '🌍'
          },
          {
            title: 'Shared Resources',
            description: 'We optimize costs and maximize efficiency',
            icon: '💰'
          },
          {
            title: 'Sustainable Impact',
            description: 'Solutions that last over time',
            icon: '♻️'
          }
        ]
      },
      cta: {
        title: 'Interested in collaborating with us?',
        subtitle: 'Let\'s talk about how we can create value together.',
        button: 'Propose Alliance'
      }
    }
  }

  const currentContent = content[language]

  const allianceTypes = [
    { type: 'government', ...currentContent.types.government },
    { type: 'private', ...currentContent.types.private },
    { type: 'ngo', ...currentContent.types.ngo },
    { type: 'academic', ...currentContent.types.academic }
  ]

  return (
    <motion.main
      key="alianzas"
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

      {/* Alliances Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16" ref={alliancesRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={alliancesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.alliancesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.alliancesSubtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alliances.map((alliance, index) => (
              <Card key={alliance.id} animate delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {alliance.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {alliance.description[language]}
                  </p>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                    {alliance.type}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Alliance Types Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.types.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.types.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allianceTypes.map((type, index) => (
              <Card key={index} animate delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {type.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.benefits.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.benefits.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.benefits.items.map((benefit, index) => (
              <Card key={index} animate delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
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

export default AlianzasPage 
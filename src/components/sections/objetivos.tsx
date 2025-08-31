import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

interface Sector {
  id: number;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  image: string;
  details: {
    es: string[];
    en: string[];
  };
}

const sectores: Sector[] = [
  {
    id: 1,
    title: {
      es: "Empresas e Industrias",
      en: "Companies and Industries"
    },
    description: {
      es: "Soluciones para externalidades ambientales",
      en: "Solutions for environmental externalities"
    },
    image: "/objetivos/agro-industria.jpg",
    details: {
      es: [
        "Sectores con alta generación de residuos o emisiones: minería, agroindustria, manufactura, energía, construcción, producción agroindustrial, aserraderos",
        "Corporaciones transnacionales y empresas que necesitan cumplir normativas ambientales específicas y exigentes",
        "Empresas que requieran mejorar su reputación corporativa (compliance, ESG y RSE)"
      ],
      en: [
        "Sectors with high waste generation or emissions: mining, agribusiness, manufacturing, energy, construction, agribusiness production, sawmills",
        "Transnational corporations and companies that need to comply with specific and demanding environmental regulations",
        "Companies that require improving their corporate reputation (compliance, ESG and CSR)"
      ]
    }
  },
  {
    id: 2,
    title: {
      es: "Gobiernos y Entidades Públicas",
      en: "Governments and Public Entities"
    },
    description: {
      es: "Soluciones integrales para gestión ambiental",
      en: "Comprehensive solutions for environmental management"
    },
    image: "/objetivos/gobiernos-entidades.jpg",
    details: {
      es: [
        "Ministerios y secretarías de ambiente o energía",
        "Municipios y gobiernos regionales que busquen dar solución integral a la gestión de residuos",
        "Entidades que requieran restaurar el medio ambiental o mitigar el cambio climático"
      ],
      en: [
        "Ministries and secretariats of environment or energy",
        "Municipalities and regional governments seeking comprehensive solutions for waste management",
        "Entities that require environmental restoration or climate change mitigation"
      ]
    }
  },
  {
    id: 3,
    title: {
      es: "Organismos Internacionales y ONGs",
      en: "International Organizations and NGOs"
    },
    description: {
      es: "Financiamiento e implementación de proyectos sostenibles",
      en: "Financing and implementation of sustainable projects"
    },
    image: "/objetivos/organismos-ongs.jpg",
    details: {
      es: [
        "Instituciones multilaterales (Banco Mundial, BID, PNUD, ONUDI, etc.) que financian proyectos de sostenibilidad",
        "Organizaciones que requieran implementar soluciones integrales en países en vías de desarrollo",
        "Organizaciones sin fines de lucro con programas de mitigación de carbono, restauración de ecosistemas y desarrollo comunitario"
      ],
      en: [
        "Multilateral institutions (World Bank, IDB, UNDP, UNIDO, etc.) that finance sustainability projects",
        "Organizations that require implementing comprehensive solutions in developing countries",
        "Non-profit organizations with carbon mitigation, ecosystem restoration and community development programs"
      ]
    }
  },
  {
    id: 4,
    title: {
      es: "Inversionistas Verdes y Fondos de Impacto",
      en: "Green Investors and Impact Funds"
    },
    description: {
      es: "Inversión en tecnologías sostenibles",
      en: "Investment in sustainable technologies"
    },
    image: "/objetivos/inversionistas-verdes.jpg",
    details: {
      es: [
        "Fondos de inversión en energías limpias, tecnologías sostenibles y proyectos de economía circular",
        "Empresas certificadas B Corp o con compromisos ESG (Ambientales, Sociales y de Gobernanza)"
      ],
      en: [
        "Investment funds in clean energy, sustainable technologies and circular economy projects",
        "B Corp certified companies or with ESG commitments (Environmental, Social and Governance)"
      ]
    }
  },
  {
    id: 5,
    title: {
      es: "Comunidades y Asociaciones Locales",
      en: "Local Communities and Associations"
    },
    description: {
      es: "Tecnologías limpias para desarrollo comunitario",
      en: "Clean technologies for community development"
    },
    image: "/objetivos/comunidades-asociaciones.jpg",
    details: {
      es: [
        "Cooperativas, asociaciones de productores y comunidades rurales",
        "Interesadas en tecnologías limpias que generen valor económico y regeneren su entorno",
        "Permiten solucionar los problemas de saneamiento y gestión de residuos"
      ],
      en: [
        "Cooperatives, producer associations and rural communities",
        "Interested in clean technologies that generate economic value and regenerate their environment",
        "Allow solving sanitation and waste management problems"
      ]
    }
  }
];

const Objetivos: React.FC = () => {
  const { language } = useLanguage();
  const [currentSector, setCurrentSector] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Contenido bilingüe para textos estáticos
  const content = {
    es: {
      sectionTitle: "Objetivos",
      navigate: "Navegar",
      skip: "Saltar",
      previousSector: "Sector anterior",
      nextSector: "Sector siguiente",
      goToSector: "Ir al sector"
    },
    en: {
      sectionTitle: "Objectives",
      navigate: "Navigate",
      skip: "Skip",
      previousSector: "Previous sector",
      nextSector: "Next sector",
      goToSector: "Go to sector"
    }
  };

  const currentContent = content[language];

  const nextSector = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSector((prev) => (prev + 1) % sectores.length);
    }
  };

  const prevSector = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSector((prev) => (prev - 1 + sectores.length) % sectores.length);
    }
  };

  const goToSector = (index: number) => {
    if (!isTransitioning && index !== currentSector) {
      setIsTransitioning(true);
      setCurrentSector(index);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSector();
      } else if (event.key === 'ArrowRight') {
        nextSector();
      } else if (event.key >= '1' && event.key <= '5') {
        const sectorIndex = parseInt(event.key) - 1;
        if (sectorIndex < sectores.length) {
          goToSector(sectorIndex);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSector]);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Navegación principal */}
      <div className="absolute top-1/2 left-8 z-20 transform -translate-y-1/2">
        <button
          onClick={prevSector}
          disabled={isTransitioning}
          className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 disabled:opacity-50 hover:scale-110"
          aria-label={currentContent.previousSector}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-8 z-20 transform -translate-y-1/2">
        <button
          onClick={nextSector}
          disabled={isTransitioning}
          className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 disabled:opacity-50 hover:scale-110"
          aria-label={currentContent.nextSector}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Puntos de navegación */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {sectores.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSector(index)}
            disabled={isTransitioning}
            className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSector
                ? 'bg-white scale-125 shadow-lg shadow-white/50'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`${currentContent.goToSector} ${index + 1}`}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSector}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative h-full"
        >
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <img
              src={sectores[currentSector].image}
              alt={sectores[currentSector].title[language]}
              className="w-full h-full object-cover"
            />
            {/* Overlay con degradado mejorado */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>

          {/* Contenido superpuesto */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-5xl mx-auto px-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-shadow-lg">
                  {currentContent.sectionTitle}
                </h1>
              </motion.div>

              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
              >
                {sectores[currentSector].title[language]}
              </motion.h2>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-200 mb-12 text-shadow"
              >
                {sectores[currentSector].description[language]}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-4 max-w-4xl mx-auto"
              >
                {sectores[currentSector].details[language].map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <p className="text-lg text-white/90 leading-relaxed">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Objetivos;

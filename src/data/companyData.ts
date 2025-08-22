import { CompanyInfo, Service, Project, Alliance, NavigationItem, SocialLink } from '../types'

export const companyInfo: CompanyInfo = {
  name: 'SAISA – Servicios Ambientales Integrales S.A.',
  founded: '26 de mayo de 2022',
  location: 'R.I 4 Curupayty 639, Paraguay',
  whatsapp: '+595 984 774091',
  email: 'info@saisa.com.py',
  description: {
    es: 'Empresa pionera en innovación y aplicación de tecnologías sostenibles, bajas en carbono y orientadas a la economía circular. Transforma fuentes de contaminación en activos ambientales con valor de mercado, mediante ciencia, ingeniería y compromiso con el planeta.',
    en: 'Pioneering company in innovation and application of sustainable technologies, low-carbon and oriented towards the circular economy. Transforms sources of pollution into environmental assets with market value, through science, engineering and commitment to the planet.'
  },
  vision: {
    es: 'Ser el referente latinoamericano en innovación ambiental y tecnologías sostenibles, liderando el cambio hacia un continente más limpio.',
    en: 'To be the Latin American reference in environmental innovation and sustainable technologies, leading the change towards a cleaner continent.'
  },
  mission: {
    es: 'Motor de transformación sostenible en Latinoamérica, creando valor ambiental, social y económico mediante tecnologías limpias e innovadoras.',
    en: 'Engine of sustainable transformation in Latin America, creating environmental, social and economic value through clean and innovative technologies.'
  },
  values: {
    es: ['Sostenibilidad', 'Innovación', 'Integridad', 'Colaboración', 'Excelencia', 'Resiliencia'],
    en: ['Sustainability', 'Innovation', 'Integrity', 'Collaboration', 'Excellence', 'Resilience']
  }
}

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: { es: 'Inicio', en: 'Home' }, href: '#home' },
  { id: 'about', label: { es: 'Nosotros', en: 'About' }, href: '#about' },
  { id: 'services', label: { es: 'Servicios', en: 'Services' }, href: '#services' },
  { id: 'projects', label: { es: 'Proyectos', en: 'Projects' }, href: '#projects' },
  { id: 'alliances', label: { es: 'Alianzas', en: 'Alliances' }, href: '#alliances' },
  { id: 'contact', label: { es: 'Contacto', en: 'Contact' }, href: '#contact' }
]

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/saisa', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/saisa', icon: 'twitter' },
  { name: 'Facebook', url: 'https://facebook.com/saisa', icon: 'facebook' },
  { name: 'Instagram', url: 'https://instagram.com/saisa', icon: 'instagram' }
]

export const services: Service[] = [
  {
    id: 'waste-management',
    title: {
      es: 'Gestión Integral de Residuos',
      en: 'Integrated Waste Management'
    },
    description: {
      es: 'Soluciones completas para la gestión, tratamiento y valorización de residuos industriales y urbanos.',
      en: 'Complete solutions for the management, treatment and valorization of industrial and urban waste.'
    },
    icon: 'recycle',
    features: {
      es: [
        'Clasificación y separación inteligente',
        'Tratamiento biológico avanzado',
        'Valorización energética',
        'Reducción de huella de carbono'
      ],
      en: [
        'Smart classification and separation',
        'Advanced biological treatment',
        'Energy valorization',
        'Carbon footprint reduction'
      ]
    },
    color: 'primary'
  },
  {
    id: 'water-treatment',
    title: {
      es: 'Tratamiento de Aguas',
      en: 'Water Treatment'
    },
    description: {
      es: 'Tecnologías innovadoras para el tratamiento y reutilización de aguas residuales y contaminadas.',
      en: 'Innovative technologies for the treatment and reuse of wastewater and contaminated water.'
    },
    icon: 'droplets',
    features: {
      es: [
        'Filtración avanzada',
        'Desinfección UV',
        'Reutilización industrial',
        'Monitoreo en tiempo real'
      ],
      en: [
        'Advanced filtration',
        'UV disinfection',
        'Industrial reuse',
        'Real-time monitoring'
      ]
    },
    color: 'secondary'
  },
  {
    id: 'air-quality',
    title: {
      es: 'Calidad del Aire',
      en: 'Air Quality'
    },
    description: {
      es: 'Sistemas de monitoreo y control de emisiones atmosféricas para industrias y ciudades.',
      en: 'Air emission monitoring and control systems for industries and cities.'
    },
    icon: 'wind',
    features: {
      es: [
        'Monitoreo continuo',
        'Filtros HEPA avanzados',
        'Reducción de partículas',
        'Cumplimiento normativo'
      ],
      en: [
        'Continuous monitoring',
        'Advanced HEPA filters',
        'Particle reduction',
        'Regulatory compliance'
      ]
    },
    color: 'accent'
  },
  {
    id: 'circular-economy',
    title: {
      es: 'Economía Circular',
      en: 'Circular Economy'
    },
    description: {
      es: 'Implementación de modelos de negocio circulares y desarrollo de cadenas de valor sostenibles.',
      en: 'Implementation of circular business models and development of sustainable value chains.'
    },
    icon: 'refresh-cw',
    features: {
      es: [
        'Diseño de productos circulares',
        'Recuperación de materiales',
        'Nuevos modelos de negocio',
        'Certificaciones ambientales'
      ],
      en: [
        'Circular product design',
        'Material recovery',
        'New business models',
        'Environmental certifications'
      ]
    },
    color: 'primary'
  }
]

export const projects: Project[] = [
  {
    id: 'waste-management-paraguay',
    title: {
      es: 'Gestión Integral de Residuos - Paraguay',
      en: 'Integrated Waste Management - Paraguay'
    },
    description: {
      es: 'Proyecto piloto para la gestión integrada de residuos industriales en el área metropolitana de Asunción.',
      en: 'Pilot project for integrated industrial waste management in the metropolitan area of Asunción.'
    },
    image: '/images/projects/industrial-waste.jpg',
    category: {
      es: 'Gestión de Residuos',
      en: 'Waste Management'
    },
    impact: {
      es: 'Reducción del 60% en residuos enviados a vertederos',
      en: '60% reduction in waste sent to landfills'
    },
    year: 2023,
    color: 'from-green-500 to-green-600',
    stats: {
      impact: '60%',
      duration: '6 meses'
    },
    objective: {
      es: 'Implementar un sistema integral de gestión de residuos industriales para reducir el impacto ambiental',
      en: 'Implement an integrated industrial waste management system to reduce environmental impact'
    },
    results: {
      es: 'Reducción significativa de residuos enviados a vertederos y mejora en la eficiencia del reciclaje',
      en: 'Significant reduction in waste sent to landfills and improvement in recycling efficiency'
    },
    technologies: ['IoT Sensors', 'AI Analytics', 'Recycling Systems', 'Waste Tracking']
  },
  {
    id: 'water-reuse-argentina',
    title: {
      es: 'Reutilización de Aguas - Argentina',
      en: 'Water Reuse - Argentina'
    },
    description: {
      es: 'Sistema de tratamiento y reutilización de aguas residuales para riego agrícola en Mendoza.',
      en: 'Wastewater treatment and reuse system for agricultural irrigation in Mendoza.'
    },
    image: '/images/projects/water-reuse.jpg',
    category: {
      es: 'Tratamiento de Aguas',
      en: 'Water Treatment'
    },
    impact: {
      es: 'Ahorro del 40% en consumo de agua potable',
      en: '40% savings in drinking water consumption'
    },
    year: 2023,
    color: 'from-blue-500 to-blue-600',
    stats: {
      impact: '40%',
      duration: '8 meses'
    },
    objective: {
      es: 'Desarrollar un sistema sostenible de reutilización de aguas para agricultura',
      en: 'Develop a sustainable water reuse system for agriculture'
    },
    results: {
      es: 'Ahorro significativo de agua potable y mejora en la productividad agrícola',
      en: 'Significant savings in drinking water and improvement in agricultural productivity'
    },
    technologies: ['Water Filtration', 'UV Treatment', 'Smart Irrigation', 'Water Quality Monitoring']
  },
  {
    id: 'air-quality-chile',
    title: {
      es: 'Monitoreo de Calidad del Aire - Chile',
      en: 'Air Quality Monitoring - Chile'
    },
    description: {
      es: 'Red de sensores para el monitoreo de calidad del aire en Santiago de Chile.',
      en: 'Sensor network for air quality monitoring in Santiago de Chile.'
    },
    image: '/images/projects/air-quality.jpg',
    category: {
      es: 'Calidad del Aire',
      en: 'Air Quality'
    },
    impact: {
      es: 'Monitoreo en tiempo real de 15 parámetros',
      en: 'Real-time monitoring of 15 parameters'
    },
    year: 2024,
    color: 'from-purple-500 to-purple-600',
    stats: {
      impact: '15+',
      duration: '12 meses'
    },
    objective: {
      es: 'Crear una red de monitoreo de calidad del aire para mejorar la salud pública',
      en: 'Create an air quality monitoring network to improve public health'
    },
    results: {
      es: 'Sistema de alertas tempranas y datos en tiempo real para la toma de decisiones',
      en: 'Early warning system and real-time data for decision making'
    },
    technologies: ['Air Quality Sensors', 'Data Analytics', 'Mobile App', 'Cloud Platform']
  }
]

export const alliances: Alliance[] = [
  {
    id: 'minambiente-paraguay',
    name: 'Ministerio del Ambiente - Paraguay',
    logo: '/images/alliances/minambiente.png',
    description: {
      es: 'Alianza estratégica para el desarrollo de políticas ambientales y proyectos de sostenibilidad.',
      en: 'Strategic alliance for the development of environmental policies and sustainability projects.'
    },
    type: 'government'
  },
  {
    id: 'universidad-nacional',
    name: 'Universidad Nacional de Asunción',
    logo: '/images/alliances/una.png',
    description: {
      es: 'Colaboración en investigación y desarrollo de tecnologías ambientales innovadoras.',
      en: 'Collaboration in research and development of innovative environmental technologies.'
    },
    type: 'academic'
  },
  {
    id: 'wwf-paraguay',
    name: 'WWF Paraguay',
    logo: '/images/alliances/wwf.png',
    description: {
      es: 'Partnership para la conservación de la biodiversidad y desarrollo sostenible.',
      en: 'Partnership for biodiversity conservation and sustainable development.'
    },
    type: 'ngo'
  },
  {
    id: 'banco-mundial',
    name: 'Banco Mundial',
    logo: '/images/alliances/world-bank.png',
    description: {
      es: 'Financiamiento para proyectos de infraestructura verde y sostenibilidad.',
      en: 'Financing for green infrastructure and sustainability projects.'
    },
    type: 'government'
  }
]

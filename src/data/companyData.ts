import { CompanyInfo, Project, NavigationItem, SocialLink } from '../types'

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

}

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: { es: 'Inicio', en: 'Home' }, href: '#home' },
  { id: 'about', label: { es: 'Nosotros', en: 'About' }, href: '#about' },
  { id: 'projects', label: { es: 'Proyectos', en: 'Projects' }, href: '#projects' },
  { id: 'contact', label: { es: 'Contacto', en: 'Contact' }, href: '#contact' }
]

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/saisa', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/saisa', icon: 'twitter' },
  { name: 'Facebook', url: 'https://facebook.com/saisa', icon: 'facebook' },
  { name: 'Instagram', url: 'https://instagram.com/saisa', icon: 'instagram' }
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
    image: '/Proyectos/proyecto01.jpg',
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
    image: '/Proyectos/proyecto02.jpg',
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
    image: '/Proyectos/proyecto03.jpg',
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



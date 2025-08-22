export type Language = 'es' | 'en'

export interface Service {
  id: string
  title: {
    es: string
    en: string
  }
  description: {
    es: string
    en: string
  }
  icon: string
  features: {
    es: string[]
    en: string[]
  }
  color: string
}

export interface Project {
  id: string
  title: {
    es: string
    en: string
  }
  description: {
    es: string
    en: string
  }
  image: string
  category: {
    es: string
    en: string
  }
  impact: {
    es: string
    en: string
  }
  year: number
}

export interface Alliance {
  id: string
  name: string
  logo: string
  description: {
    es: string
    en: string
  }
  type: 'government' | 'private' | 'ngo' | 'academic'
}

export interface ContactForm {
  name: string
  email: string
  company: string
  message: string
  service: string
}

export interface NavigationItem {
  id: string
  label: {
    es: string
    en: string
  }
  href: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface CompanyInfo {
  name: string
  founded: string
  location: string
  whatsapp: string
  email: string
  description: {
    es: string
    en: string
  }
  vision: {
    es: string
    en: string
  }
  mission: {
    es: string
    en: string
  }
  values: {
    es: string[]
    en: string[]
  }
}

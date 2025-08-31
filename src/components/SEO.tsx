import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  language?: 'es' | 'en'
}

const SEO: React.FC<SEOProps> = ({
  title = 'SAISA - Servicios Ambientales Integrales S.A.',
  description = 'SAISA - Empresa pionera en innovación y aplicación de tecnologías sostenibles, bajas en carbono y orientadas a la economía circular.',
  keywords = 'saisa, sostenibilidad, tecnología ambiental, economía circular, paraguay, medio ambiente',
  image = '/og-image.jpg',
  url = 'https://saisa.com.py',
  type = 'website',
  language = 'es'
}) => {
  useEffect(() => {
    // Actualizar título de la página
    document.title = title
    
    // Actualizar meta tags dinámicamente
    updateMetaTag('name', 'description', description)
    updateMetaTag('name', 'keywords', keywords)
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:image', image)
    updateMetaTag('property', 'og:url', url)
    updateMetaTag('property', 'og:type', type)
    updateMetaTag('name', 'twitter:title', title)
    updateMetaTag('name', 'twitter:description', description)
    updateMetaTag('name', 'twitter:image', image)
    
    // Actualizar idioma
    document.documentElement.lang = language
    
  }, [title, description, keywords, image, url, type, language])

  const updateMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
    let meta = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement
    
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attr, value)
      document.head.appendChild(meta)
    }
    
    meta.setAttribute('content', content)
  }

  return null // Este componente no renderiza nada en el DOM
}

export default SEO

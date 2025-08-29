// Configuración de Google Maps
export const GOOGLE_MAPS_CONFIG = {
  // IMPORTANTE: Reemplaza 'YOUR_GOOGLE_MAPS_API_KEY' con tu API key real
  // Obtén tu API key en: https://console.cloud.google.com/apis/credentials
  API_KEY: 'YOUR_GOOGLE_MAPS_API_KEY',
  
  // Coordenadas de SAISA en Paraguay
  SAISA_LOCATION: {
    lat: -25.2637, // Latitud de Asunción
    lng: -57.5759, // Longitud de Asunción
    address: 'R.I 4 Curupayty 639, Paraguay'
  },
  
  // Configuración del mapa
  MAP_CONFIG: {
    zoom: 14,
    height: '400px',
    markerTitle: 'SAISA - Servicios Ambientales Integrales'
  }
}

// Función para obtener la API key (permite usar variables de entorno)
export const getGoogleMapsApiKey = (): string => {
  // En producción, usa variables de entorno
  const envApiKey = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY
  
  if (envApiKey) {
    return envApiKey
  }
  
  // Fallback a la configuración local
  return GOOGLE_MAPS_CONFIG.API_KEY
} 
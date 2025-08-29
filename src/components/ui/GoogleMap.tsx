import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { getGoogleMapsApiKey } from '../../config/googleMaps'

interface GoogleMapProps {
  center: { lat: number; lng: number }
  zoom?: number
  className?: string
  height?: string
  markerTitle?: string
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  center,
  zoom = 15,
  className = '',
  height = '400px',
  markerTitle = 'Ubicación'
}) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: getGoogleMapsApiKey(),
        version: 'weekly',
        libraries: ['places']
      })

      try {
        const google = await loader.load()
        
        if (mapRef.current && !mapInstanceRef.current) {
          const map = new google.maps.Map(mapRef.current, {
            center,
            zoom,
            styles: [
              {
                featureType: 'all',
                elementType: 'geometry',
                stylers: [{ color: '#f5f5f5' }]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#c9c9c9' }]
              },
              {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{ color: '#f5f5f5' }]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#f5f5f5' }]
              }
            ]
          })

          // Agregar marcador
          new google.maps.Marker({
            position: center,
            map,
            title: markerTitle,
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#22c55e"/>
                  <circle cx="16" cy="16" r="8" fill="white"/>
                  <circle cx="16" cy="16" r="4" fill="#22c55e"/>
                </svg>
              `),
              scaledSize: new google.maps.Size(32, 32),
              anchor: new google.maps.Point(16, 16)
            }
          })

          mapInstanceRef.current = map
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error)
      }
    }

    initMap()
  }, [center, zoom, markerTitle])

  return (
    <div 
      ref={mapRef} 
      className={`w-full rounded-xl overflow-hidden shadow-lg ${className}`}
      style={{ height }}
    />
  )
}

export default GoogleMap 
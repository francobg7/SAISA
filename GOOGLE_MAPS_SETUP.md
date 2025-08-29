# 🗺️ Configuración de Google Maps para SAISA

## 📋 **Pasos para Configurar Google Maps**

### **1. Obtener API Key de Google Maps**

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la **Maps JavaScript API**
4. Ve a **Credentials** (Credenciales)
5. Crea una nueva **API Key**
6. Copia la API key generada

### **2. Configurar la API Key**

#### **Opción A: Variables de Entorno (Recomendado)**
Crea un archivo `.env` en la raíz del proyecto:

```bash
# .env
VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
```

#### **Opción B: Configuración Directa**
Edita `src/config/googleMaps.ts`:

```typescript
export const GOOGLE_MAPS_CONFIG = {
  API_KEY: 'tu_api_key_aqui', // ← Reemplaza esto
  // ... resto de la configuración
}
```

### **3. Restricciones de la API Key (Opcional pero Recomendado)**

En Google Cloud Console, restringe tu API key:
- **Application restrictions**: HTTP referrers
- **API restrictions**: Solo Maps JavaScript API

### **4. Verificar la Configuración**

1. Ejecuta `npm run dev`
2. Ve a la página de contacto
3. Deberías ver el mapa de Google Maps

## ⚠️ **Importante**

- **NUNCA** subas tu API key a Git
- Usa variables de entorno en producción
- La API key tiene un límite de uso gratuito mensual

## 🔧 **Solución de Problemas**

### **Mapa no se muestra**
- Verifica que la API key sea correcta
- Revisa la consola del navegador para errores
- Asegúrate de que Maps JavaScript API esté habilitada

### **Error de cuota excedida**
- Verifica el uso en Google Cloud Console
- Considera habilitar facturación para mayor uso

## 📍 **Coordenadas de SAISA**

- **Latitud**: -25.2637
- **Longitud**: -57.5759
- **Dirección**: R.I 4 Curupayty 639, Paraguay

---

**¡Con estos pasos tendrás Google Maps funcionando en tu página de contacto! 🎯** 
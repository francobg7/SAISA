#!/bin/bash

echo "🚀 Iniciando build optimizado para producción..."

# Limpiar build anterior
echo "🧹 Limpiando build anterior..."
rm -rf dist/

# Verificar dependencias
echo "📦 Verificando dependencias..."
npm ci --only=production

# Build de producción
echo "🔨 Construyendo aplicación..."
npm run build

# Verificar tamaño del build
echo "📊 Analizando tamaño del build..."
du -sh dist/
du -sh dist/assets/

# Verificar archivos generados
echo "📁 Archivos generados:"
ls -la dist/

echo "✅ Build completado exitosamente!"
echo "🎯 Tu proyecto está listo para deploy en Vercel"

# Comportamiento de Scroll en SAISA

## Descripción

Se ha implementado una funcionalidad para que el scroll siempre esté en la parte superior cuando se navegue entre páginas en la aplicación SAISA.

## Implementación

### 1. Hook Personalizado: `useScrollToTop`

Se creó un hook personalizado en `src/hooks/useScrollToTop.ts` que:

- Detecta cambios en las dependencias (como la página actual)
- Hace scroll hacia arriba automáticamente cuando cambia la página
- Incluye una función manual `scrollToTop()` para uso programático
- Evita hacer scroll en el primer render para mejor UX

### 2. Contexto de Navegación Mejorado

El `NavigationContext` en `src/contexts/NavigationContext.tsx` fue optimizado para:

- Manejar la navegación entre páginas de manera eficiente
- Evitar navegaciones innecesarias a la misma página
- Mantener un historial de páginas para la funcionalidad de "volver atrás"

### 3. Integración en App.tsx

El componente principal `App.tsx` ahora:

- Utiliza el hook `useScrollToTop` con la página actual como dependencia
- Asegura que el scroll se maneje de manera consistente en toda la aplicación

## Cómo Funciona

1. **Navegación**: Cuando el usuario hace clic en un enlace de navegación
2. **Cambio de Estado**: Se actualiza `currentPage` en el contexto
3. **Detección**: El hook `useScrollToTop` detecta el cambio
4. **Scroll Automático**: Se ejecuta `window.scrollTo({ top: 0, behavior: 'smooth' })`
5. **Resultado**: La nueva página se muestra con el scroll en la parte superior

## Características

- ✅ Scroll suave hacia arriba (smooth scrolling)
- ✅ Funciona con todas las páginas (Home, Nosotros, Proyectos, Contacto)
- ✅ Compatible con las animaciones de Framer Motion
- ✅ No interfiere con el scroll dentro de las páginas
- ✅ Funciona tanto en navegación hacia adelante como hacia atrás

## Archivos Modificados

- `src/contexts/NavigationContext.tsx` - Contexto de navegación optimizado
- `src/hooks/useScrollToTop.ts` - Hook personalizado para scroll
- `src/hooks/index.ts` - Exportaciones de hooks
- `src/App.tsx` - Integración del hook de scroll
- `src/pages/nosotros/index.tsx` - Limpieza de imports no utilizados

## Uso

El scroll hacia arriba es completamente automático. No se requiere configuración adicional. Simplemente:

1. Navega entre páginas usando el menú del header
2. El scroll se moverá automáticamente hacia arriba
3. Las transiciones serán suaves y naturales

## Compatibilidad

- ✅ React 18+
- ✅ TypeScript
- ✅ Framer Motion
- ✅ Navegadores modernos (soporte para `scrollTo` con `behavior: 'smooth'`)

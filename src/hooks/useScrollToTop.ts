import { useEffect, useRef } from 'react'

export const useScrollToTop = (dependencies: any[] = []) => {
  const isFirstRender = useRef(true)

  useEffect(() => {
    // No hacer scroll en el primer render
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    // Hacer scroll hacia arriba con una pequeña demora para asegurar que el DOM se haya actualizado
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 150)

    return () => clearTimeout(timer)
  }, dependencies)

  // Función manual para hacer scroll hacia arriba
  const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({
      top: 0,
      behavior
    })
  }

  return { scrollToTop }
}

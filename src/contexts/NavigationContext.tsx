import { createContext, useContext, useState } from 'react'

type Page = 'home' | 'nosotros' | 'proyectos' | 'contacto'

interface NavigationContextType {
  currentPage: Page
  navigateTo: (page: Page) => void
  goBack: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export const useNavigation = () => {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [pageHistory, setPageHistory] = useState<Page[]>(['home'])

  const navigateTo = (page: Page) => {
    // Solo navegar si es una página diferente
    if (page !== currentPage) {
      setPageHistory(prev => [...prev, page])
      setCurrentPage(page)
    }
  }

  const goBack = () => {
    if (pageHistory.length > 1) {
      const newHistory = pageHistory.slice(0, -1)
      const previousPage = newHistory[newHistory.length - 1]
      setPageHistory(newHistory)
      setCurrentPage(previousPage)
    }
  }

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo, goBack }}>
      {children}
    </NavigationContext.Provider>
  )
}

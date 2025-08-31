import { createContext, useContext, useState } from 'react'

type Page = 'home' | 'about' | 'projects' | 'contact'

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
    setPageHistory(prev => [...prev, page])
    setCurrentPage(page)
  }

  const goBack = () => {
    if (pageHistory.length > 1) {
      const newHistory = pageHistory.slice(0, -1)
      setPageHistory(newHistory)
      setCurrentPage(newHistory[newHistory.length - 1])
    }
  }

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo, goBack }}>
      {children}
    </NavigationContext.Provider>
  )
}

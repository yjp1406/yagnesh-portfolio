import { createContext, useContext, useMemo } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }) {
  const theme = 'dark'

  const value = useMemo(
    () => ({ theme, toggle: () => {} }),
    []
  )

  // Force dark mode on the html element
  if (typeof window !== 'undefined') {
    document.documentElement.classList.add('dark')
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

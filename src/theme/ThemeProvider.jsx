import { createContext, useContext, useMemo } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }) {
  const theme = 'dark'

  const value = useMemo(
    () => ({ theme, toggle: () => {} }),
    []
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

import React, { useContext, createContext } from 'react'
import { ThemeProvider as DefaultThemeProvider, ThemeContext as DefaultThemeContext } from 'styled-components'
import usePersistedState from '../utils/usePersistedState'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', 'light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <DefaultThemeProvider theme={theme === 'light' ? light : dark}>{children}</DefaultThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const defaultValues = useContext(DefaultThemeContext)
  return { default: defaultValues, toggleTheme }
}

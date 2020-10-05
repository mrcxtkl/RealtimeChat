import React from 'react'

import { ThemeProvider } from './contexts/Theme'
import { SocketProvider } from './contexts/Socket'

import Redirect from './pages/Redirect'

import GlobalStyles from './styles/global'

const App = () => {
  return (
    <ThemeProvider>
      <SocketProvider>
        <GlobalStyles />
        <Redirect />
      </SocketProvider>
    </ThemeProvider>
  )
}

export default App

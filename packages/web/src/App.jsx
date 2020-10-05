import React from 'react'

import { SocketProvider, useSocket } from './contexts/Socket'

import Chat from './pages/Chat'
import Register from './pages/Register'

const App = () => {
  const { hasSocket } = useSocket()

  return (
    <SocketProvider>
      { hasSocket ? <Chat /> : <Register /> }
    </SocketProvider>
  )
}

export default App

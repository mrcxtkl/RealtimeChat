import React, { useState, createContext, useContext } from 'react'
import io from 'socket.io-client'

const SocketContext = createContext({ socket: null })

export const SocketProvider = ({ children }) => {
  const [ socket, setSocket ] = useState(null)

  async function connect() {
    const newWS = io(process.env.SOCKET_HOST || 'localhost:3333')
    setSocket(newWS)
  }

  return (
    <SocketContext.Provider value={{ hasSocket: !!socket, connect, socket}}>
      {children}
    </SocketContext.Provider>
  )
}
export default SocketContext

export const useSocket = () => useContext(SocketContext)

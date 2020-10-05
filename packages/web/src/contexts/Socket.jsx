import React, { useState, createContext, useContext, useEffect } from 'react'
import io from 'socket.io-client'

const SocketContext = createContext({})

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [username, setUsername] = useState()

  async function connect() {
    const newWS = io(process.env.SOCKET_HOST || 'localhost:3333')
    setSocket(newWS)
  }

  useEffect(() => {
    connect()
  }, [])

  return (
    <SocketContext.Provider value={{ hasSocket: !!socket, connect, socket, setUsername, username }}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = () => useContext(SocketContext)

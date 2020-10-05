import React from 'react'

import { useSocket } from '../../contexts/Socket'

import Chat from '../Chat'
import Register from '../Register'
import Header from '../../components/Header'

const Redirect = () => {
  const { username, socket } = useSocket()

  return (
    <>
    <Header>
    <h1>Socket: {!!socket ? 'On' : 'Off'}</h1>
      { !!username && !!socket ? <Chat /> : <Register /> }
      </Header>
    </>
  )
}

export default Redirect

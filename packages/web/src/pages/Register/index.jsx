import React, { useState } from 'react'

import { useSocket } from '../../contexts/Socket'
const Register = () => {
  const [ localUsername, setLocalUsername ] = useState()
  const { setUsername } = useSocket()

  return (
    <>
      <h1>{!!localUsername ? localUsername : 'Digite seu username'}</h1>
      <input onInput={e => setLocalUsername(e.target.value)} />
      <button onClick={() => setUsername(localUsername)}>Confirmar</button>
    </>
  )
}

export default Register

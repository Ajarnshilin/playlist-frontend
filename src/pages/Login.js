import React, { useState } from 'react'
import styled from 'styled-components'
// import { Provider, useLogin } from '../contexts/LoginContext'
import { fetchLogin } from '../services/fetchData'

const Conatiner = styled.div`

`

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleOnUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handleOnPasswordChange = event => {
    setPassword(event.target.value)
  }
  const handleOnSubmit = async event => {
    if (username !== '' && password !== '') {
      await fetchLogin(username, password).then(response => console.log(response))
    }
  }
  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      handleOnSubmit()
    }
  }
  return (
    <>
    {/* <Provider> */}
      <Conatiner>
        <input type='text' name='username' placeholder='username...' value={username} onChange={handleOnUsernameChange} onKeyDown={handleKeyPress}/>
        <input type='password' name='password' placeholder='Password...' value={password} onChange={handleOnPasswordChange} onKeyDown={handleKeyPress}/>
        <button type='submit' onClick={handleOnSubmit}>Submit</button>
      </Conatiner>
    {/* </Provider> */}
    </>
  )
}

export default Login

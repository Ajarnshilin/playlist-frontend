import React, { useState } from 'react'
import styled from 'styled-components'
// import { Provider, useLogin } from '../contexts/LoginContext'
import { fetchLogin } from '../services/fetchData'

const Conatiner = styled.div`

`

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const handleOnEmailOnChange = (event) => {
    setEmail(event.target.value)
  }
  const handleOnPasswordOnChange = event => {
    setPassword(event.target.value)
  }
  const handleOnSubmit = async event => {
    if (email !== '' && password !== '') {
      await fetchLogin(email, password).then(response => console.log(response))
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
        <input type='text' name='username' placeholder='Email...' value={email} onChange={handleOnEmailOnChange} onKeyDown={handleKeyPress}/>
        <input type='password' name='password' placeholder='Password...' value={password} onChange={handleOnPasswordOnChange} onKeyDown={handleKeyPress}/>
        <button type='submit' onClick={handleOnSubmit}>Submit</button>
      </Conatiner>
    {/* </Provider> */}
    </>
  )
}

export default Login

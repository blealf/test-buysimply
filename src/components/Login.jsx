import { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const LoginWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 198px;
  }
`

const Header = styled.div`
  h2 {
    color: var(--title-font);
    margin: 0;
    padding: 10px;
  }
  p {
    color: var(--main-font);
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start !important;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  label {
    display: block;
    margin: 10px auto 6px -10px;
    font-weight: 500px;
  }
  input {
    height: 30px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #eee;
    padding: 2px 10px;
  }

`

const Red = styled.span`
  color: red;
`

const Remember = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 83%;
  .left {
    margin-right: auto;
  }
`;

const Button = styled.div`
  width: 85%;
  margin-top: 40px;
  button {
    width: 100%;
    padding: 10px;
    color: #fff;
    margin-top: 20px;
    z-index: 99;
  }
  a {
    margin-left: 10px;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [valid, setValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [remember, setRemember] = useState('')

  const url = 'https://api.test-demo.com'

  useEffect(() => {
    setValid(email.length && password.length > 0)
  }, [email, password])

  const handleChange = (e) => {
    const { name, value } = e.target.name
    
    const actions = {
      email: setEmail,
      password: setPassword
    }
    actions[name](value)
  }

  const toggleRemember = () => {
    setRemember(!remember)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    if (!valid) {
      setErrorMessage('login credentials are not valid')
      return
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email, password
        })
      })
      const responseData = await response.json()
      console.log(responseData)
      window.open('https://google.com')
      
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <LoginWrapper>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <Header>
        <h2>Welcome Back</h2>
        <p>Enter your email address and password to access your account</p>
      </Header>
      <Field>
        <label htmlFor="email">Email Address <Red>*</Red></label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          required 
        />
      </Field>
      <Field>
        <label htmlFor="email">Password <Red>*</Red></label>
        <input type="text" 
          name="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={handleChange} 
          required 
        />
      </Field>
      <Remember>
        <div className="left">
          <input type="checkbox" name="remember" id="remember" onChange={toggleRemember} />
          Remember me
        </div>
        <div>
          <a href="">forgot Password?</a>
        </div>
      </Remember>
      <Button>
        {errorMessage.length > 0 ? (<p><Red>{errorMessage}</Red></p>) : null}
        <button disabled={!password} onClick={handleLogin}>Sign in</button>
        <p>
          Don&apos;t have an account?
          <a href="">Sign up</a>
        </p>
      </Button>
    </LoginWrapper>
  )
}

export default Login
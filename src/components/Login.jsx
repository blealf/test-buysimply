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

  @media only screen and (min-width: 600px) {
    display: none;
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
  .with-eye {
    display: flex;
    width: 105%;
    .eye {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #eee;
      width: 40px;
      cursor: pointer;

      svg {
        width: 15px;
      }

      .slash {
        position: absolute;
        margin-top: -7px;
        height: 20px;
      }
    }
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
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState('')
  const [loading, setLoading] = useState(false)

  const url = 'https://dummyjson.com/auth/login'

  useEffect(() => {
    setValid(!!(email.length > 0 && password.length > 0))
  }, [email, password])

  const handleChange = (e) => {
    const { name, value } = e.target
    
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
    console.log(e)
    e.preventDefault()
    setErrorMessage('')
    if (!valid) {
      setErrorMessage('login credentials are not valid')
      return
    }
    try {
      setLoading(true)
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    setLoading(false)
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
        <div className="with-eye">
          <input
            type={showPassword ? "text" : "password"} 
            name="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={handleChange} 
            required 
          />
          <span className="eye" onClick={() => setShowPassword(!showPassword)}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15C11.7044 15 10.9413 14.6839 10.3787 14.1213C9.81607 13.5587 9.5 12.7956 9.5 12C9.5 11.2044 9.81607 10.4413 10.3787 9.87868C10.9413 9.31607 11.7044 9 12.5 9C13.2956 9 14.0587 9.31607 14.6213 9.87868C15.1839 10.4413 15.5 11.2044 15.5 12Z" stroke="#7D7D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 12C4.1 7.903 7.836 5 12.5 5C17.164 5 20.9 7.903 22.5 12C20.9 16.097 17.164 19 12.5 19C7.836 19 4.1 16.097 2.5 12Z" stroke="#7D7D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            { showPassword ? <span className="slash">/</span> : null}
          </span>
        </div>
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
        <button disabled={!valid} onClick={handleLogin}>{loading ? 'loading...' : 'Sign in'}</button>
        <p>
          Don&apos;t have an account?
          <a href="">Sign up</a>
        </p>
      </Button>
    </LoginWrapper>
  )
}

export default Login
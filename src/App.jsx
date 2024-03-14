import './App.css'
import Hero from './components/Hero'
import Login from './components/Login'
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
function App() {

  return (
    <AppWrapper>
      <Hero />
      <Login />
    </AppWrapper>
  )
}

export default App

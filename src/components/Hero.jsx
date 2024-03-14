import styled from 'styled-components'
import logo from '../assets/logo.png'
import heroImage from '../assets/hero.png'


const HeroWrapper = styled.div`
  background: #F8EAFF;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  height: 93vh;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const Logo = styled.div`
  margin-right: auto;
  img {
    width: 198px;
  }
`

const HeroImage = styled.div`
  border-radius: 20px;
  margin-top: 50px;
  display: flex;
  img {
    max-width: 600px;
    width: 100%;
    height: auto;
  }
`

const Footer = styled.div`
  margin-top: 30px;
  h3 {
    color: var(--title-font);
  }
  p {
    color: var(--main-font);
    font-weight: 500;
  }
`

const Hero = () => {
  return (
    <HeroWrapper className="hero">
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <HeroImage>
        <img src={heroImage} alt="Hero" />
      </HeroImage>
      <Footer>
        <h3>Team Achieve</h3>
        <p>Your perfect solution for funding your desires</p>
      </Footer>
    </HeroWrapper>
  )
}

export default Hero
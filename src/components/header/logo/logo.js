import styled from 'styled-components'
import LogoImg from '../../../img/doctor-page/logo.png'

const LogoWrapper = styled.div`
  width: 132px;
  height: 32px;

  background-image: url(${LogoImg});
`

const Logo = () => {
  return <LogoWrapper></LogoWrapper>
}

export default Logo

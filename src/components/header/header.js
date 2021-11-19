import Logo from './logo/logo'
import UserName from './userName/userName'
import UserAvatar from './userAvatar/userAvatar'

import { HeaderWrapper } from './header.styles'

import patientImg from '../../img/doctor-page/user.png'

const user = { name: 'Larry Prinston', type: 'Patient' }

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <UserName user={user} />
      <UserAvatar avatar={patientImg} />
    </HeaderWrapper>
  )
}

export default Header

import Logo from './logo/logo'
import UserName from './userName/userName'
import UserAvatar from './userAvatar/userAvatar'

import useStoreMiddleware from '../../redux/useStoreMiddleware'

import { HeaderWrapper } from './header.styles'

const Header = () => {
  const { userProfile } = useStoreMiddleware()

  return (
    <HeaderWrapper>
      <Logo />
      <UserName user={userProfile} />
      <UserAvatar avatar={userProfile} />
    </HeaderWrapper>
  )
}

export default Header

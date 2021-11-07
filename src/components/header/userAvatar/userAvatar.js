import styled from 'styled-components'
import avatarImg from '../../../img/doctor-page/avatar.png'

const AvatarWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  background-image: url(${avatarImg});
  background-size: cover;
`

const AvatarOnline = styled.div`
  position: absolute;
  top: -2px;
  right: -5px;
  width: 15px;
  height: 15px;

  border: 3px solid var(--doctor-bg);
  border-radius: 50%;
  background-color: var(--online-color);
`

const UserAvatar = () => {
  return (
    <AvatarWrapper>
      <AvatarOnline></AvatarOnline>
    </AvatarWrapper>
  )
}

export default UserAvatar

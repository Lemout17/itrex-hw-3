import styled from 'styled-components'

const AvatarWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
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

const UserAvatar = ({ avatar }) => {
  console.log(avatar)
  return (
    <AvatarWrapper>
      <img src={avatar} alt="doctor" />
      <AvatarOnline />
    </AvatarWrapper>
  )
}

export default UserAvatar

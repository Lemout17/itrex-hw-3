import { UserWrapper, Text, SubText } from './userName.styles'

const UserName = ({ user }) => {
  return (
    <UserWrapper>
      <Text>{user.name}</Text>
      <SubText>{user.type}</SubText>
    </UserWrapper>
  )
}

export default UserName

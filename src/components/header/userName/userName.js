import { UserWrapper, Text, SubText } from './userName.styles'

const UserName = ({ user }) => {
  return (
    <UserWrapper>
      <Text>
        {user.first_name} {user.last_name}
      </Text>
      <SubText>{user.role_name}</SubText>
    </UserWrapper>
  )
}

export default UserName

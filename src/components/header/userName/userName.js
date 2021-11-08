import styled from 'styled-components'

const UserWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 16px;
  }
`

const Text = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 15px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--title-color);
  }
`

const SubText = styled.span`
  @media screen and (min-width: 768px) {
    font-size: 13px;
    font-weight: 500;
    line-height: 1.3;
    text-align: right;
    color: var(--text-color);
  }
`

const UserName = ({ user }) => {
  return (
    <UserWrapper>
      <Text>{user.name}</Text>
      <SubText>{user.type}</SubText>
    </UserWrapper>
  )
}

export default UserName

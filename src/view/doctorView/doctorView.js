import Header from '../../components/header'
import Main from '../../components/containers/main'
import Section from '../../components/containers/section'
import Logo from '../../components/header/logo'
import UserName from '../../components/header/userName'
import UserAvatar from '../../components/header/userAvatar'
import MainDoctor from '../../components/mainDoctor'

const DoctorView = () => {
  return (
    <>
      <Header>
        <Logo />
        <UserName />
        <UserAvatar />
      </Header>
      <Main>
        <Section doctor>
          <MainDoctor />
        </Section>
      </Main>
    </>
  )
}

export default DoctorView

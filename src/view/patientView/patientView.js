import Header from '../../components/header'
import Section from '../../components/containers/section'
import Logo from '../../components/header/logo'
import UserName from '../../components/header/userName'
import UserAvatar from '../../components/header/userAvatar'
import MainPatient from '../../components/mainPatient'

import patientImg from '../../img/doctor-page/user.png'

const user = { name: 'Larry Prinston', type: 'Patient' }

const UserView = () => {
  return (
    <>
      <Header>
        <Logo />
        <UserName user={user} />
        <UserAvatar avatar={patientImg} />
      </Header>
      <main>
        <Section doctor>
          <MainPatient />
        </Section>
      </main>
    </>
  )
}

export default UserView

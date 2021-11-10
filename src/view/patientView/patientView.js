import Header from '../../components/header/header'
import Section from '../../components/containers/section/section'
import Logo from '../../components/header/logo/logo'
import UserName from '../../components/header/userName/userName'
import UserAvatar from '../../components/header/userAvatar/userAvatar'
import MainPatient from '../../components/mainPatient/mainPatient'

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

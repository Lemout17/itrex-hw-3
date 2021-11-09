import Header from '../../components/header'
import Section from '../../components/containers/section'
import Logo from '../../components/header/logo'
import UserName from '../../components/header/userName'
import UserAvatar from '../../components/header/userAvatar'
import MainDoctor from '../../components/mainDoctor'

import doctorImg from '../../img/doctor-page/avatar.png'

const user = { name: 'Miranda Nelson', type: 'Doctor' }

const DoctorView = () => {
  return (
    <>
      <Header>
        <Logo />
        <UserName user={user} />
        <UserAvatar avatar={doctorImg} />
      </Header>
      <main>
        <Section doctor>
          <MainDoctor />
        </Section>
      </main>
    </>
  )
}

export default DoctorView

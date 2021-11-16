import { useState } from 'react'
import Header from '../../components/header/header'
import Section from '../../components/containers/section/section'
import Logo from '../../components/header/logo/logo'
import UserName from '../../components/header/userName/userName'
import UserAvatar from '../../components/header/userAvatar/userAvatar'
import MainPatient from '../../components/mainPatient/mainPatient'
import CreateAppointment from '../../components/createAppointment/createAppointment'

import patientImg from '../../img/doctor-page/user.png'

const user = { name: 'Larry Prinston', type: 'Patient' }

const UserView = () => {
  const [appointment, setAppointment] = useState(false)

  const handleChangeComponent = (value) => {
    setAppointment(value)
  }

  return (
    <>
      <Header>
        <Logo />
        <UserName user={user} />
        <UserAvatar avatar={patientImg} />
      </Header>
      <main>
        <Section doctor>
          {appointment ? (
            <CreateAppointment handleChangeComponent={handleChangeComponent} />
          ) : (
            <MainPatient handleChangeComponent={handleChangeComponent} />
          )}
        </Section>
      </main>
    </>
  )
}

export default UserView

import { useState } from 'react'
import Header from '../../components/header/header'
import Section from '../../components/containers/section/section'
import MainPatient from '../../components/mainPatient/mainPatient'
import CreateAppointment from '../../components/createAppointment/createAppointment'

const UserView = () => {
  const [appointment, setAppointment] = useState(false)

  const toggleCreateAppointment = (value) => {
    setAppointment(value)
  }

  return (
    <>
      <Header />
      <main>
        <Section doctor>
          {appointment ? (
            <CreateAppointment
              toggleCreateAppointment={toggleCreateAppointment}
            />
          ) : (
            <MainPatient toggleCreateAppointment={toggleCreateAppointment} />
          )}
        </Section>
      </main>
    </>
  )
}

export default UserView

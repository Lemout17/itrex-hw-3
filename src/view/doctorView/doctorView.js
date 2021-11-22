import Header from '../../components/header/header'
import Section from '../../components/containers/section/section'
import MainDoctor from '../../components/mainDoctor/mainDoctor'

const DoctorView = () => {
  return (
    <>
      <Header />
      <main>
        <Section doctor>
          <MainDoctor />
        </Section>
      </main>
    </>
  )
}

export default DoctorView

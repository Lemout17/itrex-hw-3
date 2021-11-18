import useStoreMiddleware from '../../redux/useStoreMiddleware'

import AppointmentsList from './appointmentsList/appointmentsList'
import EmptyState from '../mainDoctor/emptyState/emptyState'
import Title from '../title/title'

import {
  MainWrapper,
  ButtonWrapper,
  Button,
  FilterWrapper,
  FilterButton,
  SelectorWrapper,
  Selector,
  Text,
} from '../mainDoctor/styles'

const MainPatient = ({ toggleCreateAppointment }) => {
  const { appointments } = useStoreMiddleware()

  const handleClick = () => {
    toggleCreateAppointment(true)
  }

  return (
    <MainWrapper>
      <ButtonWrapper>
        <Button white>Profile</Button>
        <Button>Appointments</Button>
        <Button patient white>
          Resolutions
        </Button>
      </ButtonWrapper>

      <FilterWrapper>
        <Title doctor text="My appointments" />
        <FilterButton patient />
        <SelectorWrapper>
          <Text desktop>Show:</Text>
          <Selector>Upcoming</Selector>
        </SelectorWrapper>
        <Button patient desktop onClick={handleClick}>
          Create an appointment
        </Button>
      </FilterWrapper>

      {!appointments.length ? (
        <EmptyState />
      ) : (
        <AppointmentsList data={appointments} />
      )}
    </MainWrapper>
  )
}

export default MainPatient

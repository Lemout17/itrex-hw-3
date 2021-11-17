import { useState } from 'react'
import { useSelector } from 'react-redux'
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
import userSelector from '../../redux/user/userSelector'

import Title from '../title/title'
import AppointmentsList from './appointmentsList/appointmentsList'
import EmptyState from '../mainDoctor/emptyState/emptyState'

const MainPatient = ({ toggleCreateAppointment }) => {
  const data = useSelector(userSelector.getDoctorsList)

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

      {!data.length ? <EmptyState /> : <AppointmentsList data={data} />}
    </MainWrapper>
  )
}

export default MainPatient

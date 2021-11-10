import { useState } from 'react'
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

import Title from '../title/title'
import AppointmentsList from './appointmentsList/appointmentsList'
import EmptyState from '../mainDoctor/emptyState/emptyState'

import data from './db.json'

const MainPatient = () => {
  const [state, setstate] = useState([data])

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
        <Button patient desktop>
          Create an appointment
        </Button>
      </FilterWrapper>

      {!state.length ? <EmptyState /> : <AppointmentsList data={state} />}
    </MainWrapper>
  )
}

export default MainPatient

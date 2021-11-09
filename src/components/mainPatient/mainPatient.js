import { useState } from 'react'
import {
  MainWrapper,
  ButtonWrapper,
  Button,
  FilterWrapper,
  FilterButton,
} from '../mainDoctor/styles'

import Title from '../title'
import AppointmentsList from './appointmentsList'
import EmptyState from '../mainDoctor/emptyState'

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
      </FilterWrapper>

      {!state.length ? <EmptyState /> : <AppointmentsList data={state} />}
    </MainWrapper>
  )
}

export default MainPatient

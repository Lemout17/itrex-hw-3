import { useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'

import {
  MainWrapper,
  ButtonWrapper,
  Button,
  FilterWrapper,
  FilterButton,
} from '../mainDoctor/styles'

import Title from '../title'
import AppointmentsList from './appointmentsList'
import EmptyState from '../mainDoctor/emptyWrapper'

import data from './db.json'

const MainPatient = () => {
  const [state, setstate] = useState([data])
  const width = useWindowWidth()

  return (
    <MainWrapper>
      <ButtonWrapper>
        <Button white>Profile</Button>
        <Button>Appointments</Button>
        {width >= 1280 && (
          <Button patient white>
            Resolutions
          </Button>
        )}
      </ButtonWrapper>

      <FilterWrapper>
        <Title doctor text="My appointments" />
        <FilterButton patient />
      </FilterWrapper>

      {state.length <= 0 ? <EmptyState /> : <AppointmentsList data={state} />}
    </MainWrapper>
  )
}

export default MainPatient

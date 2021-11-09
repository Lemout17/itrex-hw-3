import { useState } from 'react'
import Title from '../title/title'
import EmptyState from './emptyState'
import PatientsList from './patientsList'
import {
  MainWrapper,
  ButtonWrapper,
  Button,
  FilterWrapper,
  FilterButton,
} from './styles'

import data from './db.json'

const MainDoctor = () => {
  const [state, setstate] = useState([data])
  return (
    <MainWrapper>
      <ButtonWrapper>
        <Button>Patients</Button>
        <Button white>Resolutions</Button>
      </ButtonWrapper>

      <FilterWrapper>
        <Title doctor text="My Patients" />
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
      </FilterWrapper>

      {!state.length ? <EmptyState /> : <PatientsList data={state} />}
    </MainWrapper>
  )
}

export default MainDoctor

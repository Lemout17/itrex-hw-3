import { useState } from 'react'
import Title from '../title/title'
import EmptyState from './emptyWrapper'
import PatientsList from './patientsList'
import {
  DoctorWrapper,
  ButtonWrapper,
  Button,
  FilterWrapper,
  FilterButton,
} from './styles'

import data from './db.json'

const MainDoctor = () => {
  const [state, setstate] = useState([data])
  return (
    <DoctorWrapper>
      <ButtonWrapper>
        <Button>Patients</Button>
        <Button white>Resolutions</Button>
      </ButtonWrapper>

      <FilterWrapper>
        <Title doctor text="My Patients" />
        <FilterButton></FilterButton>
        <FilterButton></FilterButton>
      </FilterWrapper>

      {state.length <= 0 ? <EmptyState /> : <PatientsList data={state} />}
    </DoctorWrapper>
  )
}

export default MainDoctor

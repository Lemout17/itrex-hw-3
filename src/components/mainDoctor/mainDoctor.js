import { useState } from 'react'
import Title from '../title/title'
import EmptyState from './emptyState/emptyState'
import PatientsList from './patientsList/patientsList'
import {
  MainWrapper,
  ButtonWrapper,
  Button,
  FilterWrapper,
  FilterButton,
  SelectorWrapper,
  Text,
  Input,
  Selector,
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
        <ButtonWrapper mobile>
          <FilterButton desktop />
          <FilterButton desktop />
        </ButtonWrapper>
        <SelectorWrapper>
          <Input type="text" placeholder="Search" />
          <Text desktop>Sort by:</Text>
          <Selector doctor>Date</Selector>
        </SelectorWrapper>
      </FilterWrapper>

      {!state.length ? <EmptyState /> : <PatientsList data={state} />}
    </MainWrapper>
  )
}

export default MainDoctor

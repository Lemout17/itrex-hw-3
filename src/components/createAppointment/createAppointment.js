import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MainWrapper, Text, Button } from '../mainDoctor/styles'
import { nanoid } from '@reduxjs/toolkit'
import Title from '../title/title'
import { Link, TextWrapper, Wrapper } from './createAppointment.styles'
import DatePicker from './datePicker/datePicker'
import TimePicker from './timePicker/timePicker'
import DoctorPicker from './doctorPicker/doctorPicker'

import userActions from '../../redux/user/userActions'

const CreateAppointment = ({ toggleCreateAppointment }) => {
  const [dateData, setDateData] = useState()
  const [timeData, setTimeData] = useState()
  const [formData, setFormData] = useState()
  const [disabled, setDisabled] = useState(true)

  const dispatch = useDispatch()

  const handleClick = () => {
    toggleCreateAppointment(false)
  }

  const onChangeData = (data, name) => {
    switch (name) {
      case 'formData':
        return setFormData(data)

      case 'timeData':
        return setTimeData(data)

      case 'dateData':
        return setDateData(data)

      default:
        return
    }
  }

  const onSubmitAppointment = () => {
    const data = {
      id: nanoid(),
      name: formData.name,
      status: formData.status,
      date: `${dateData} ${timeData}`,
      description: formData.description,
      note: formData.note,
    }

    dispatch(userActions.setDoctorsList(data))
    handleClick()
  }

  useEffect(() => {
    if (dateData && timeData && formData?.name && formData?.status) {
      setDisabled(false)
    }
    return
  }, [dateData, timeData, formData])

  return (
    <MainWrapper>
      <TextWrapper>
        <Link onClick={handleClick}>Doctor</Link>
        <Text desktop appointment>
          Make an appointment
        </Text>
      </TextWrapper>

      <Title text="Make an appointment" />

      <Wrapper>
        <DatePicker onChangeDateData={onChangeData} />
        <TimePicker onChangeTimeData={onChangeData} />
        <DoctorPicker onChangeFormData={onChangeData} />
      </Wrapper>

      <Button disabled={disabled} onClick={onSubmitAppointment} appointment>
        Submit
      </Button>
    </MainWrapper>
  )
}

export default CreateAppointment

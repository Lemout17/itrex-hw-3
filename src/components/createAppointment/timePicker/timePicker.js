import { useState, useEffect } from 'react'
import { PickerWrapper } from '../createAppointment.styles'
import { Text } from '../createAppointment.styles'
import { Listing, ListItem } from './timePicker.styles'

const doctorsSchedule = [
  '12:00 am',
  '1:00 pm',
  '2:00 pm',
  '3:00 pm',
  '4:00 pm',
  '5:00 pm',
  '6:00 pm',
  '7:00 pm',
  '8:00 pm',
  '9:00 pm',
]

const TimePicker = ({ onChangeTimeData }) => {
  const [time, setTime] = useState('')

  const handleClick = (e) => {
    if (e.target.nodeName !== 'BUTTON') {
      return
    }

    setTime(e.target.textContent)
  }

  useEffect(() => {
    onChangeTimeData(time, 'timeData')
  }, [time])

  return (
    <PickerWrapper timePicker>
      <Text before second>
        Select an available timeslot
      </Text>
      <Listing onClick={handleClick}>
        {doctorsSchedule.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </Listing>
    </PickerWrapper>
  )
}

export default TimePicker

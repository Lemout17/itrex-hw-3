import { useState, useEffect } from 'react'
import { StyledCalendar } from './datePicker.styled'
import { PickerWrapper } from '../createAppointment.styles'
import { Text } from '../createAppointment.styles'

const DatePicker = ({ onChangeDateData }) => {
  const [date, setDate] = useState(new Date())
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  const normalizedDate = date
    .toLocaleDateString('en-US', options)
    .replace(',', '')

  useEffect(() => {
    onChangeDateData(normalizedDate, 'dateData')
  }, [normalizedDate])

  return (
    <PickerWrapper datePicker>
      <Text before>Choose a day for an appointment</Text>
      <StyledCalendar
        locale="en"
        minDetail="year"
        formatShortWeekday={(locale, d) =>
          ['M', 'T', 'W', 'T', 'F', 'S', 'S'][d.getDate() - 1]
        }
        onChange={setDate}
        value={date}
      />
    </PickerWrapper>
  )
}

export default DatePicker

import { useState, useEffect } from 'react'
import { Text, PickerWrapper } from '../createAppointment.styles'
import { Input } from '../../form/styles'
import { Label, StyledSelect } from './doctorPicker.styles'
import doctorsList from '../../mainPatient/db.json'

const DoctorPicker = ({ onChangeFormData }) => {
  const [occupation, setOccupation] = useState('')
  const [doctorName, setDoctorName] = useState('')
  const [doctor, setDoctor] = useState({
    name: '',
    status: '',
    description: '',
    note: '',
  })

  const options = (elem) =>
    doctorsList.map((item) => ({
      value: item[elem],
      label: item[elem],
    }))

  const handleChange = (e) => {
    setDoctor((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (doctorName && occupation) {
      const data = {
        name: doctorName.value,
        status: occupation.value,
        description: doctor.description,
        note: doctor.note,
      }

      onChangeFormData(data, 'formData')
    }
    return
  }, [doctorName, occupation, doctor])

  return (
    <PickerWrapper doctorPicker>
      <Text before third>
        Select a doctor and define the reason of your visit
      </Text>

      <form>
        <Label>
          Occupation
          <StyledSelect
            placeholder="Select an occupation"
            classNamePrefix="Select"
            onChange={setOccupation}
            options={options('status')}
          />
        </Label>
        <Label>
          Doctor’s Name
          <StyledSelect
            placeholder="Select a doctor’s name"
            classNamePrefix="Select"
            onChange={setDoctorName}
            options={options('name')}
          />
        </Label>
        <Label>
          Reason for the visit
          <Input
            type="text"
            name="description"
            value={doctor.description}
            onChange={handleChange}
            picker
            placeholder="Leave a reason for the visit"
            required
          />
        </Label>
        <Label>
          Note
          <Input
            type="text"
            name="note"
            value={doctor.note}
            onChange={handleChange}
            picker
            placeholder="Leave a note if needed"
          />
        </Label>
      </form>
    </PickerWrapper>
  )
}

export default DoctorPicker

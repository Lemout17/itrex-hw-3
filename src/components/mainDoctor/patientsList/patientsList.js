import {
  PatientsListing,
  PatientCard,
  PatientCardHeader,
  PatientCardAvatar,
  PatientTextWrapper,
  PatientTextName,
  PatientCardStatusWrapper,
  PatientCardStatusIndicator,
  PatientCardTextStatus,
  PatientCardButton,
  PatientCardDescWrapper,
  PatientCardDate,
  PatientCardDescription,
} from './styles'

const PatientsList = ({ data }) => {
  return (
    <PatientsListing>
      {data[0].map(({ id, name, status, date, description }) => (
        <PatientCard key={id}>
          <PatientCardHeader>
            <PatientCardAvatar />
            <PatientTextWrapper>
              <PatientTextName>{name}</PatientTextName>
              <PatientCardStatusWrapper>
                <PatientCardStatusIndicator />
                <PatientCardTextStatus>{status}</PatientCardTextStatus>
              </PatientCardStatusWrapper>
            </PatientTextWrapper>
            <PatientCardButton type="button"></PatientCardButton>
          </PatientCardHeader>
          <PatientCardDescWrapper>
            <PatientCardDate>{date}</PatientCardDate>
            <PatientCardDescription>{description}</PatientCardDescription>
          </PatientCardDescWrapper>
        </PatientCard>
      ))}
    </PatientsListing>
  )
}

export default PatientsList

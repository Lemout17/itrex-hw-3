import {
  Listing,
  Card,
  CardHeader,
  CardAvatar,
  TextWrapper,
  TextName,
  CardStatusWrapper,
  CardStatusIndicator,
  CardTextStatus,
  CardButton,
  CardDescWrapper,
  CardDate,
  CardDescription,
} from '../../mainDoctor/patientsList/styles'

const AppointmentsList = ({ data }) => {
  return (
    <Listing>
      {data[0].map(({ id, name, status, date, description }) => (
        <Card patient key={id}>
          <CardHeader>
            <CardAvatar />
            <TextWrapper>
              <TextName>{name}</TextName>
              <CardStatusWrapper>
                <CardStatusIndicator />
                <CardTextStatus>{status}</CardTextStatus>
              </CardStatusWrapper>
            </TextWrapper>
            <CardButton type="button"></CardButton>
          </CardHeader>
          <CardDescWrapper>
            <CardDate>{date}</CardDate>
            <CardDescription patient>{description}</CardDescription>
          </CardDescWrapper>
        </Card>
      ))}
    </Listing>
  )
}

export default AppointmentsList

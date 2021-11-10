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
} from './styles'

const PatientsList = ({ data }) => {
  return (
    <Listing>
      {data[0].map(({ id, name, status, date, description }) => (
        <Card key={id}>
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
            <CardDescription>{description}</CardDescription>
          </CardDescWrapper>
        </Card>
      ))}
    </Listing>
  )
}

export default PatientsList

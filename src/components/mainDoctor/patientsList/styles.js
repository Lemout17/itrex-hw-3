import styled from 'styled-components'
import patientImg from '../../../img/doctor-page/patient.png'
import verticalSvg from '../../../svg/doctor-page/more-vertical.svg'
import clockSvg from '../../../svg/doctor-page/clock-three.svg'
import clipboardSvg from '../../../svg/doctor-page/clipboard-blank.svg'

const PatientsListing = styled.ul`
  @media screen and (min-width: 1280px) {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(406px, 1fr));
  }
`

const PatientCard = styled.li`
  width: 100%;
  height: 305px;
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  background: var(--white-color);

  &:last-child {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    height: auto;
  }

  @media screen and (min-width: 1280px) {
    margin: 0;
  }
`

const PatientCardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;

  border-bottom: 1px solid var(--input-color);

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
  }
`

const PatientCardAvatar = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;

  background-image: url(${patientImg});
  background-size: cover;
`

const PatientTextWrapper = styled.div`
  width: 130px;
  margin-right: 14px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

const PatientTextName = styled.p`
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--title-color);
`

const PatientCardStatusWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 5px;
`

const PatientCardStatusIndicator = styled.div`
  width: 8px;
  height: 8px;
  padding: 4px;

  border: none;
  border-radius: 50%;
  background-color: var(--online-color);
`

const PatientCardTextStatus = styled.span`
  margin-left: 8px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--text-color);
`

const PatientCardButton = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  background-color: transparent;
  background-image: url(${verticalSvg});
  background-size: cover;

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`
const PatientCardDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px 24px 56px;
`
const PatientCardDate = styled.p`
  position: relative;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
  color: $title-color;

  &::before {
    position: absolute;
    top: 0;
    left: -41px;
    display: block;
    width: 24px;
    height: 24px;
    content: '';

    background-image: url(${clockSvg});
    background-size: cover;
  }
`

const PatientCardDescription = styled.p`
  position: relative;
  margin-top: 23px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;

  &::before {
    position: absolute;
    top: 0;
    left: -41px;
    display: block;
    width: 24px;
    height: 24px;
    content: '';

    background-image: url(${clipboardSvg});
    background-size: cover;
  }
`

export {
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
}

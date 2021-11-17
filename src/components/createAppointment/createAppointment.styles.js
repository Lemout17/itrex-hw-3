import styled from 'styled-components'
import arrowRightSvg from '../../svg/doctor-page/angle-right-b.svg'
import posOneSvg from '../../svg/doctor-page/pos1.svg'
import posTwoSvg from '../../svg/doctor-page/pos2.svg'
import posThreeSvg from '../../svg/doctor-page/pos3.svg'

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 286px;
  margin-bottom: 72px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  font-size: 17px;
  line-height: 1.4;
  color: var(--input-accent);

  cursor: pointer;
`

const ArrowSvg = styled.div`
  padding: 12px;
  margin: 0 8px;
  background-image: url(${arrowRightSvg});
  background-position: center;
  background-repeat: no-repeat;
`

const PickerWrapper = styled.div`
  width: 100%;

  ${(props) => props.datePicker && ' max-width: 400px;'}
  ${(props) => props.doctorPicker && 'max-width: 626px;'}
  ${(props) =>
    props.timePicker &&
    'max-width: 300px; margin-left:25px; margin-right:25px;'}

  

  &:last-child {
    margin: 0;
  }

  @media screen and (min-width: 1441px) {
    ${(props) => props.timePicker && 'max-width: 464px; margin:0;'}
  }
`

const Text = styled.p`
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;
  ${(props) => props.third && 'margin-bottom: 32px;'}
  font-weight: 400;
  font-size: 17px;
  line-height: 1.4;
  color: var(--text-color);

  ${(props) =>
    props.before &&
    `&::before {
    position: absolute;
    top: -5px;
    left: 0;
    display: block;
    width: 32px;
    height: 32px;
    content: '';
    background-image: url(${posOneSvg});
    
  }`}

  ${(props) =>
    props.before &&
    props.second &&
    `
    &::before {
      background-image: url(${posTwoSvg});
    }`}

    ${(props) =>
    props.before &&
    props.third &&
    `
    &::before {
      background-image: url(${posThreeSvg});
    }`}
`

export { TextWrapper, Link, ArrowSvg, PickerWrapper, Wrapper, Text }

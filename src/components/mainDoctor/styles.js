import styled from 'styled-components'
import searchSvg from '../../svg/doctor-page/search.svg'
import sliderSvg from '../../svg/doctor-page/sliders-v-alt.svg'
import historySvg from '../../svg/doctor-page/medical-history.svg'
import plusSvg from '../../svg/doctor-page/plus.svg'
import arrowDownSvg from '../../svg/doctor-page/angle-down.svg'

const MainWrapper = styled.div`
  width: 100%;
  height: auto;

  padding: 40px 24px;

  background-color: var(--main-bg);
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);
  border-radius: 16px 16px 0 0;

  @media screen and (min-width: 768px) {
    min-height: 896px;
    border-radius: 16px;
    padding: 40px 48px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.mobile && 'margin-left:auto;'}
`

const Button = styled.button`
  display: block;
  ${(props) => props.patient && 'display: none;'}
  width: 120px;
  height: 40px;
  padding: 12px 0;

  font-size: 15px;
  font-weight: 600;
  ${(props) => props.white && 'font-weight: 400;'}
  line-height: 1.3;
  color: var(--white-color);
  ${(props) => props.white && 'color:var(--input-accent);'}

  border: none;
  border-radius: 8px;
  background-color: var(--input-accent);
  ${(props) =>
    props.disabled === true && 'background-color:var(--input-color);'}
  ${(props) => props.white && 'background-color:var(--white-color);'}

  cursor: pointer;

  &:first-child {
    margin-right: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    ${(props) =>
      props.appointment &&
      'margin-left: auto; margin-top:80px; height: 56px;font-size: 17px; line-height: 1.4;'}

    &:first-child {
      margin-right: 12px;
    }

    &:last-child {
      ${(props) => props.patient && 'margin-left: 12px;'}
    }
  }

  @media screen and (min-width: 1280px) {
    ${(props) => props.patient && 'display: block;'}
    ${(props) => props.desktop && 'width: 244px;'}
    ${(props) => props.desktop && 'height: 48px;'}
    ${(props) => props.desktop && 'padding: 12px 16px;'}
    
    &:last-child {
      ${(props) => props.desktop && 'margin-left: 64px;'}
    }

    ${(props) => props.desktop && 'text-align:right;'}
    ${(props) => props.desktop && `background-image: url(${plusSvg});`}
    ${(props) => props.desktop && 'background-repeat:no-repeat;'}
    ${(props) => props.desktop && 'background-position-y:center;'}
    ${(props) => props.desktop && 'background-position-x: 16px;'}
  }
`

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px auto 16px;

  @media screen and (min-width: 768px) {
    margin: 56px auto 42px;
  }
`

const FilterButton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: auto;

  border: none;
  background-color: transparent;
  background-image: url(${searchSvg});
  ${(props) => props.patient && `background-image: url(${sliderSvg});`}
  background-size: cover;

  cursor: pointer;

  &:last-child {
    margin-left: 28px;
    ${(props) => props.patient && 'margin-left: auto;'}
    background-image: url(${sliderSvg});
  }

  @media screen and (min-width: 1280px) {
    ${(props) => props.patient && 'display: none;'}
    ${(props) => props.desktop && 'display: none;'}
  }
`

const SelectorWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`

const Input = styled.input`
  width: 120px;
  padding-left: 40px;
  margin-right: 16px;

  font-size: 15px;
  line-height: 1.4;
  color: var(--title-color);

  border: none;
  outline: none;

  background-color: transparent;
  background-image: url(${searchSvg});
  background-repeat: no-repeat;
  background-position-x: 3px;
  background-position-y: center;

  &::placeholder {
    color: var(--text-color);
  }
`

const Selector = styled.button`
  padding: 8px 30px 8px 16px;
  font-size: 15px;
  line-height: 1.4;
  color: var(--input-accent);
  border: none;
  background-color: transparent;
  background-image: url(${arrowDownSvg});
  background-repeat: no-repeat;
  background-position-x: 100px;
  background-position-y: center;
  ${(props) => props.doctor && `background-position-x: 60px;`}

  cursor: pointer;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  margin-bottom: 108px;

  @media screen and (min-width: 768px) {
    margin-top: 166px;
    margin-bottom: 340px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 256px;
    margin-bottom: 270px;
  }
`

const Icon = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 32px;

  background-image: url(${historySvg});
  background-size: cover;
`
const Text = styled.p`
  width: 240px;
  ${(props) => props.desktop && 'width: 100%;'}
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  color: var(--text-color);

  @media screen and (min-width: 1280px) {
    ${(props) => props.appointment && 'font-size: 17px;'}
  }
`

export {
  MainWrapper,
  ButtonWrapper,
  Button,
  FilterWrapper,
  FilterButton,
  SelectorWrapper,
  Input,
  Selector,
  Wrapper,
  Icon,
  Text,
}

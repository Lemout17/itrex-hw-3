import styled from 'styled-components'
import searchSvg from '../../svg/doctor-page/search.svg'
import sliderSvg from '../../svg/doctor-page/sliders-v-alt.svg'
import historySvg from '../../svg/doctor-page/medical-history.svg'

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
`

const Button = styled.button`
  display: block;
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
  ${(props) => props.white && 'background-color:var(--white-color);'}

  &:first-child {
    margin-right: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 160px;

    &:first-child {
      margin-right: 12px;
    }

    &:last-child {
      ${(props) => props.patient && 'margin-left: 12px;'}
    }
  }
`

const FilterWrapper = styled.div`
  display: flex;
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
  background-size: cover;

  cursor: pointer;

  &:last-child {
    margin-left: 28px;
    ${(props) => props.patient && 'margin-left: auto;'}
    background-image: url(${sliderSvg});
  }
`

const EmptyWrapper = styled.div`
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

const EmptyIcon = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 32px;

  background-image: url(${historySvg});
  background-size: cover;
`
const EmptyText = styled.p`
  width: 240px;

  text-align: center;
  font-weight: normal;
  font-size: 15px;
  line-height: 1.4;
  color: var(--text-color);
`

export {
  MainWrapper,
  ButtonWrapper,
  Button,
  FilterWrapper,
  FilterButton,
  EmptyWrapper,
  EmptyIcon,
  EmptyText,
}

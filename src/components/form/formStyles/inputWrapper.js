import styled from 'styled-components'
import userSvg from '../../../svg/user.svg'
import emailSvg from '../../../svg/email.svg'
import lockSvg from '../../../svg/lock.svg'
import checkSvg from '../../../svg/check.svg'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  ${(props) => props.restore && 'margin-bottom: 32px;'}
  ${(props) =>
    props.status === 'error' ? 'margin-bottom: 32px;' : 'margin-bottom: 24px;'}
    ${(props) =>
    props.status === 'error' && props.restore
      ? 'margin-bottom: 48px;'
      : 'margin-bottom: 24px;'}

  color: var(--text-color);

  &:last-child {
    margin-bottom: 32px;
    ${(props) => props.status === 'error' && 'margin-bottom: 48px;'}
  }

  &::before {
    position: absolute;
    top: 7px;
    left: 17px;
    display: block;
    content: '';
    width: 24px;
    height: 24px;

    background-image: url(${(props) =>
      props.login || props.restore ? emailSvg : userSvg});
  }

  &:nth-child(2)::before {
    background-image: url(${(props) => (props.login ? lockSvg : userSvg)});
  }

  &:nth-child(3)::before {
    background-image: url(${emailSvg});
  }

  &:nth-child(4)::before {
    background-image: url(${lockSvg});
  }

  &:nth-child(5)::before {
    background-image: url(${checkSvg});
  }

  & input {
    outline: ${(props) =>
      props.status === 'error' ? '1px solid var(--input-error)' : 'none'};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    ${(props) => props.restore && 'margin-bottom: 64px;'}

    &:last-child {
      margin-bottom: 64px;
    }

    &::before {
      top: 16px;
      left: 28px;
    }
  }
`
export default Wrapper

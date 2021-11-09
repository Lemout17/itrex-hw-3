import styled from 'styled-components'
import userSvg from '../../svg/user.svg'
import emailSvg from '../../svg/email.svg'
import lockSvg from '../../svg/lock.svg'
import checkSvg from '../../svg/check.svg'
import openEyeSvg from '../../svg/eye.svg'
import closedEyeSvg from '../../svg/eye-blocked.svg'
import arrowRightSvg from '../../svg/angle-right-b.svg'

const Form = styled.form`
  width: 100%;
  min-height: calc(100vh - 71px);
  padding: 32px;

  border: none;
  border-radius: 24px 24px 0px 0px;
  background-color: var(--main-bg);

  @media screen and (min-width: 768px) {
    height: 1024px;
    padding: 168px 96px 80px;
    border-radius: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 560px;
    height: 1024px;
    margin-left: auto;
  }
`
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  ${(props) => props.restore && 'margin-bottom: 32px;'}
  ${(props) =>
    props.status === 'error' ? 'margin-bottom: 36px;' : 'margin-bottom: 24px;'}
  color: var(--text-color);
  ${(props) => props.restore && 'margin-bottom: 32px;'}

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

    background-image: url(${userSvg});
    ${(props) => props.login && `background-image: url(${emailSvg});`};
    ${(props) => props.restore && `background-image: url(${emailSvg});`};
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

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 9.5px 18px 9.5px 48px;

  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;

  border: 1px solid var(--input-color);
  border-radius: 8px;
  background-color: var(--white-color);
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);

  &::placeholder {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
    color: var(--text-color);
  }

  &:hover,
  &:focus {
    outline: 1px solid var(--input-accent);
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    padding: 16px 18px 16px 64px;

    font-size: 17px;

    &::placeholder {
      font-size: 17px;
    }
  }
`

const ErrorText = styled.p`
  position: absolute;
  top: 40px;
  left: 0;
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--input-error);

  @media screen and (min-width: 768px) {
    top: 55px;
  }
`

const Svg = styled.div`
  position: absolute;
  top: 7px;
  right: 18px;
  width: 24px;
  height: 24px;
  color: var(--text-color);

  background-size: cover;
  background-image: url(${closedEyeSvg});
  ${(props) =>
    props.state === 'open' && `background-image: url(${openEyeSvg});`}

  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 27px;
  }
`

const Button = styled.button`
  position: relative;
  width: ${(props) => (props.login ? '116px' : '122px')};
  ${(props) => props.restore && 'width: 198px;'}
  height: 48px;
  padding: 14.5px 16px;
  margin-bottom: ${(props) => (props.login ? '32px' : '72px')};

  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  color: var(--white-color);

  border: none;
  border-radius: 8px;
  background-color: var(--input-accent);

  cursor: pointer;

  background-image: url(${arrowRightSvg});
  background-repeat: no-repeat;
  background-position-x: ${(props) => (props.restore ? '145px' : '80px')};
  background-position-y: center;

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.login ? '138px' : '146px')};
    ${(props) => props.restore && 'width: 214px;'}
    height: 56px;
    padding: 16px 24px;
    margin-bottom: 120px;
    font-size: 17px;

    background-position-x: ${(props) => (props.restore ? '165px' : '100px')};
  }
`

const TextWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0;
  }
`

const Link = styled.div`
  & a {
    margin-bottom: ${(props) => (props.login ? '97px' : 0)};
    font-size: 15px;
    line-height: 1.3;
    font-weight: 600;
    ${(props) => props.confirm && 'font-weight: 400;'}
    color: var(--input-accent);
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    ${(props) => props.confirm && 'display: inline-flex;'}
    margin-left: ${(props) => (props.login ? 0 : '12px')};
  }
`

const Text = styled.p`
  margin-bottom: ${(props) => (props.restore ? '40px' : 0)};
  font-size: 15px;
  line-height: 1.4;
  font-weight: 400;
  color: var(--text-color);
`

export { Form, Wrapper, Input, ErrorText, Svg, Button, Link, Text, TextWrapper }

import styled from 'styled-components'
import arrowRightSvg from '../../../svg/angle-right-b.svg'

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
export default Button

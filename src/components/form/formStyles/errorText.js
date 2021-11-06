import styled from 'styled-components'

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
export default ErrorText

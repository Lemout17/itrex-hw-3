import styled from 'styled-components'

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

export default Form

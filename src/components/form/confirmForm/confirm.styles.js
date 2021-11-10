import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 72px);
  padding: 32px;

  border: none;
  border-radius: 24px 24px 0px 0px;
  background-color: var(--main-bg);

  @media screen and (min-width: 768px) {
    padding: 264px 96px 620px;
    border-radius: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 560px;
    height: 1024px;
    margin-left: auto;
  }
`
export default Container

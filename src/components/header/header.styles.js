import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  padding: 16px 24px;

  @media screen and (min-width: 768px) {
    padding: 20px 64px;
  }
`

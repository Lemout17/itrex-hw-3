import styled from 'styled-components'

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

export default Link

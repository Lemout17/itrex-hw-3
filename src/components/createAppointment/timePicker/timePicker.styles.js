import styled from 'styled-components'

const Listing = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`

const Button = styled.button`
  width: 104px;
  padding: 8px 16px;

  font-weight: 600;
  font-size: 15px;
  line-height: 1.3;
  color: var(--title-color);

  ${(props) => props.disabled && 'color:var( --main-bg);'}

  border: none;

  border-radius: 8px;
  background: var(--white-color);
  ${(props) => props.disabled && 'background: var(--input-color);'}
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);

  &:focus {
    outline: 1px solid var(--input-accent);
    color: var(--input-accent);
  }

  cursor: pointer;
`

export { Listing, Button }

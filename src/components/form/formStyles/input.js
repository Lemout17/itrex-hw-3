import styled from 'styled-components'

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
export default Input

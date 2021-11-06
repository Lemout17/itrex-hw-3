import styled from 'styled-components'

const Text = styled.p`
  margin-bottom: ${(props) => (props.restore ? '40px' : 0)};
  font-size: 15px;
  line-height: 1.4;
  font-weight: 400;
  color: var(--text-color);
`
export default Text

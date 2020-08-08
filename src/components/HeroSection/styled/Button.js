import styled from 'styled-components'

const Button = styled.button`
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  color: #F2FDF1;
  width: max-content;
  align-self: center;

  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #F2FDF1;

  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;

  :hover {
    border: 2px solid #F2FDF1;
    color: #004a75;
    background-color: #F2FDF1};
  }
`

export default Button

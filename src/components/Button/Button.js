import styled from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  background-color: #d7ff82;
  font-size: 15px;
  width: 130px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  color: #0b0b0b;
  margin: 25px 0;
  &:hover {
    color: white;
    background-color: gray;
  }
`;

export default Button;

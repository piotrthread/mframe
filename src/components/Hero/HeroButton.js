import styled from "styled-components";

const HeroButton = styled.button`
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
  &:hover {
    color: #0b0b0b;
    background-color: white;
  }
`;

export default HeroButton;

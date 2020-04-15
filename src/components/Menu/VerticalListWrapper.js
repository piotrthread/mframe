import styled from "styled-components";

const VerticalListWrapper = styled.ul`
  list-style-type: none;
  background-color: black;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default VerticalListWrapper;

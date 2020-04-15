import styled from "styled-components";

const HeroTitle = styled.h1`
  color: white;
  font-weight: ${(props) => (props.secondary ? 100 : 700)};
  font-style: italic;
  font-size: 7vw;
  @media (min-width: 576px) {
    font-size: 30px;
  }
`;

export default HeroTitle;

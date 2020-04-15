import styled from "styled-components";

const HeroWrapper = styled.div`
  background-color: gray;
  background-size: cover;
  background-position-y: bottom;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 50vw;
  }
  @media (min-width: 992px) {
    height: 40vw;
  }
`;

export default HeroWrapper;

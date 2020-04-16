import styled from "styled-components";

const HeroWrapper = styled.div`
  background-image: url("./images/hero.jpg");
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 60vh;
  }
  @media (min-width: 992px) {
    height: 70vh;
  }
`;

export default HeroWrapper;

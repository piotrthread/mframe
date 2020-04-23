import styled from "styled-components";

const HeroWrapper = styled.div`
  background-image: url("./images/hero.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  height: 75vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  padding: 50px;

  @media (min-width: 768px) {
    height: 85vh;
  }
  @media (min-width: 992px) {
    height: 95vh;
  }
`;

export default HeroWrapper;

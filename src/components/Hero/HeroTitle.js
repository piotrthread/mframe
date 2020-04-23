import styled from "styled-components";

const HeroTitle = styled.h1`
  display: inline;
  font-size: 10vw;
  top:50vw;
  left:10vw;
  font-weight: ${(props) => (props.thin ? 300 : 700)};
  color:white;
  position:absolute;
  @media (min-width: 540px) {
    font-size: 8vw;
  top:50vw;
  left:10vw;
  }
  @media (min-width: 640px) {
    font-size: 8vw;
  top:40vw;
  left:10vw;
  }
  @media (min-width: 768px) {
    font-size: 7vw;
  top:30vw;
  left:7vw;
  }
  @media (min-width: 992px) {
    font-size: 5vw;
  top:30vw;
  left:10vw;
  }
  @media (min-width: 1200px) {
    font-size: 5vw;
  top:20vw;
  left:10vw;
  }
  @media (min-width: 1600px) {
    font-size: 4vw;
  top:20vw;
  left:10vw;
  }
  }
`;

export default HeroTitle;

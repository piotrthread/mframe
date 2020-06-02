import React from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

import Heading from "./components/Heading/Heading";
import Menu from "./components/Menu/Menu";
import AboutUs from "./components/AboutUs/AboutUs";
import Container from "./components/Container/Container";
import Video from "./components/Video/Video";
import Visuals from "./components/Visuals/Visuals";
import Possibilities from "./components/Possibilities/Possibilities";

const Spacer = styled.div`
  height: 70px;
`;
const VideoWrapper = styled.div`
  height: 50vw;
  overflow: hidden;
  position: relative;
  @media (min-width: 1075px) {
    height: 42vw;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Spacer />
      <VideoWrapper>
        <Video
          loop
          muted={true}
          autoPlay={true}
          playsInline={true}
          width="100vw"
          height="auto"
        >
          <source src="http://adsystem.pl/video/MFRAME.mov" type="video/mp4" />
        </Video>
      </VideoWrapper>
      <Container>
        <Heading bold="O" thin="nas" />
      </Container>
      <AboutUs />
      <Container>
        <Heading bold="Wizualizacje" thin="mframe" />
      </Container>
      <Container>
        <Visuals />
      </Container>
      <Container>
        <Heading bold="Możliwości" thin="mframe" />
      </Container>
      <Container>
      <Possibilities/>
      </Container>
      <Container>
        <Heading bold="Realizacje" thin="mframe" />
      </Container>
      <Container>
        <Visuals />
      </Container>
    </>
  );
};

export default App;

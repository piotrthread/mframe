import React from "react";
import styled from "styled-components";

import Heading from "../Heading/Heading";
import Menu from "../Menu/Menu";
import AboutUs from "../AboutUs/AboutUs";
import Container from "../Container/Container";
import Video from "../Video/Video";
import Visuals from "../Visuals/Visuals";
import Possibilities from "../Possibilities/Possibilities";
import Footer from "../Footer/Footer";
import Realizations from "../Realizations/Realizations";
import Animage from "../Animage/Animage";
import AboutMframe from "../AboutMframe/AboutMframe";

const Spacer = styled.div`
  height: 75px;
`;
const VideoWrapper = styled.div`
  height: 45vw;
  overflow: hidden;
  position: relative;
  @media (min-width: 1075px) {
    height: 42vw;
  }
`;

const LandingPage = () => {
  return (
    <>
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
              <source
                src="http://adsystem.pl/video/MFRAME.mp4"
                type="video/mp4"
              />
            </Video>
          </VideoWrapper>
          <Container>
            <Heading bold="O" thin="systemie" />
          </Container>
          <AboutMframe/>
          <Container>
            <Heading bold="Wizualizacje" thin="mframe" />
            <Visuals />
            <Heading bold="Możliwości" thin="mframe" />
            <Animage />
            <Possibilities />
            <Heading bold="Realizacje" thin="mframe" />
            <Realizations />
            <Heading bold="O" thin="nas" />
          </Container>
          <AboutUs />
          <Footer />
    </>
  );
};

export default LandingPage;

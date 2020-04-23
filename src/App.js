import React from "react";
import GlobalStyle from "./GlobalStyle";

import Heading from "./components/Heading/Heading";
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Container from "./components/Container/Container";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Hero />
      <Container>
        <Heading bold="O" thin="nas" />
      </Container>

      <AboutUs />
      <Container>
        <Heading bold="Możliwości" thin="mframe" />
      </Container>

      {/* 
      <Heading bold="Realizacje" />
      <Heading bold="Folmularz" thin="kontaktowy" /> */}

      {/* <Menu />
      <TopMargin />
      
      
      <Container>
        <Video controls autoPlay={true} muted width="100vw" height="auto">
          <source src="http://adsystem.pl/video/MFRAME.mov" type="video/mp4" />
        </Video>
      </Container>
      <Gallery />
      <Possibilities />
      <Footer /> */}
    </>
  );
};

export default App;

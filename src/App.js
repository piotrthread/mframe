import React from "react";
import GlobalStyle from "./GlobalStyle";

import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import TopMargin from "./components/Hero/TopMargin";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Video from "./components/Video/Video";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Possibilities from "./components/Possibilities/Possibilities";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <TopMargin />
      <Hero />
      <AboutUs />
      <Container>
        <Video controls autoPlay={true} muted width="100vw" height="auto">
          <source src="http://adsystem.pl/video/MFRAME.mov" type="video/mp4" />
        </Video>
      </Container>
      <Gallery />
      <Possibilities />
      <Footer />
    </>
  );
};

export default App;

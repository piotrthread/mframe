import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

import Heading from "./components/Heading/Heading";
import Menu from "./components/Menu/Menu";
import AboutUs from "./components/AboutUs/AboutUs";
import Container from "./components/Container/Container";
import Video from "./components/Video/Video";
import Visuals from "./components/Visuals/Visuals";
import Possibilities from "./components/Possibilities/Possibilities";
import Footer from "./components/Footer/Footer";
import Realizations from "./components/Realizations/Realizations";
import Animage from "./components/Animage/Animage";
import AboutMframe from "./components/AboutMframe/AboutMframe";
import StateProvider from "./StateProvider";
import Modal from "./components/Modal/Modal";
import { modals } from "./data";

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

const App = () => {
  return (
    <StateProvider>
      <GlobalStyle />
      <Router>
      <Route path="/akcesoria">
        <Modal modal={modals["akcesoria"]}/>
        </Route>
      <Route path="/wyposazenie">
        <Modal modal={modals["wyposazenie"]}/>
        </Route>
      <Route path="/kasetony">
        <Modal modal={modals["kasetony"]}/>
        </Route>
      <Route path="/podloga">
        <Modal modal={modals["podloga"]}/>
        </Route>
      <Route path="/podwieszane">
        <Modal modal={modals["podwieszane"]}/>
        </Route>
      <Route path="/uslugi">
        <Modal modal={modals["uslugi"]}/>
        </Route>
        <Route exact path="/">
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
          <AboutMframe />
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
        </Route>
      </Router>
    </StateProvider>
  );
};

export default App;

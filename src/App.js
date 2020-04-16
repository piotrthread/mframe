import React from "react";
import GlobalStyle from "./GlobalStyle";

import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import TopMargin from "./components/Hero/TopMargin";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <TopMargin />
      <Hero />
      <AboutUs />
    </>
  );
};

export default App;

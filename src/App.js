import React from "react";
import GlobalStyle from "./GlobalStyle";

import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import TopMargin from "./components/Hero/TopMargin";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <TopMargin />
      <Hero />
    </>
  );
};

export default App;

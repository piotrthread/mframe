import React from "react";
import GlobalStyle from "./GlobalStyle";

import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Hero />
    </>
  );
};

export default App;

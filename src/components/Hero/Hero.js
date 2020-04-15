import React from "react";

import HeroWrapper from "./HeroWrapper";
import HeroTitle from "./HeroTitle";
import HeroButton from "./HeroButton";
import Container from "./Container";

const Hero = () => {
  return (
    <HeroWrapper>
      <Container>
        <HeroTitle>M-Frame</HeroTitle>
        <HeroTitle secondary>Mobilne zabudowy targowe.</HeroTitle>
      </Container>
      <HeroButton>WIĘCEJ</HeroButton>
    </HeroWrapper>
  );
};

export default Hero;

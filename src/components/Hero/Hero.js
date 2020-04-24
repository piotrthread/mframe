import React from "react";
import styled from "styled-components";

import HeroWrapper from "./HeroWrapper";
import HeroTitle from "./HeroTitle";
import Button from "../Button/Button";

const Thin = styled.span`
  font-weight: 200;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroTitle>
        Mobilne <Thin>zabudowy targowe.</Thin>
      </HeroTitle>
      <Button white>WIĘCEJ +</Button>
      {/* <Container> */}
      {/* <HeroTitle>M-Frame</HeroTitle>
        <HeroTitle secondary>Mobilne zabudowy targowe.</HeroTitle>
      </Container>
      <HeroButton>WIĘCEJ</HeroButton> */}
    </HeroWrapper>
  );
};

export default Hero;

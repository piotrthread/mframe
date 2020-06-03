import React from "react";
import styled from "styled-components";

import AboutWrapper from "./AboutWrapper";
import Paragraph from "./Paragraph";
import Image from "./Image";
import VerticalContainer from "./VerticalContainer";

const ImageMobile = styled.img`
  position: absolute;
  bottom: -165px;
  width: 100%;
  display: block;
  margin-bottom: 50px;
  padding: 0 25px;
  @media (min-width: 768px) {
    padding: 0 50px;
  }
  @media (min-width: 992px) {
    padding: 0 130px;
    height: 800px;
  }
  @media (min-width: 1050px) {
    display: none;
  }
`;
const ImgWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  margin-bottom: 25px;
  position: relative;
  @media (min-width: 440px) {
    height: 50vw;
  }
  @media (min-width: 658px) {
    height: 400px;
  }
  @media (min-width: 1050px) {
    display: none;
  }
`;

const AboutUs = () => {
  return (
    <AboutWrapper>
      <ImgWrapper>
        <ImageMobile src="./images/about.jpg" />
      </ImgWrapper>
      <Image src="./images/about.jpg" />
      <VerticalContainer>
        <Paragraph>
          Adsystem to jakość i wieloletnie doświadczenie, którym chętnie
          dzielimy się ze stale rosnącą rzeszą klientów. Materiały reklamowe i
          rozwiązania dla marketingu są naszą największą pasją. Wszystkie
          oferowane systemy wystawiennicze cechuje innowacyjność i skrupulatne
          zaprojektowanie spełniające najśmielsze wizje i oczekiwania. W naszej
          szerokiej i nowoczesnej ofercie znajdziecie też sprawdzone standy
          reklamowe, rollupy i stojaki.
        </Paragraph>
        <Paragraph>
          Marka Adsystem to także kompleksowo wykonane stoiska targowe. Ich cena
          jest zawsze doskonale skorelowana z jakością i materiałem użytym w
          produkcji. Jeżeli więc potrzebna ci solidna ścianka reklamowa,
          efektowny roll up, wszechstronny stand czy funkcjonalny stojak na
          ulotki, zapoznaj się z asortymentem na stronie lub skontaktuj się z
          nami. Służymy swoją pomocą przy wyborze najlepszych rozwiązań!
        </Paragraph>
        {/* <Button>WIĘCEJ +</Button> */}
      </VerticalContainer>
    </AboutWrapper>
  );
};

export default AboutUs;

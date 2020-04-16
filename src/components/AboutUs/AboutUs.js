import React from "react";

import AboutWrapper from "./AboutWrapper";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const AboutUs = () => {
  return (
    <AboutWrapper>
      <Heading>O nas</Heading>

      <Paragraph>
        Adsystem to jakość i wieloletnie doświadczenie, którym chętnie dzielimy
        się ze stale rosnącą rzeszą klientów. Materiały reklamowe i rozwiązania
        dla marketingu są naszą największą pasją. Wszystkie oferowane systemy
        wystawiennicze cechuje innowacyjność i skrupulatne zaprojektowanie
        spełniające najśmielsze wizje i oczekiwania. W naszej szerokiej i
        nowoczesnej ofercie znajdziecie też sprawdzone standy reklamowe, rollupy
        i stojaki.
        <br />
        <br />
        Marka Adsystem to także kompleksowo wykonane stoiska targowe. Ich cena
        jest zawsze doskonale skorelowana z jakością i materiałem użytym w
        produkcji. Jeżeli więc potrzebna ci solidna ścianka reklamowa, efektowny
        roll up, wszechstronny stand czy funkcjonalny stojak na ulotki, zapoznaj
        się z asortymentem na stronie lub skontaktuj się z nami. Służymy swoją
        pomocą przy wyborze najlepszych rozwiązań!
      </Paragraph>
    </AboutWrapper>
  );
};

export default AboutUs;

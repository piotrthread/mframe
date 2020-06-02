import React from "react";
import styled from "styled-components"
import Button from "../Button/Button";

const Paragraph = styled.p`
font-weight: 300;
  text-align: justify;
  font-size: 15px;
  text-indent: 50px;
  margin:50px 0;
`;

const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
`;

const AboutMframe = () => (
  <Wrapper>
    <Paragraph>Mframe to jeden system, ale wiele zastosowań. Dzięki modułom możemy zmieniać układ ścian dopasowując się do posiadanej przestrzeni targowej. Dzięki trwałości i solidności konstrukcji, możliwe jest wielokrotne używanie tego samego systemu. W razie potrzeby w dowolnym  wymienić jedynie sam wydruk, aby uzyskać doskonały produkt i zminimalizować koszty. Wypełnienie ramek stanowi nadruk na płycie pcv lub na materiale poliestrowym. Stoisko jesteśmy w stanie zmontować bez ingerencji narzędzi, a sama konstrukcja wykonana jest z aluminium. Konstrukcja pozwala nam użyć wyobraźni, i zaaranżować nasze stoisko w wybrany przez nas sposób. Konstrukcje powstałe z tego sytemu potrafią być naprawdę imponujące.
    Największym plusem jest to, że po wszystkim wystarczy zdemontować stoisko i... szykować się na kolejny event. </Paragraph>
    <Button>+WIĘCEJ</Button>
  </Wrapper>
);

export default AboutMframe;

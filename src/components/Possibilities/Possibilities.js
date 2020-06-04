import React, { useContext } from "react";
import Context from "../../context";
import styled from "styled-components";

import HeadingSmall from "../HeadingSmall/HeadingSmall";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  flex-wrap: wrap;
  margin-bottom: -50px;
`;

const Paragraph = styled.p`
  font-weight: 300;
  text-align: justify;
  font-size: 15px;
`;

const Img = styled.img`
  width: 100%;
`;

const Feature = styled.div`
  flex-basis: 33.3333%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em;
  margin-bottom: 50px;
  cursor: pointer;
  @media (max-width: 920px) {
    flex-basis: 50%;
  }
  @media (max-width: 545px) {
    flex-basis: 99.99999%;
  }
`;

const Possibilities = () => {
  const {dispatch} = useContext(Context);
  return (
    <Wrapper>
      <Feature onClick={()=>dispatch("SHOW_MODAL","akcesoria")}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Akcesoria" />
        <Paragraph>
          oświetlenie LED, półka, panele na zawieszki, uchwyty TV, kantorek,
          łuki
        </Paragraph>
      </Feature>
      <Feature onClick={()=>dispatch("SHOW_MODAL","wyposazenie")}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Wyposażenie" thin="stoiska" />
        <Paragraph>
          logotypy ze styroduru, logotypy podświetlane, uchwyty na katalogi,
          ekspozycja produktów klienta, meble, lady
        </Paragraph>
      </Feature>
      <Feature onClick={()=>dispatch("SHOW_MODAL","kasetony")}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Kasetony" thin="LED" />
        <Paragraph>kaseton LMD, dynamic Lightbox, led skin</Paragraph>
      </Feature>
      <Feature onClick={()=>dispatch("SHOW_MODAL","podloga")}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Podłoga" thin="systemowa" />
        <Paragraph>panele jednokolorowe, drukowane, wykładzina</Paragraph>
      </Feature>
      <Feature onClick={()=>dispatch("SHOW_MODAL","podwieszane")}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Systemy" thin="Podwieszane" />
        <Paragraph>vario, kaseton, quadro</Paragraph>
      </Feature>
      <Feature onClick={()=>dispatch("SHOW_MODAL","uslugi")}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Usługi" />
        <Paragraph>
          logistyka, montaż, support, magazynowanie, demontaż, stoisko 'pod
          klucz'
        </Paragraph>
      </Feature>
    </Wrapper>
  );
};

export default Possibilities;

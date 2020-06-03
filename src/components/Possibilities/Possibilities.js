import React, { useState } from "react";
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
const ModalWrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  padding-top: 130px;
`;

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid ${(props) => (props.white ? "white" : "black")};
  background-color: rgba(0, 0, 0, 0);
  padding: 25px 40px;
  letter-spacing: 0.5px;
  cursor: pointer;
  max-width: 155px;
  outline: none;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 50px;
  color: ${(props) => (props.white ? "white" : "black")};
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.6;
  }
`;

const Possibilities = () => {
  const [modalVisible, setModal] = useState(false);
  const showModal = () => setModal(true);
  const hideModal = () => setModal(false);
  return (
    <Wrapper>
      {modalVisible ? (
        <ModalWrapper>
          <Button onClick={hideModal}>HIDE +</Button>
        </ModalWrapper>
      ) : null}
      <Feature onClick={showModal}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Akcesoria" />
        <Paragraph>
          oświetlenie LED, półka, panele na zawieszki, uchwyty TV, kantorek,
          łuki
        </Paragraph>
      </Feature>
      <Feature onClick={showModal}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Wyposażenie" thin="stoiska" />
        <Paragraph>
          logotypy ze styroduru, logotypy podświetlane, uchwyty na katalogi,
          ekspozycja produktów klienta, meble, lady
        </Paragraph>
      </Feature>
      <Feature onClick={showModal}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Kasetony" thin="LED" />
        <Paragraph>kaseton LMD, dynamic Lightbox, led skin</Paragraph>
      </Feature>
      <Feature onClick={showModal}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Podłoga" thin="systemowa" />
        <Paragraph>panele jednokolorowe, drukowane, wykładzina</Paragraph>
      </Feature>
      <Feature onClick={showModal}>
        <Img src="./images/placeholder1x1.jpg" />
        <HeadingSmall bold="Systemy" thin="Podwieszane" />
        <Paragraph>vario, kaseton, quadro</Paragraph>
      </Feature>
      <Feature onClick={showModal}>
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

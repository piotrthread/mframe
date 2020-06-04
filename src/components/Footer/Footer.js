import React from "react";
import styled from "styled-components";
import FooterWrapper from "./FooterWrapper";

const MenuLogo = styled.span`
  font-size: 200px;
  font-weight: 900;
  color: white;
  position: absolute;
  top: -40px;
  right: 25px;
`;
const Paragraph = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: white;
  margin-top: 140px;
`;
const Adress = styled.p`
  color: white;
  font-weight: 300;
  font-size: 15px;
  margin-top: 25px;
`;
const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top:25px;
`;
const Icon = styled.img`
  width: 40px;
  height:40px;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <MenuLogo>a.</MenuLogo>
      <Paragraph>Adsystem Sp. z o.o.</Paragraph>
      <Adress>
        Bielany Wrocławskie,
        <br />
        ul. Atramentowa 11
        <br />
        55-040 Kobierzyce
        <br />
        <br />
        tel. +48 672 672 000
        <br />
        <br />
        Dział handlowy: <br />
        sales@adsystem.pl
        <br />
        <br />
        Biuro: <br />
        office@adsystem.pl
      </Adress>
      <SocialContainer>
        <Icon src="./images/facebook.png" />
        <Icon src="./images/youtube.png" />
        <Icon src="./images/linkedin.png" />
        <Icon src="./images/instagram.png" />
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;

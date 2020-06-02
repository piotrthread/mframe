import React from "react";
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

const Title = styled.h4``;

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
  @media (max-width: 920px) {
    flex-basis: 50%;
  }
  @media (max-width: 545px) {
    flex-basis: 99.99999%;
  }
`;

const Possibilities = () => {
  return (
    <Wrapper>
      <Feature>
        <Img src="https://via.placeholder.com/300" />
        <HeadingSmall bold="Kasetony" thin="LED" />
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est unde quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://via.placeholder.com/300" />
        <HeadingSmall bold="Podłoga" />
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          iste ex officiis amet dolorum dolores, qui libero est unde magni modi
          optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://via.placeholder.com/300" />
        <HeadingSmall bold="Kaseton" thin="Dynamiczny" />
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam amet dolorum dolores, qui libero est unde
          magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://via.placeholder.com/300" />
        <HeadingSmall bold="LED" thin="Skin" />
        <Paragraph>
          Lorem, ipsum dolor sit amet Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est unde magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://via.placeholder.com/300" />
        <HeadingSmall bold="Systemy" thin="Podwieszane" />
        <Paragraph>
          Lorem, ipsum dolor sit  adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est unde magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://via.placeholder.com/300" />
        <HeadingSmall bold="Logo" thin="Styrodur" />
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est  quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://via.placeholder.com/300" />
        <HeadingSmall bold="Oświetlenie" />
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
           magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://via.placeholder.com/300" />
        <HeadingSmall bold="Meble" />
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam  amet dolorum dolores, qui
          libero est unde magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://via.placeholder.com/300" />
        <HeadingSmall bold="Montaż" thin="Produktów" />
        <Paragraph>
          Lorem, ipsum dolor  adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est unde magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
    </Wrapper>
  );
};

export default Possibilities;

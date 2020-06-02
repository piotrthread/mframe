import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  flex-wrap: wrap;
`;

const Paragraph = styled.p`
  font-weight: 300;
  text-align: justify;
  font-size: 15px;
  padding: 5px;
`;
const Title = styled.h4`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  margin:15px 0;
`;

const Img = styled.img`
  width: 100%;
`;

const Feature = styled.div`
  flex-basis: 33.3333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:.5em;
`;

const Possibilities = () => {
  return (
    <Wrapper>
      <Feature>
        <Img src="https://picsum.photos/300/300?random=1" />
        <Title>Lorem Ipsum</Title>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est unde magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://picsum.photos/300/300?random=2" />
        <Title>Lorem Ipsum</Title>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est unde magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://picsum.photos/300/300?random=3" />
        <Title>Lorem Ipsum</Title>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est unde magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://picsum.photos/300/300?random=4" />
        <Title>Lorem Ipsum</Title>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est unde magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://picsum.photos/300/300?random=5" />
        <Title>Lorem Ipsum</Title>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est unde magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
      <Feature>
        <Img src="https://picsum.photos/300/300?random=6" />
        <Title>Lorem Ipsum</Title>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
          libero est unde magni modi optio quos maxime placeat veniam!
        </Paragraph>
      </Feature>
    </Wrapper>
  );
};

export default Possibilities;

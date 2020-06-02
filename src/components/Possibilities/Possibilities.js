import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Paragraph = styled.p`
  font-weight: 300;
  text-align: justify;
  text-indent: 50px;
  margin-bottom: 35px;
  margin-top: 35px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
width:32%;
margin:0 5px;
`;

const Possibilities = () => {
  return (
    <Wrapper>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
        vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
        libero est unde magni modi optio quos maxime placeat veniam! Laboriosam
        non tempora quod ut, deleniti dolore facere rem fugiat sit optio
        incidunt libero est vitae quos doloremque aut ipsa reiciendis a
        distinctio ex ad, ullam illum. Corporis, impedit omnis? Nemo voluptates
        nostrum accusamus a maxime ut error ex sint beatae, consectetur,
        architecto et dignissimos quia corporis amet. Ipsam laudantium quam
        cumque consectetur voluptates eligendi beatae corrupti velit autem amet!
        Reprehenderit, eos eius quia, deserunt explicabo ut iusto expedita
        consequatur amet facere excepturi et, quaerat recusandae maiores ea sit
        accusamus!
      </Paragraph>
      <ImgWrapper>
        <Img src="https://picsum.photos/300/300?random=1" />
        <Img src="https://picsum.photos/300/300?random=2" />
        <Img src="https://picsum.photos/300/300?random=3" />
      </ImgWrapper>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
        vitae laudantium quisquam iste ex officiis amet dolorum dolores, qui
        libero est unde magni modi optio quos maxime placeat veniam! Laboriosam
        non tempora quod ut, deleniti dolore facere rem fugiat sit optio
        incidunt libero est vitae quos doloremque aut ipsa reiciendis a
        distinctio ex ad, ullam illum. Corporis, impedit omnis? Nemo voluptates
        nostrum accusamus a maxime ut error ex sint beatae, consectetur,
        architecto et dignissimos quia corporis amet. Ipsam laudantium quam
        cumque consectetur voluptates eligendi beatae corrupti velit autem amet!
        Reprehenderit, eos eius quia, deserunt explicabo ut iusto expedita
        consequatur amet facere excepturi et, quaerat recusandae maiores ea sit
        accusamus!
      </Paragraph>
      <Button>WIĘCEJ</Button>
    </Wrapper>
  );
};

export default Possibilities;

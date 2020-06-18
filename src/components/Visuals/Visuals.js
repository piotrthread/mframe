import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MasonryWrapper = styled.div`
  column-count: 2;
  column-gap: 0.6em;
  @media (min-width: 1200px) {
    column-count: 3;
  }
  @media (min-width: 1600px) {
    column-count: 4;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 1s ease;
  @media (min-width: 1250px) {
    height: 100vh;
  }
  @media (min-width: 1250px) {
    height: 650px;
  }
  @media (min-width: 1600px) {
    height: 800px;
  }

  &::before {
    display: block;
    content: "";
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 50px;
    background-color: white;
    bottom: 0;
  }
  &::after {
    display: block;
    content: "";
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 20px;
    background: url("./images/arrow.png") no-repeat;
    background-size: contain;
    background-position: center;
    bottom: 5px;
  }
`;

const Image = styled.img`
  display: inline-block;
  margin: 0 0 0.3em;
  width: 100%;
  z-index: 9999;
  filter: saturate(0) contrast(0.7) brightness(1.2);
  transition: filter 0.2s ease;
  &:hover {
    filter: saturate(1) contrast(1) brightness(1);
  }
`;

const Visuals = () => {
  let history = useHistory();
  const pics = Array(22).fill(null);
  return (
    <Container onClick={() => history.push("/wizualizacje")}>
      <MasonryWrapper  id="wizualizacje">
        {pics.map((element, index) => {
          return (
            <Image
              src={`./images/wizualizacje/mframe_ (${index + 1}).jpg`}
              alt={index}
              key={index}
            />
          );
        })}
      </MasonryWrapper>
    </Container>
  );
};

export default Visuals;

import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const MasonryWrapper = styled.div`
  column-count: 1;
  column-gap: 0.6em;
  @media (min-width: 900px) {
    column-count: 2;
  }
  @media (min-width: 1600px) {
    column-count: 2;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  overflow: hidden;
  position: relative;
  cursor: pointer;
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
  margin: 0 0 0.6em;
  width: 100%;
  z-index: 9999;
  filter: saturate(0) contrast(0.7) brightness(1.2);
  transition: filter 0.2s ease;
  &:hover {
    filter: saturate(1) contrast(1) brightness(1);
  }
`;

const Realizations = () => {
  let history = useHistory();
  const pics = Array(22).fill(null);
  return (
    <Container onClick={() => history.push("/realizacje")}>
      <MasonryWrapper id="realizacje">
        {pics.map((element, index) => {
          return (
            <Image
              key={index}
              src={`./images/realizacje/mframe_ (${index + 1}).jpg`}
              alt={index + 1}
            />
          );
        })}
      </MasonryWrapper>
    </Container>
  );
};

export default Realizations;

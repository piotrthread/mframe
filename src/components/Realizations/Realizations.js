import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../context";

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
  @media (min-width: 1250px) {
    height: 100vh;
  }
  @media (min-width: 1250px) {
    height: 650px;
  }
  @media (min-width: 1600px) {
    height: 800px;
  }
  /* &::before {
    display: block;
    content: "";
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 150px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 40%,
      rgba(255, 255, 255, 0.7) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    bottom: 0;
  } */
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
`;

const Realizations = () => {
  const pics = Array(22).fill(null);
  const { dispatch } = useContext(Context);
  return (
    <Container onClick={() => dispatch("SHOW_REALIZATIONS_MODAL")}>
      <MasonryWrapper>
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

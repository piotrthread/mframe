import React from "react";
import styled from "styled-components";

const MasonryWrapper = styled.div`
  column-count: 3;
  column-gap: 0.6em;
`;

const Image = styled.img`
  display: inline-block;
  margin: 0 0 0.3em;
  width: 100%;
`;

const Visuals = () => {
  const pics = Array(25).fill(null);
  return (
    <MasonryWrapper>
      {pics.map((element, index) => {
        return (
          <Image
            src={`./images/wizualizacje/mframe_ (${index+1}).jpg`}
            alt={index}
          />
        );
      })}
    </MasonryWrapper>
  );
};

export default Visuals;

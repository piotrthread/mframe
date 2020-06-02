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

const Realizations = () => {
  const pics = Array(22).fill(null);
  return (
    <MasonryWrapper>
      {pics.map((element, index) => {
        return (
          <Image key={index}
            src={`./images/realizacje/mframe_ (${index+1}).jpg`}
            alt={index+1}
          />
        );
      })}
    </MasonryWrapper>
  );
};

export default Realizations;

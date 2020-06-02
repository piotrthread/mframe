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
  const pics = Array(15).fill(null);
  return (
    <MasonryWrapper>
      {pics.map((element, index) => {
        let width = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
        let height = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
        return (
          <Image
            src={`https://picsum.photos/${width}00/${height}00?random=${
              index + 1
            }`}
            alt={index}
          />
        );
      })}
    </MasonryWrapper>
  );
};

export default Visuals;

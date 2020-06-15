import React, { useContext } from "react";
import Context from "../../context";
import styled from "styled-components";

import HeadingSmall from "../HeadingSmall/HeadingSmall";
import {modals} from "../../data";

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
  width:100%;
`;

const Img = styled.img`
  width: 100%;
`;

const Feature = styled.div`
  flex-basis: 33.3333%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.5em;
  margin-bottom: 50px;
  cursor: pointer;
  @media (max-width: 920px) {
    flex-basis: 50%;
  }
  @media (max-width: 545px) {
    flex-basis: 99.99999%;
  }
`;

const Possibilities = () => {
  const { dispatch } = useContext(Context);
  return (
    <Wrapper>
      {Object.keys(modals).map((id,index)=>{
        return(<Feature onClick={() => dispatch("SHOW_MODAL", id)} key={id}>
        <Img src={modals[id].images[0]} />
        <HeadingSmall bold={modals[id].name} thin={modals[id].subname?modals[id].subname:null} />
        <Paragraph>
      {modals[id].tags}
        </Paragraph>
      </Feature>);
      })}
    </Wrapper>
  );
};

export default Possibilities;

import React, { useContext } from "react";
import Context from "../../context";
import styled from "styled-components";

import Heading from "../Heading/Heading";

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: none;
  border: 0;
  position: absolute;
  top: 0;
  right: 0;
  margin: 25px;
  color: ${(props) => (props.white ? "white" : "black")};
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.6;
  }
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
`;

const ModalWrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  padding-top: 0;
  overflow: scroll;
`;
const Smaller = styled.div`
  transform: scale(0.8);
  position: absolute;
  top: 0;
  left: 15px;
`;

const VisualsModal = () => {
  const { state, dispatch } = useContext(Context);
  const hideModal = () => dispatch("HIDE_VISUALS_MODAL");
  return (
    <>
      {state.visualsModalVisible ? (
        <ModalWrapper>
          <Smaller>
            <Heading bold="Wizualizacje" thin="mframe" />
          </Smaller>
          <Button onClick={hideModal}>
            <Icon src="./images/close.png" />
          </Button>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default VisualsModal;

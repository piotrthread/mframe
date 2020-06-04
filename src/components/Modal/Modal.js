import React, { useContext} from "react";
import Context from "../../context";
import styled from "styled-components";

import {modals} from "../../data";

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: none;
  border:0;
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
height:20px;
width:20px;
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
  padding-top: 50px;
  overflow:scroll;
`;

const Modal = () => {
  const { state, dispatch } = useContext(Context);
  const hideModal = () => dispatch("HIDE_MODAL");
  const modal = modals[state.modalId];
  return (
    <>
      {state.modalVisible ? (
        <ModalWrapper>
          <h1>{modal.name}</h1>
          {modal.images.map((img,index)=><img src={img} alt={index}/>)}
      <p>{modal.info}</p>
          <Button onClick={hideModal}><Icon src="./images/close.png"/></Button>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Modal;

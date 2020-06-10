import React, { useContext } from "react";
import Context from "../../context";
import styled from "styled-components";

import Heading from "../Heading/Heading";

import { modals } from "../../data";

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
const SectionWrapper = styled.div`
  display: flex;
  height: 70vh;
  justify-content: flex-start;
  width: 100%;
`;
const Img = styled.img`
  height: 100%;
`;
const Paragraph = styled.p`
  padding: 50px;
  padding-right: 0;
  text-indent: 50px;
  text-align: justify;
`;

const Modal = () => {
  const { state, dispatch } = useContext(Context);
  const hideModal = () => dispatch("HIDE_MODAL");
  const modal = modals[state.modalId];
  return (
    <>
      {state.modalVisible ? (
        <ModalWrapper>
          <Heading
            bold={modal.name}
            thin={modal.subname ? modal.subname : null}
          />
          <SectionWrapper>
            {modal.images.map((img, index) => (
              <Img src={img} alt={index} />
            ))}
            <Paragraph>{modal.info}</Paragraph>
          </SectionWrapper>
          <Button onClick={hideModal}>
            <Icon src="./images/close.png" />
          </Button>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Modal;

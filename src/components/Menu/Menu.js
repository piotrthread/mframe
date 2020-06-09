import React, { useContext } from "react";
import Context from "../../context";

import MenuWrapper from "./MenuWrapper";
import MenuLogo from "./MenuLogo";
import HamburgerIcon from "./HamburgerIcon";
import HamburgerButton from "./HamburgerButton";
import MenuListVertical from "./MenuListVertical";
import MenuListHorizontal from "./MenuListHorizontal";
import NavWrapper from "./NavWrapper";
import Modal from "../Modal/Modal";
import VisualsModal from "../VisualsModal/VisualsModal";
import RealizationsModal from "../RealizationsModal/RealizationsModal";

const Menu = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <NavWrapper>
      <Modal />
      <VisualsModal />
      <RealizationsModal />
      <MenuWrapper>
        <MenuLogo>mframe.</MenuLogo>
        <MenuListHorizontal />
        <HamburgerButton onClick={() => dispatch("TOGGLE_MENU")}>
          {state.menuActive ? <HamburgerIcon active /> : <HamburgerIcon />}
        </HamburgerButton>
      </MenuWrapper>
      <MenuListVertical/>
    </NavWrapper>
  );
};

export default Menu;

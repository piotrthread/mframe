import React, { useState } from "react";

import MenuWrapper from "./MenuWrapper";
import MenuLogo from "./MenuLogo";
import HamburgerIcon from "./HamburgerIcon";
import HamburgerButton from "./HamburgerButton";
import MenuListVertical from "./MenuListVertical";
import MenuListHorizontal from "./MenuListHorizontal";

const Menu = () => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <MenuWrapper>
        <MenuLogo>MFRAME</MenuLogo>
        <MenuListHorizontal />
        <HamburgerButton onClick={() => setActive(!isActive)}>
          {isActive ? <HamburgerIcon active /> : <HamburgerIcon />}
        </HamburgerButton>
      </MenuWrapper>
      {isActive ? <MenuListVertical /> : null}
    </>
  );
};

export default Menu;

import React, { useState } from "react";

import MenuWrapper from "./MenuWrapper";
import MenuLogo from "./MenuLogo";
// import MenuSublogo from "./MenuSublogo";
import HamburgerIcon from "./HamburgerIcon";
import HamburgerButton from "./HamburgerButton";
import MenuListVertical from "./MenuListVertical";
import MenuListHorizontal from "./MenuListHorizontal";
import NavWrapper from "./NavWrapper";

const Menu = () => {
  const [isActive, setActive] = useState(false);
  return (
    <NavWrapper>
      <MenuWrapper>
        <MenuLogo>mframe.</MenuLogo>
        {/* <MenuSublogo>mobilne stoiska targowe</MenuSublogo> */}
        <MenuListHorizontal />

        <HamburgerButton onClick={() => setActive(!isActive)}>
          {isActive ? <HamburgerIcon active /> : <HamburgerIcon />}
        </HamburgerButton>
      </MenuWrapper>
      {isActive ? <MenuListVertical /> : null}
    </NavWrapper>
  );
};

export default Menu;

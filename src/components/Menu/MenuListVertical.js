import React, { useContext } from "react";
import Context from "../../context";

import VerticalListWrapper from "./VerticalListWrapper";
import VerticalListItem from "./VerticalListItem";

const MenuListVertical = () => {
  const { state } = useContext(Context);
  return (
    <VerticalListWrapper
      style={{
        right: state.menuActive ? 0 : "100vw",
      }}
    >
      <VerticalListItem>o nas</VerticalListItem>
      <VerticalListItem>o systemie</VerticalListItem>
      <VerticalListItem>wizualizacje</VerticalListItem>
      <VerticalListItem>realizacje</VerticalListItem>
      <VerticalListItem>możliwości</VerticalListItem>
      <VerticalListItem>kontakt</VerticalListItem>
    </VerticalListWrapper>
  );
};

export default MenuListVertical;

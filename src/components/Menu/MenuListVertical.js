import React from "react";

import VerticalListWrapper from "./VerticalListWrapper";
import VerticalListItem from "./VerticalListItem";

const MenuListVertical = () => {
  return (
    <VerticalListWrapper>
      <VerticalListItem>O NAS</VerticalListItem>
      <VerticalListItem>O SYSTEMIE</VerticalListItem>
      <VerticalListItem>WIZUALIZACJE</VerticalListItem>
      <VerticalListItem>REALIZACJE</VerticalListItem>
      <VerticalListItem>MOŻLIWOŚCI</VerticalListItem>
      <VerticalListItem>KONTAKT</VerticalListItem>
    </VerticalListWrapper>
  );
};

export default MenuListVertical;

import React from "react";

import HorizontalListWrapper from "./HorizontalListWrapper";
import HorizontalListItem from "./HorizontalListItem";

const MenuListHorizontal = () => {
  return (
    <HorizontalListWrapper>
      <HorizontalListItem>O NAS</HorizontalListItem>
      <HorizontalListItem>O SYSTEMIE</HorizontalListItem>
      <HorizontalListItem>WIZUALIZACJE</HorizontalListItem>
      <HorizontalListItem>REALIZACJE</HorizontalListItem>
      <HorizontalListItem>MOŻLIWOŚCI</HorizontalListItem>
      <HorizontalListItem>KONTAKT</HorizontalListItem>
    </HorizontalListWrapper>
  );
};

export default MenuListHorizontal;

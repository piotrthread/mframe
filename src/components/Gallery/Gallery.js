import React from "react";
import photos from "../../data/photos";
import Masonry from "../Masonry/Masonry";
import GalleryWrapper from "./GalleryWrapper";
import Heading from "../AboutUs/Heading";

const Gallery = () => {
  return (
    <GalleryWrapper>
      <Heading>Realizacje</Heading>
      <Masonry pictures={photos} />
    </GalleryWrapper>
  );
};

export default Gallery;

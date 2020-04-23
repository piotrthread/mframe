import React from "react";
import photos from "../../data/photos";
import Masonry from "../Masonry/Masonry";
import GalleryWrapper from "./GalleryWrapper";

const Gallery = () => {
  return (
    <GalleryWrapper>
      <Masonry pictures={photos} />
    </GalleryWrapper>
  );
};

export default Gallery;

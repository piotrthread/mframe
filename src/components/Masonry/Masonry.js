import React, { useEffect } from "react";

import Macy from "macy";

const Masonry = ({ pictures }) => {
  useEffect(() => {
    const masonry = new Macy({
      container: "#masonry",
      mobileFirst: true,
      columns: 1,
      breakAt: {
        400: 2,
        800: 3,
        1200: 4,
      },
      margin: {
        x: 10,
        y: 10,
      },
    });
  });

  return (
    <div id="masonry">
      {pictures.map(({ link, alt }, index) => (
        <img src={link} alt={alt} key={index} />
      ))}
    </div>
  );
};

export default Masonry;

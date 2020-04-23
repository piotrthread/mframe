import styled from "styled-components";

const Image = styled.div`
  background-image: url("./images/about.jpg");
  background-size: cover;
  background-position: center;
  width: 50%;
  display: none;
  @media (min-width: 865px) {
    display: block;
  }
  @media (min-width: 992px) {
    display: block;
  }
  @media (min-width: 1200px) {
    display: block;
  }
`;

export default Image;

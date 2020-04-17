import styled from "styled-components";

const GalleryWrapper = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 576px) {
    width: 80vw;
    padding: 0;
  }
  @media (min-width: 768px) {
    width: 70vw;
    padding: 0;
  }
  @media (min-width: 992px) {
    width: 60vw;
    padding: 0;
  }
`;

export default GalleryWrapper;

import styled from "styled-components";

const Video = styled.video`
  display: block;
  width: 100vw;
  max-height: 56.25vw;
  padding: 0 25px;
  margin-top: 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
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

export default Video;

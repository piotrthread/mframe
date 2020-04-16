import styled from "styled-components";

const Paragraph = styled.p`
  font-weight: 300;
  text-align: justify;
  padding: 0 25px;
  text-indent: 25px;
  @media (min-width: 576px) {
    width: 80vw;
  }
  @media (min-width: 768px) {
    width: 70vw;
  }
  @media (min-width: 992px) {
    width: 60vw;
  }
`;

export default Paragraph;

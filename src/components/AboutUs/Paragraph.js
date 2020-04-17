import styled from "styled-components";

const Paragraph = styled.p`
  font-weight: 300;
  text-align: justify;
  padding: 0 25px;
  text-indent: 25px;
  margin-bottom: 25px;
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

export default Paragraph;

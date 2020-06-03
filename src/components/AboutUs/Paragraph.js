import styled from "styled-components";

const Paragraph = styled.p`
  font-weight: 300;
  text-align: justify;
  text-indent: 50px;
  padding-left: 25px;

  @media (min-width: 768px) {
    padding-left: 50px;
  }
  @media (min-width: 865px) {
    padding-left: 50px;
  }
  @media (min-width: 992px) {
    padding-left: 130px;
  }
  @media (min-width: 1050px) {
    padding-left: 25px;
  }
  @media (min-width: 1200px) {
    padding-right: 130px;
  }
`;

export default Paragraph;

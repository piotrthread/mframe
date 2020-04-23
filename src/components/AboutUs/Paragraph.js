import styled from "styled-components";

const Paragraph = styled.p`
  font-weight: 300;
  text-align: justify;
  text-indent: 50px;
  margin-bottom: 50px;
  padding-left: 25px;

  @media (min-width: 768px) {
    padding-left: 100px;
  }
  @media (min-width: 992px) {
    padding-left: 150px;
  }
  @media (min-width: 1200px) {
    padding-left: 275px;
  }
`;

export default Paragraph;

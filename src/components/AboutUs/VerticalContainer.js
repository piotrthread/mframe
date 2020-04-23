import styled from "styled-components";

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding-right: 25px;
  width: 100%;
  @media (min-width: 768px) {
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
  }
  @media (min-width: 865px) {
    width: 50%;
  }
`;

export default VerticalContainer;

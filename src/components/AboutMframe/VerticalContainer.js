import styled from "styled-components";

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding-right: 25px;
  width: 100%;
  @media (min-width: 768px) {
    padding-right: 50px;
  }
  @media (min-width: 992px) {
    padding-right: 130px;
  }
  @media (min-width: 1050px) {
    padding-right: 50px;
    padding-bottom: 50px;
    width: 50%;
  }
`;

export default VerticalContainer;

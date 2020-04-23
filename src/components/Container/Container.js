import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 25px;
  @media (min-width: 768px) {
    padding: 0 100px;
  }
  @media (min-width: 992px) {
    padding: 0 150px;
  }
  @media (min-width: 1200px) {
    padding: 0 275px;
  }
`;

export default Container;

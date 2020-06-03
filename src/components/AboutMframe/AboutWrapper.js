import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 1050px) {
    flex-direction: row;
    min-height: 600px;
  }
`;

export default AboutWrapper;

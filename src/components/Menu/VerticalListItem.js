import styled from "styled-components";

const VerticalListItem = styled.li`
  color: white;
  background-color: black;
  font-weight: 300;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: #d7ff82;
  }
`;

export default VerticalListItem;

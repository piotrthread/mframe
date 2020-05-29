import styled from "styled-components";

const VerticalListItem = styled.li`
  color: black;
  background-color: white;
  font-weight: 900;
  font-size: 27px;
  display: flex;
  cursor: pointer;
  /* justify-content: center; */
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.4;
    padding-right: 10px;
  }

  /* color: black;
  background-color: white;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: #b6b6b6;
  } */
`;

export default VerticalListItem;

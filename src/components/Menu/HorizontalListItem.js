import styled from "styled-components";

const HorizontalListItem = styled.li`
  display: inline-block;
  color: white;
  background-color: black;
  font-weight: 300;
  font-size: 14px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-left: 1px solid #d7ff82;

  &:hover {
    color: #d7ff82;
  }
  &:first-child {
    border: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`;

export default HorizontalListItem;

import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  text-transform: uppercase;
  border: 1px solid lightblue;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;
  cursor: pointer;
  transition: 0.25s;
  margin-top: 40px;

  &:hover {
    filter: brightness(120%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
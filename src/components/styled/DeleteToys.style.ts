import styled from "styled-components";

export const DeleteToysWrapper = styled.button`
    display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  text-align: center;
  cursor: pointer;
  transition: 0.25s;
  margin-bottom: 20px;
  /* margin-top: 20px; */
  width: 100%;

  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  }
`
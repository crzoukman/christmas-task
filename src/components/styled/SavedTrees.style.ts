import styled from "styled-components";

export const SavedTreesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .btn {
     display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 16px;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  text-align: center;
  cursor: pointer;
  transition: 0.25s;
  /* margin-bottom: 20px;
  margin-top: 20px; */
  width: 100%;

  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  }

  .header {
    font-size: 24px;
  }
`

export const SavedTreesContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;

  .imgC {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 20px;
    position: relative;
    cursor: pointer;
    transition: 0.25s
    

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    &:hover {
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 2px;
    }
  }


`
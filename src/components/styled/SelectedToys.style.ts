import styled from "styled-components";

export const SelectedToysList = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
 
 

  .selectedItem {
    width: 80px;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    background-color: rgba(173,216,230, 0.4);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
 

    user-select: none;
   
    img {
      width: 70%;
      height: 70%;
      cursor: grab;
      
    }

    .toyCount {
      position: absolute;
      right: 6px;
      bottom: 6px;
      color: white;
      background: rgba(17,26,0, 0.7);
      padding: 8px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    
    .selectedItem {
      justify-self: center;
    }
  }


`;

export const SelectedToysItem = styled.li<{ countX: number }>`
  background-color: ${({ countX }) => (
    countX > 0 ? 'rgba(173,216,230,0.4) !important' : 'rgba(255, 0, 0, 0.2) !important'
  )};
`;
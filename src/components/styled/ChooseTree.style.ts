import styled from "styled-components";

export const ChooseTreeItem = styled.li<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center; 

  box-shadow: ${({ active }) => (
    active
      ? 'rgba(3, 102, 214, 0.3) 0px 0px 0px 2px'
      : 'rgba(0, 0, 0, 0.04) 0px 3px 5px'
  )};
  background-color: rgba(173,216,230, 0.4);
  border-radius: 10px;
  padding: 20px;

  /* opacity:  ${({ active }) => (
    active
      ? '1'
      : '0.5'
  )}; */
  
  cursor: pointer;
  
  border: ${({ active }) => (
    active ? 'unset' : 'unset'
    // rgba(17, 26, 0, 0.2)
  )};

  /* max-height: 200px; */

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
 
`;

export const ChooseTreeWrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`;

export const BigChooseTreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .tree-header {
    font-size: 24px;
  
  }
`;
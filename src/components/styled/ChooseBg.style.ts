import styled from "styled-components";

export const ChooseBgWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;



 
`;

export const BigChooseBgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .bg-header {
    font-size: 24px;
  }
`;

export const ChooseBgItem = styled.li<{ active: boolean }>`
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
   
  

    box-shadow: ${({ active }) => (
    active
      ? 'rgba(255,191,0, 1) 0px 0px 0px 2px'
      : 'rgba(0, 0, 0, 0.04) 0px 3px 5px'
  )};

  .choose-bg-img {
    width: 100%;

    opacity:  ${({ active }) => (
    active
      ? '1'
      : '.5'
  )};
  }
`;
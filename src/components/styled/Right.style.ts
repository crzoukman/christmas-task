import styled from 'styled-components';

export const RightWrapper = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 40px;

  background-color: rgba(173,216,230, 0.2);
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  .selectedToysWrapper {
    
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .selectedToysHeader {
    font-size: 24px;
  }
`;

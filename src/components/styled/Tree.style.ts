import styled from 'styled-components';

export const TreeC = styled.div`
  
  
  display: grid;


  grid-template-columns: 1fr 2fr 1fr;
  
  gap: 40px;

  
 

  @media (max-width: 1440px) {
    grid-template-columns: 3fr 1fr;
  }

  @media (max-width: 992px) {
      grid-template-columns: 1fr;
  }
`;


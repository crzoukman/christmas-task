import styled from "styled-components";

export const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(420px, 1fr) );
  grid-template-rows: repeat( auto-fit, 1fr );

  gap: 20px;
  
  width: 100%;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

   @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
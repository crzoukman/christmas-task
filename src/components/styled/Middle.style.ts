import styled from "styled-components";

export const BigMiddleWrapper = styled.div<{ srcX: string }>`
  height: 75vh;


  display: flex;
  justify-content: center;
  align-items: center;
 
  background-image: ${({ srcX }) => `url(${srcX})`};
  background-size: cover;
  background-repeat: no-repeat;
  
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  position: relative;
 
  .settings-w {
    position: absolute;
    z-index: 9999;
    top: 20px;
    left: 20px;
    
    cursor: pointer;
    background: rgba(231,239,242, 0.5);
    padding: 14px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    display: none;
    

    @media (max-width: 1440px) {
      display: inherit;
    }

    
  }

  .settings-i {
    width: 30px;
    height: 30px;
     transition: 1s;
     opacity: 0.8;
    &:hover {
      
        transform: rotate(360deg);
     
    }
  }


   @media (max-width: 992px) {
      height: 50vh;
    }
`;

export const MiddleWrapper = styled.div<{ srcX: string }>`
  position: relative;
  height: fit-content;
  width: 60%;

  

  @media (max-width: 992px) {
      width: 40%;
    }

   @media (max-width: 800px) {
      width: 50%;
    }  

  img {
    width: 100%;
    
   
    
    @media (max-width: 992px) {
     
    }
  }
`;
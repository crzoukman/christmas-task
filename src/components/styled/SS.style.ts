import styled from "styled-components";

export const SSWrapper = styled.div<{ isSnowOn: boolean, isSoundOn: boolean }>`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 20px 0;

  img {
    cursor: pointer;
    width: 40px;
    height: 40px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    padding: 10px;
    box-sizing: content-box;
    border-radius: 10px;
  }

  .ss-sound {

    filter: ${({ isSoundOn }) => (
    isSoundOn
      ? 'unset'
      : 'grayscale(100%) brightness(0.9)'
  )}  
  }

  .ss-snow {
   
    filter: ${({ isSnowOn }) => (
    isSnowOn
      ? 'unset'
      : 'grayscale(100%) brightness(0.9)'
  )}
  }

  .ss-back {
    margin-left: auto;
    display: none;
   

    @media (max-width: 1440px) {
      display: inherit;
    }
  }
`;
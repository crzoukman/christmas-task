import styled from 'styled-components';

export const Modal = styled.div<{ data: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 300px;
  
  /* transform: ${({ data }) => {
    return data ? 'translate(-50%, -50%)' : 'translate(-500%, -50%)';
  }}; */
  transform: translate(-50%, -250%);
  background-color: whitesmoke;
  z-index: 999; 

  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

  transition: 1s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  h2 {
    font-size: 36px;
  }

  button {
    font-size: 24px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    padding: 10px;
    width: 120px;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    background-color: whitesmoke;
    transition: 0.25s;

    &:hover {
      filter: brightness(110%);
    }
  }
`;

export const Dark = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.75;
  z-index: 998;
  transition: 0.5s;
`;
import styled from "styled-components";

export const LeftWrapper = styled.div`

  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: rgba(173,216,230, 0.2);
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transition 0.5s;

  .chooseTreeWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 40px;
  }

  
  @media (min-width: 1441px) {
    transform: translateX(0%) !important;
    display: flex !important;
  }

  @media (max-width: 1440px) {
    position: absolute;
    left: 20px;
    top: 15vh;
    width: 30vw;
    background-color: #e7eff2;
    z-index: 99999;
    transform: translateX(-200%);
    min-width: 400px;
    display: none;
  }

   @media (max-width: 1100px) {
    position: absolute;
    left: 20px;
    top: calc(18vh + 40px);
    width: 30vw;
    background-color: #e7eff2;
    z-index: 99999;
  }
`;

export const ResetBTN = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  text-align: center;
  cursor: pointer;
  transition: 0.25s;
  margin-bottom: 20px;
  margin-top: 20px;

  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
`;


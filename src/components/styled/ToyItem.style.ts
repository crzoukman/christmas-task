import styled from "styled-components";

export const LI = styled.li`
  position: relative;
  border-radius: 20px;
  padding: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: left;
  max-width: 420px;
  min-width: 420px;
  max-height: 350px;
  justify-self: center;

  @media (max-width: 1440px) {
    justify-self: center;
    min-width: 400px;
  }

  @media (max-width: 1426px) {
    min-width: 450px;
  }

   @media (max-width: 1300px) {
    min-width: 450px;
  }

  @media (max-width: 992px) {
    min-width: 300px;
    justify-self: unset;
  }

  @media (max-width: 750px) {
    min-width: 450px;
    justify-self: center;
  }

  .li-body {
    display: flex;
    justify-content: space-between;
  }

  .li-img {
  
  }

  .li-data {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  img {
    width: 80px;
    height: 80px;
  }

  .bookmark {

  }

  .toy-header {
    font-size: 24px;
    margin-bottom: 30px;
    width: max-content;
  }

  .toy-p {
    font-size: 18px;
  }
`;

export const Bookmarks = styled.div<{ clicked: boolean }>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 40px;
    background-color: ${({ clicked }) => clicked ? 'gold' : 'lightblue'};
    clip-path: ellipse(300% 100% at -200% 100%);
    cursor: pointer;
    border-bottom-left-radius: 20px;

    &:hover {
     
    }
`;
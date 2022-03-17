import styled from 'styled-components';

export const InputC = styled.div`
  position: relative;

  .search-cross {
    position: absolute;
    right: 18px;
    top: calc(50% + 2px);
    width: 18px;
    heigth: 18px;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      
    }
  }

  input {
    border: 1px solid lightblue;
    padding: 14px 20px;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;
    width: 30vw;
    text-align: left;
    width: 450px;
    cursor: auto;

    @media (max-width: 1250px) {
      width: 400px;
    }

    @media (max-width: 1150px) {
      width: 350px;
    }

    @media (max-width: 1100px) {
      width: 450px;
    }

    @media (max-width: 720px) {
      width: 400px;
    }

     @media (max-width: 650px) {
      width: 350px;
    }

         @media (max-width: 600px) {
      width: 300px;
    }
  }


`;
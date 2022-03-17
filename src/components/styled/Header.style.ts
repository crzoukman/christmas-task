import styled from 'styled-components';

export const HeaderC = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
    height: 18vh;
  }

  .searchBarC {
    display: flex;
    gap: 80px;
    align-items: center;
  }

  .pickedComp {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .pickedImg {
    width: 40px;
    height: 40px;
  }

  .pickedCounter {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 4px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;

  gap: 40px;
  align-items: center;

  h2 {
    text-transform: uppercase;
    font-size: 36px;
    cursor: pointer;
   
    position: relative;

    &::after {
        transition: 0.5s;
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0%;
        border-bottom: 2px solid gold;
        
    }

    &:hover::after {
        width: 100%;
    }
  }
`;

export const HeaderIcon = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: .5s;

  &:hover {
    transform: rotate(5deg);
  }

`;


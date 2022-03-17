import styled from "styled-components";

export const ChooseLightsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .lights-header {
    font-size: 24px;
  }

  .lights-list {
    display: flex;
    gap: 10px;
  }

  .lights-item {
   
    width: 40px;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    /* opacity: 0.25; */
  }


  .lights-blue {
    background-color: blue;
  }

  .lights-red {
    background-color: red;
  }

  .lights-green {
    background-color: green;
  }

  .lights-orange {
     background-color: orange;
  }

  .lights-mix {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;

    .l1 {
      background-color: blue;
    }

     .l2 {
      background-color: red;
    }

     .l3 {
      background-color: green;
    }

     .l4 {
      background-color: orange;
    }
  }
`

export const LightsItem = styled.li<{ activeX: boolean, colorX: string }>`
  opacity: ${({ activeX }) => (
    activeX ? '0.75' : '0.15'
  )};

  box-shadow: ${({ activeX }) => (
    activeX
      ? 'rgba(17, 17, 26, 0.1) 0px 0px 16px'
      : 'rgba(17, 17, 26, 0.1) 0px 0px 16px'
  )};


  
`
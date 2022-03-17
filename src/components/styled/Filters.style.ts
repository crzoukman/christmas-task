import styled from "styled-components";

export const ToyShapeList = styled.ul`
  display: flex;
  gap: 20px;
  
`;

export const ToyShapeItem = styled.li<{ clicked: boolean }>`
  width: 40px;
  heigth: 40px;
  cursor: pointer;
  filter: ${({ clicked }) => clicked ? 'unset' : 'grayscale(100%) brightness(50%);'};
  opacity: ${({ clicked }) => clicked ? 1 : 0.5};
  transition: .5s;

  &:hover {
    transform: rotate(10deg);
  }
`;

export const ToyColorList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 10px 0;

  
`;

export const ToyColorItem = styled.li<{ borderColor: string, clicked: boolean }>`
  width: 40px;
  height: 40px;
  /* border: 2px solid ${({ borderColor }) => borderColor}; */
  /* background-color: ${({ clicked, borderColor }) => clicked ? borderColor : 'unset'}; */
 
  background-color: ${({ borderColor }) => borderColor};
  
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  cursor: pointer;
  opacity: ${({ clicked }) => clicked ? '1' : '0.1'};;
`;

export const ToySizeList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ToySizeItem = styled.li<{ size: string, clicked: boolean }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  cursor: pointer;
  filter: ${({ clicked }) => clicked ? 'unset' : 'grayscale(100%) brightness(50%);'};
  opacity: ${({ clicked }) => clicked ? 1 : 0.5};
  transition: .5s;

  &:hover {
    transform: rotate(10deg);
  }
`;

export const FiltersC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  margin-bottom: 40px;


.color-w {
  border: 1px solid rgba(0, 0, 0, 0.25);

  border-radius: 10px;
}

  & > div {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 30px 20px;
  }

 .filterHeader {
   text-transform: uppercase;
   font-size: 20px;
   margin-bottom: 60px;
  }

  .rangeFilterC {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .rangeFilterWrapper {
    
  }

  .iconFilter-h3 {
    font-size: 20px;
    width: 80px;
  }

  .fav-h3 {
    width: max-content;
  }

  .icon-filter-wrapper {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .iconFilterBody {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .sortingWrapper {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export const RangeQ = styled.div`
 

  .rangeValue {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 60px;
    box-sizing: content-box;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;
  }

  .rangeQ-header {
  font-size: 20px;
  margin-bottom: 20px;       
  }

  .rangeQ-body {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

export const RangeY = styled.div`


  .rangeValue {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 60px;
    box-sizing: content-box;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;
  }

  .rangeY-header {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .rangeY-body {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 35px;
  /* margin-bottom: 12px; */
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

/* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    background-color: #eee;
    transform: translateY(-50%);
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 10px;
    top: 5px;
    width: 8px;
    height: 16px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const Reset = styled.button`
  text-transform: uppercase;
  padding: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 20px;
  cursor: pointer;
  margin-top: auto;
  text-align: center;
  background-color: whitesmoke;
  transition: 0.25s;
  margin-bottom: -40px;

  
  &:hover {
    filter: brightness(110%);
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;   
  }

  @media (max-width: 1440px) {
     margin-top: 40px;
     margin-bottom: 0;
  }
`;

export const ResetAll = styled.button`
  text-transform: uppercase;
  padding: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 20px;
  cursor: pointer;
  margin-top: auto;
  text-align: center;
  background-color: whitesmoke;
  transition: 0.25s;
  
  
  
  &:hover {
    filter: brightness(110%);
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;   
  }

  @media (max-width: 1440px) {
     margin-top: 20px;
  }
`;
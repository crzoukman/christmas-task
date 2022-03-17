import styled from "styled-components";

export const LightsWrapper = styled.ul<{ topX: string, widthX: string, colorX: string | any }>`
text-align: center;
white-space: nowrap;
overflow: hidden;
position: absolute;
z-index: 100;
margin: -15px 0 0 0;
padding: 0;
pointer-events: none;
width: 100%;
top: ${({ topX }) => topX};
left: 50%;
transform: translate(-50%, -50%);
width: ${({ widthX }) => widthX};


li {
  position: relative;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  width: 12px;
  height: 28px;
  border-radius: 50%;

  margin: 30px;

  display: inline-block;
  background: ${({ colorX }) => {
    if (colorX === 'mix') return '#00f7a5'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }}; 
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  animation-name: flash-1;
  animation-duration: 2s;
}
li:nth-child(2n+1) {
  background: ${({ colorX }) => {
    if (colorX === 'mix') return 'cyan'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.5)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  animation-name: flash-2;
  animation-duration: 0.4s;
}
li:nth-child(4n+2) {
  background: ${({ colorX }) => {
    if (colorX === 'mix') return '#f70094'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
 
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  
  animation-name: flash-3;
  animation-duration: 1.1s;
}
li:nth-child(odd) {
  animation-duration: 1.8s;
}
li:nth-child(3n+1) {
  animation-duration: 1.4s;
}
li:before {
  content: "";
  position: absolute;
  background: #222;
  width: 10px;
  height: 9.3333333333px;
  border-radius: 3px;
  top: -4.6666666667px;
  left: 1px;
}
li:after {
  content: "";
  top: -14px;
  left: 9px;
  position: absolute;
  width: 52px;
  height: 18.6666666667px;
  border-bottom: solid #222 2px;
  border-radius: 50%;
}
li:last-child:after {
  content: none;
}
li:first-child {
  margin-left: -40px;
}



@keyframes flash-1 {
  0%, 100% {
    
     background: ${({ colorX }) => {
    if (colorX === 'mix') return '#00f7a5'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
   
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   

  background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(0, 247, 165, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 247, 165, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
@keyframes flash-2 {
  0%, 100% {
    

      background: ${({ colorX }) => {
    if (colorX === 'mix') return 'cyan'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   
    background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(0, 255, 255, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
@keyframes flash-3 {
  0%, 100% {
   

      background: ${({ colorX }) => {
    if (colorX === 'mix') return '#f70094'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   

       background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(247, 0, 148, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(247, 0, 148, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
`

export const LightsWrapper2 = styled.ul<{ topX: string, widthX: string, colorX: string | any }>`
text-align: center;
white-space: nowrap;
overflow: hidden;
position: absolute;
z-index: 100;
margin: -15px 0 0 0;
padding: 0;
pointer-events: none;
width: 100%;
top: ${({ topX }) => topX};
left: 50%;
transform: translate(-50%, -50%);
width: ${({ widthX }) => widthX};


li {
  position: relative;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  width: 12px;
  height: 28px;
  border-radius: 50%;

  margin: 30px;

  display: inline-block;
  background: ${({ colorX }) => {
    if (colorX === 'mix') return '#00f7a5'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }}; 
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  animation-name: flash-1;
  animation-duration: 2s;
}
li:nth-child(2n+1) {
  background: ${({ colorX }) => {
    if (colorX === 'mix') return 'cyan'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.5)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  animation-name: flash-2;
  animation-duration: 0.4s;
}
li:nth-child(4n+2) {
  background: ${({ colorX }) => {
    if (colorX === 'mix') return '#f70094'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
 
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  
  animation-name: flash-3;
  animation-duration: 1.1s;
}
li:nth-child(odd) {
  animation-duration: 1.8s;
}
li:nth-child(3n+1) {
  animation-duration: 1.4s;
}
li:before {
  content: "";
  position: absolute;
  background: #222;
  width: 10px;
  height: 9.3333333333px;
  border-radius: 3px;
  top: -4.6666666667px;
  left: 1px;
}
li:after {
  content: "";
  top: -14px;
  left: 9px;
  position: absolute;
  width: 52px;
  height: 18.6666666667px;
  border-bottom: solid #222 2px;
  border-radius: 50%;
}
li:last-child:after {
  content: none;
}
li:first-child {
  margin-left: -40px;
}



@keyframes flash-1 {
  0%, 100% {
    
     background: ${({ colorX }) => {
    if (colorX === 'mix') return '#00f7a5'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
   
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   

  background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(0, 247, 165, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 247, 165, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
@keyframes flash-2 {
  0%, 100% {
    

      background: ${({ colorX }) => {
    if (colorX === 'mix') return 'cyan'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   
    background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(0, 255, 255, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
@keyframes flash-3 {
  0%, 100% {
   

      background: ${({ colorX }) => {
    if (colorX === 'mix') return '#f70094'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   

       background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(247, 0, 148, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(247, 0, 148, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
`

export const LightsWrapper3 = styled.ul<{ topX: string, widthX: string, colorX: string | any }>`
text-align: center;
white-space: nowrap;
overflow: hidden;
position: absolute;
z-index: 100;
margin: -15px 0 0 0;
padding: 0;
pointer-events: none;
width: 100%;
top: ${({ topX }) => topX};
left: 50%;
transform: translate(-50%, -50%);
width: ${({ widthX }) => widthX};


li {
  position: relative;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  width: 12px;
  height: 28px;
  border-radius: 50%;

  margin: 30px;

  display: inline-block;
  background: ${({ colorX }) => {
    if (colorX === 'mix') return '#00f7a5'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }}; 
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  animation-name: flash-1;
  animation-duration: 2s;
}
li:nth-child(2n+1) {
  background: ${({ colorX }) => {
    if (colorX === 'mix') return 'cyan'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.5)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  animation-name: flash-2;
  animation-duration: 0.4s;
}
li:nth-child(4n+2) {
  background: ${({ colorX }) => {
    if (colorX === 'mix') return '#f70094'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
 
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  
  animation-name: flash-3;
  animation-duration: 1.1s;
}
li:nth-child(odd) {
  animation-duration: 1.8s;
}
li:nth-child(3n+1) {
  animation-duration: 1.4s;
}
li:before {
  content: "";
  position: absolute;
  background: #222;
  width: 10px;
  height: 9.3333333333px;
  border-radius: 3px;
  top: -4.6666666667px;
  left: 1px;
}
li:after {
  content: "";
  top: -14px;
  left: 9px;
  position: absolute;
  width: 52px;
  height: 18.6666666667px;
  border-bottom: solid #222 2px;
  border-radius: 50%;
}
li:last-child:after {
  content: none;
}
li:first-child {
  margin-left: -40px;
}



@keyframes flash-1 {
  0%, 100% {
    
     background: ${({ colorX }) => {
    if (colorX === 'mix') return '#00f7a5'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
   
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   

  background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(0, 247, 165, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 247, 165, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
@keyframes flash-2 {
  0%, 100% {
    

      background: ${({ colorX }) => {
    if (colorX === 'mix') return 'cyan'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   
    background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(0, 255, 255, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
@keyframes flash-3 {
  0%, 100% {
   

      background: ${({ colorX }) => {
    if (colorX === 'mix') return '#f70094'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   

       background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(247, 0, 148, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(247, 0, 148, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
`

export const LightsWrapper4 = styled.ul<{ topX: string, widthX: string, colorX: string | any }>`
text-align: center;
white-space: nowrap;
overflow: hidden;
position: absolute;
z-index: 100;
margin: -15px 0 0 0;
padding: 0;
pointer-events: none;
width: 100%;
top: ${({ topX }) => topX};
left: 50%;
transform: translate(-50%, -50%);
width: ${({ widthX }) => widthX};


li {
  position: relative;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  width: 12px;
  height: 28px;
  border-radius: 50%;

  margin: 30px;

  display: inline-block;
  background: ${({ colorX }) => {
    if (colorX === 'mix') return '#00f7a5'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }}; 
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  animation-name: flash-1;
  animation-duration: 2s;
}
li:nth-child(2n+1) {
  background: ${({ colorX }) => {
    if (colorX === 'mix') return 'cyan'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.5)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  animation-name: flash-2;
  animation-duration: 0.4s;
}
li:nth-child(4n+2) {
  background: ${({ colorX }) => {
    if (colorX === 'mix') return '#f70094'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
 
  box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  
  animation-name: flash-3;
  animation-duration: 1.1s;
}
li:nth-child(odd) {
  animation-duration: 1.8s;
}
li:nth-child(3n+1) {
  animation-duration: 1.4s;
}
li:before {
  content: "";
  position: absolute;
  background: #222;
  width: 10px;
  height: 9.3333333333px;
  border-radius: 3px;
  top: -4.6666666667px;
  left: 1px;
}
li:after {
  content: "";
  top: -14px;
  left: 9px;
  position: absolute;
  width: 52px;
  height: 18.6666666667px;
  border-bottom: solid #222 2px;
  border-radius: 50%;
}
li:last-child:after {
  content: none;
}
li:first-child {
  margin-left: -40px;
}



@keyframes flash-1 {
  0%, 100% {
    
     background: ${({ colorX }) => {
    if (colorX === 'mix') return '#00f7a5'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
   
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   

  background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(0, 247, 165, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 247, 165, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
@keyframes flash-2 {
  0%, 100% {
    

      background: ${({ colorX }) => {
    if (colorX === 'mix') return 'cyan'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   
    background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(0, 255, 255, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
    box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
@keyframes flash-3 {
  0%, 100% {
   

      background: ${({ colorX }) => {
    if (colorX === 'mix') return '#f70094'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
   
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
  50% {
   

       background: ${({ colorX }) => {
    if (colorX === 'mix') return 'rgba(247, 0, 148, 0.4)'
    if (colorX === 'green') return '#00f7a5'
    if (colorX === 'blue') return 'cyan'
    if (colorX === 'red') return '#f70094'
    if (colorX === 'orange') return 'orange'
  }};
    
     box-shadow: ${({ colorX }) => {
    if (colorX === 'mix') return '0px 4.6666666667px 24px 3px rgba(247, 0, 148, 0.2)'
    if (colorX === 'green') return '0px 4.6666666667px 24px 3px #00f7a5'
    if (colorX === 'blue') return '0px 4.6666666667px 24px 3px cyan'
    if (colorX === 'red') return '0px 4.6666666667px 24px 3px #f70094'
    if (colorX === 'orange') return '0px 4.6666666667px 24px 3px orange'
  }};
  }
}
`
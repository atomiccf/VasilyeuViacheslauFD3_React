import React from 'react';
import ReactDOM from 'react-dom';


import DoubleButton from "./components/DoubleButton";
import withRainbowFrame from "./components/withRainbowFrame";

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

     let cbPressed = (num) =>{

          alert(`аргумент ${num}`)

     }
let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
     <React.Fragment>
          <DoubleButton caption1="однажды" caption2="пору" cbPressed={cbPressed} >в студёную зимнюю</DoubleButton>

          <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={cbPressed}>вышел, был сильный</FramedDoubleButton>
     </React.Fragment>

  /*  <RainbowFrame colors={colors}>
      Hello!
    </RainbowFrame>*/
  , document.getElementById('container') 
);


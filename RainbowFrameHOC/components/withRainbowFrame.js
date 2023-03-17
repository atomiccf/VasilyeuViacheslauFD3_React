import React from 'react';


function withRainbowFrame(color) {
    return function(Comp) {
        return props => (


            <div style={{backgroundColor:color,border:"solid red 1px"}}>
                <Comp {...props} />
            </div>
        );
    };
}


export default withRainbowFrame;
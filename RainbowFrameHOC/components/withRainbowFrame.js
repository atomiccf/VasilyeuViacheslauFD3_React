import React from 'react';


function withRainbowFrame(colors) {
    return function(Comp) {
        return function (props) {

            let block  = <Comp {...props} /> ;

            for (let color of colors) {
                block =  <div style={{border:`solid 5px ${color}`,margin:'5px'}}>{block} </div>

            }
            return   <React.Fragment >
                {block}
            </React.Fragment>

        }

    };
}


export default withRainbowFrame;
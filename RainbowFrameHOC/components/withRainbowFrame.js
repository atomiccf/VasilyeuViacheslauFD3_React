import React from 'react';


function withRainbowFrame(colors) {
    return function(Comp) {
        return function (props) {

            let block=null;
            let component = <Comp {...props} /> ;

            for (let color of colors) {
                if (color  === 'red') block =  <div style={{border:`solid 5px ${color}`,margin:'5px'}}>{component}  </div>

                else
                    block =  <div style={{border:`solid 5px ${color}`,margin:'5px'}}>{block}

                    </div>

            }
            return   <React.Fragment >
                {block}
            </React.Fragment>

        }

    };
}





export default withRainbowFrame;
import React from 'react';


function withRainbowFrame(colors,Comp) {

    class RainbowFrame extends React.Component {


        render() {
            let block=null;
            let component = <Comp {...this.props} /> ;

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


    }

    return RainbowFrame;



}




export default withRainbowFrame;
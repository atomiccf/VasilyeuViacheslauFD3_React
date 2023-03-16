import React from 'react';




class RainbowFrame extends React.Component {


  render() {
    let children = this.props.children;
    for (let color of this.props.colors) {

    children = <div style={{border:`solid 10px ${color}`,margin:'5px'}}>{children}</div>

    }
    return   <React.Fragment>{children}</React.Fragment>


    }


}

  export default RainbowFrame;

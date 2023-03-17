import React from 'react';

import './DoubleButton.css'


class DoubleButton extends React.Component {
    click = (EO) =>{

        if (EO.currentTarget.value === this.props.caption1) {
            this.props.cbPressed(1)

        }
        else {
            this.props.cbPressed(2)

        }

    }


    render() {

        return   <React.Fragment><input onClick={this.click} type="button" value={this.props.caption1}/>{this.props.children}<input onClick={this.click} type="button"value={this.props.caption2}/></React.Fragment>


    }


}

export default DoubleButton;
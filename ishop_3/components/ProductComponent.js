
import React from 'react';
import PropTypes from 'prop-types';
import IshopComponent from './IshopComponent';


class ProductComponent extends React.Component{

    clicked = () => {

        return this.props.cbSelect(this.props.code);


    }

    delete = (EO) => {
        EO.stopPropagation();
        this.props.cbDelete(this.props.code);

    }

    render() {

        return   (
            <tr scope="row"
                key = {this.props.code}
                className = {(this.props.selectItemCode === this.props.code)? "table-primary": ""}
                onClick = {this.clicked}>

                <td>{this.props.index}</td>
                <td>{this.props.brandTitle}</td>
                <td>{this.props.modelTitle}</td>
                <td>{this.props.price + '$'}</td>
                <td><img alt={'car'} src={this.props.src}/></td>
                <td>{this.props.quantity}</td>
                <td> <button type={"button"} className={"btn btn-warning"}>Edit</button></td>
                <td> <button type={"button"} className={"btn btn-warning"} onClick={this.delete}>Delete</button></td>
            </tr>

        );


    }

}


export default ProductComponent;
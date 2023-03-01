import './IshopComponent.css';

import React from 'react';
import PropTypes from 'prop-types';

import TitleComponent from './TitleComponent';
import ProductComponent from './ProductComponent';

class IshopComponent extends React.Component {

    static propTypes = {

        cars:PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                brandTitle: PropTypes.string.isRequired,
                modelTitle: PropTypes.string.isRequired,
                image:PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
                quantity:PropTypes.number.isRequired,
            })
        )
    };

    state = {
        selectItemCode:null,
        defaultCards:this.props.cars
    };


    cbSelect = (code) =>{

        this.setState({selectItemCode:code})

    };

    cbDelete = (code) =>{

        this.setState({defaultCards:this.state.defaultCards.filter(item =>{
                return item.code!== code;
            })})

    };

    render() {

        var ItemCard = this.state.defaultCards.map( (v,index) =>

            React.createElement(ProductComponent, {key:v.code,
                index:index+1,
                brandTitle:v.brandTitle,
                code:v.itemCode,
                modelTitle: v.modelTitle,
                src:v.image,
                price:v.price,
                quantity:v.quantity,
                selectItemCode:this.state.selectItemCode,
                cbSelect:this.cbSelect,
                cbDelete:this.cbDelete,
            }, )
        );

        return (
            <div>
                <TitleComponent title={this.props.title} />
                <table className={"table table-dark table-striped"}>
                    <thead>
                    <tr>
                        <th scope={"col"}>#</th>
                        <th scope={"col"}>Brand</th>
                        <th scope={"col"}>Model</th>
                        <th scope={"col"}>Price</th>
                        <th scope={"col"}>Image</th>
                        <th scope={"col"}>Quantity</th>
                        <th scope={"col"}>Edit</th>
                        <th scope={"col"}>Delete</th>
                    </tr>
                    </thead>
                    <tbody>{ItemCard}</tbody>

                </table>
            </div>

        )

    }

}

export default IshopComponent;
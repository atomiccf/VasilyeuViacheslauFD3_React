import './IshopComponent.css';

import React from 'react';
import PropTypes from 'prop-types';

import TitleComponent from './TitleComponent';
import ProductComponent from './ProductComponent';
import ProductCardComponent from './ProductCardComponent';
import ProductCardEditComponent from "./ProductCardEditComponent";

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
        ),
        title:PropTypes.string.isRequired,
    };

    state = {
        selectItemCode:null,
        defaultCards:this.props.cars,
        cardMode: 0,  /* edit -редактирование, show - показать текущую карточку, new - добавление*/

    };


    cbSelect = (code) =>{

        this.setState({selectItemCode:code,cardMode:'show'})

    };
    cbEdit= (code) =>{

        this.setState({selectItemCode:code,cardMode:'edit'})

    };


    cbDelete = (code) =>{

        this.setState({defaultCards:this.state.defaultCards.filter(item =>{

                return item.code !== code;
            })})

    };

    cbSave = (code,obj) =>{


        this.setState({defaultCards:this.state.defaultCards.map(item =>{
                if (item.code === code) {
                    console.log(obj)
                  return  obj

                } else {

                    return item

                }

            })})


    };
    cbCancel = () =>{

        this.setState({cardMode:0})


    };


    render() {

        let ItemCard = this.state.defaultCards.map( (v,index) =>
            <ProductComponent index={index+1}
                            key={v.code}
                            brandTitle={v.brandTitle}
                            code={v.code}
                            modelTitle={v.modelTitle}
                            src={v.image}
                            price={v.price}
                            quantity={v.quantity}
                            selectItemCode={this.state.selectItemCode}
                            cardMode = {this.state.cardMode}
                            cbSelect={this.cbSelect}
                            cbDelete={this.cbDelete}
                            cbEdit={this.cbEdit}
            />


        );

        let ItemInfo = this.state.defaultCards.find( item => {

            if (item.code === this.state.selectItemCode) return item

        })

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
                <button type={"button"} className={"btn btn-warning"}>New product</button>

                {(this.state.selectItemCode && this.state.cardMode === 'show') &&
                    <ProductCardComponent infoItem = {ItemInfo}  />
                }


                {(this.state.selectItemCode && this.state.cardMode === 'edit') &&
                    <ProductCardEditComponent key = {this.state.selectItemCode} infoItem = {ItemInfo}
                                              cbSave={this.cbSave}
                                              cbCancel={this.cbCancel}
                    />
                }

            </div>

        )



    }

}

export default IshopComponent;
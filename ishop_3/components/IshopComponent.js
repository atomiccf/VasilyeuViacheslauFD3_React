import './IshopComponent.css';

import React from 'react';
import PropTypes from 'prop-types';

import TitleComponent from './TitleComponent';
import ProductComponent from './ProductComponent';
import ProductCardComponent from './ProductCardComponent';
import ProductCardEditComponent from "./ProductCardEditComponent";
import ProductCardAddComponent from "./ProductCardAddComponent";

class IshopComponent extends React.Component {
    constructor(props) {
        super(props);

    }
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
        cardMode: 0,  /* edit -редактирование, show - показать текущую карточку, add - добавление*/
        currentName:null,
        currentModelName:null,
        currentPrice:null,
        currentURL:null,
        currentQuantity:null,
        nameError:"",
        modelNameError:"",
        priceError:"",
        URLError:"",
        quantityError:"",
        valid:true,
        edit:true,
    };


    changeName = (EO) => {
        console.log(EO.target.value)
        this.setState({currentName: EO.target.value},this.validCard)

    }
    changeModelName = (EO) => {

        this.setState({currentModelName: EO.target.value},this.validCard)

    }
    changePrice = (EO) => {

        this.setState({currentPrice:parseInt(EO.target.value)},this.validCard)

    }

    changeURL = (EO) => {

        this.setState({currentURL: EO.target.value},this.validCard)

    }

    changeQuantity = (EO) => {

        this.setState({currentQuantity:parseInt(EO.target.value)},this.validCard)

    }
    validCard = () =>{
        let nameError="";
        let modelNameError="";
        let priceError="";
        let URLError="";
        let quantityError="";
        let valid;
        this.setState({edit:false})
        if (this.state.currentName === null) nameError = "Enter brand name";
        if (this.state.currentModelName === null) modelNameError = "Enter model name";
        if (isNaN(this.state.currentPrice)||this.state.currentPrice === null) priceError = "Enter number";
        if (this.state.currentURL === null) URLError = "Enter URL";
        if (isNaN(this.state.currentQuantity)||this.state.currentQuantity === null) quantityError = "Enter number";

        valid = (!nameError) && (!modelNameError) && (!priceError) && (!URLError) && (!quantityError)
        this.setState({nameError,modelNameError,priceError,URLError,quantityError,valid})
    }


    cbSelect = (code) =>{

        this.setState({selectItemCode:code,cardMode:'show'})

    };
    cbEdit= (code) =>{

        this.setState({selectItemCode:code,cardMode:'edit'})

    };
    clickAdd= () =>{

        this.setState({cardMode:'add'})

    };

    cbCleanState = () =>{


        this.setState({currentName:null,
            currentModelName:null,
            currentPrice:null,
            currentURL:null,
            currentQuantity:null})

    }

    cbDelete = (code) =>{
        this.setState({cardMode:0})
        this.setState({defaultCards:this.state.defaultCards.filter(item =>{

                return item.code !== code;
            })})

    };

    cbSave = (code,obj) =>{


        this.setState({defaultCards:this.state.defaultCards.map(item =>{
                if (item.code === code) {

                  return  obj

                } else {

                    return item

                }

            })})
        this.setState({edit: true})
        this.setState({cardMode:0})

    };
    cbDisable = (bool) => {

        this.setState({edit: bool})

    }
    cbSaveAdd = (obj) =>{

        this.setState({edit: true})
        this.setState({defaultCards: [...this.state.defaultCards, obj]})
        this.setState({cardMode:0})

    };

    cbCancel = (bool) =>{
        this.setState({edit: true})
        this.setState({cardMode:0})


    };
    handleClick = () => {
        this.clickAdd()
        this.validCard()
    }

    render() {

          let ItemCard = this.state.defaultCards.map( (v,index) =>
            <ProductComponent index={index+1}
                            edit = {this.state.edit}
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

        });
        let ItemState = this.state.defaultCards;

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
                <button disabled={!this.state.edit} type={"button"} className={"btn btn-warning"} onClick={this.handleClick}>New product</button>

                {(this.state.selectItemCode && this.state.cardMode === 'show') &&
                    <ProductCardComponent infoItem = {ItemInfo}
                                          selectItemCode={this.state.selectItemCode}/>
                }


                {(this.state.selectItemCode && this.state.cardMode === 'edit') &&
                    <ProductCardEditComponent key = {this.state.selectItemCode} infoItem = {ItemInfo}
                                              cbSave={this.cbSave}
                                              cbCancel={this.cbCancel}
                                              cbDisable={this.cbDisable}
                    />
                }
                {( this.state.cardMode === 'add') &&
                    <ProductCardAddComponent  stateItem = {ItemState}
                                              currentName = {this.state.currentName}
                                              currentModelName = {this.state.currentModelName}
                                              currentPrice = {this.state.currentPrice}
                                              currentUrl = {this.state.currentURL}
                                              currentQuantity = {this.state.currentQuantity}
                                              valid = {this.state.valid}
                                              nameError={this.state.nameError}
                                              modelNameError={this.state.modelNameError}
                                              priceError={this.state.priceError}
                                              URLError={this.state.URLError}
                                              quantityError={this.state.quantityError}
                                              changeName ={this.changeName}
                                              changeModelName ={this.changeModelName}
                                              changePrice={this.changePrice}
                                              changeURL ={this.changeURL}
                                              changeQuantity ={this.changeQuantity}
                                              cbSaveAdd={this.cbSaveAdd}
                                              cbCancel={this.cbCancel}
                                              cbCleanState={this.cbCleanState}
                    />
                }
            </div>

        )



    }

}

export default IshopComponent;
import React from 'react';

import './ProductCardAddComponent.css';

class ProductCardAddComponent extends React.Component {

    state = {
        code:null,
        currentName:null,
        currentModelName:null,
        currentPrice:null,
        currentURL:null,
        currentQuantity:null,

    }


    generateCode = () => {

        this.props.stateItem.forEach((elem) => {
            let count = 0;
            count +=elem.code;
            return this.state.code = count+1


        } )


    };
    changeName = (EO) => {

        this.setState({currentName: EO.target.value})

    }
    changeModelName = (EO) => {

        this.setState({currentModelName: EO.target.value})

    }
    changePrice = (EO) => {

        this.setState({currentPrice: EO.target.value})

    }

    changeURL = (EO) => {

        this.setState({currentURL: EO.target.value})

    }

    changeQuantity = (EO) => {

        this.setState({currentQuantity: EO.target.value})

    }

    add = () => {
        let obj =  {
            key:this.state.code,
            code:this.state.code,
            brandTitle:this.state.currentName,
            selectItemCode:this.state.code,
            modelTitle:this.state.currentModelName,
            price:this.state.currentPrice,
            image:this.state.currentURL,quantity:this.state.currentQuantity};
        this.props.cbSaveAdd(obj)

    }
    handleClick = () => {
        this.generateCode()
        this.add()
    }
    cancel = () => {

        this.props.cbCancel()

    }
    render () {

        return(

            <div className="input-group">
                 <input type="text" placeholder="Brand" aria-label="Name" defaultValue={this.state.currentName} onChange={this.changeName}  className="form-control"/>
                <input type="text" placeholder="ModelName" aria-label="Name" defaultValue={this.state.currentModelName} onChange={this.changeModelName}  className="form-control"/>
                <input type="number" placeholder="Price" aria-label="Price" defaultValue={this.state.currentPrice} onChange={this.changePrice} className="form-control"/>
                <input type="text" placeholder="URL" aria-label="URL" defaultValue={this.state.currentURL} onChange={this.changeURL} className="form-control"/>
                <input  type="text" placeholder="Quantity" aria-label="Quantity" defaultValue={this.state.currentQuantity} onChange={this.changeQuantity} className="form-control"/>
                <button className="btn btn-primary"  onClick={this.handleClick}>Add</button><button className="btn btn-primary" onClick={this.cancel}>Cancel</button>
            </div>
        )

    }
}

export default ProductCardAddComponent;
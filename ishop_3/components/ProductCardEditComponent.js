import React from 'react';

import './ProductCardEditComponent.css';


class ProductCardEditComponent extends React.Component {

state = {

    currentName:this.props.infoItem.brandTitle,
    currentPrice:this.props.infoItem.price,
    currentURL:this.props.infoItem.image,
    currentQuantity:this.props.infoItem.quantity,

}

changeName = (EO) => {

this.setState({currentName: EO.target.value})

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

    save = () => {
        let obj =  {
            code:this.props.infoItem.code,
            brandTitle:this.state.currentName,
            selectItemCode:this.props.infoItem,
            modelTitle:this.props.infoItem.modelTitle,
            price:this.state.currentPrice,
            image:this.state.currentURL,quantity:this.state.currentQuantity};
        this.props.cbSave(this.props.infoItem.code, obj)

    }
    cancel = () => {

    this.props.cbCancel()

    }
    render () {

        return(

            <div className="input-group">
              <span className="input-group-text">ID: {this.props.infoItem.code}</span>
                <input type="text" data-tag='tag' aria-label="Name" value={this.state.currentName} onChange={this.changeName}  className="form-control"/>
                <input type="number" aria-label="Price" value={this.state.currentPrice} onChange={this.changePrice} className="form-control"/>
                <input type="text" aria-label="URL" value={this.state.currentURL} onChange={this.changeURL} className="form-control"/>
                <input type="text" aria-label="Quantity" value={this.state.currentQuantity} onChange={this.changeQuantity} className="form-control"/>
                <button className="btn btn-primary" onClick={this.save}>Save</button><button className="btn btn-primary" onClick={this.cancel}>Cancel</button>
            </div>
        )

    }
}

export default ProductCardEditComponent;
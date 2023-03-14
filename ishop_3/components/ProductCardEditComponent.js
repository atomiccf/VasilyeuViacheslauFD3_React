import React from 'react';

import './ProductCardEditComponent.css';


class ProductCardEditComponent extends React.Component {

state = {

    currentName:this.props.infoItem.brandTitle,
    currentPrice:this.props.infoItem.price,
    currentURL:this.props.infoItem.image,
    currentQuantity:this.props.infoItem.quantity,
    nameError:"",
    priceError:"",
    URLError:"",
    quantityError:"",
    valid:true,
    edit:true,
}


validate = () =>{
    let nameError="";
    let priceError="";
    let URLError="";
    let quantityError="";
    let valid;

    if (this.state.currentName.length === 0) {

        nameError = "Enter brand name";
        this.props.cbDisable(this.state.edit)

    }
    if (isNaN(this.state.currentPrice)) {
        priceError = "Enter number" ;
        this.props.cbDisable(this.state.edit)

    }
    if (this.state.currentURL.length === 0) {
        URLError = "Enter URL";
        this.props.cbDisable(this.state.edit);

    }
    if (isNaN(this.state.currentQuantity)) {
        quantityError = "Enter number";
        this.props.cbDisable(this.state.edit);
    }

    valid = (!nameError) && (!priceError) && (!URLError) && (!quantityError)

    this.setState({nameError,priceError,URLError,quantityError,valid})
}

changeName = (EO) => {

    this.setState({currentName: EO.target.value,edit:false},this.validate)

}
    changePrice = (EO) => {

        this.setState({currentPrice: parseInt(EO.target.value),edit:false},this.validate)

    }

    changeURL = (EO) => {

        this.setState({currentURL: EO.target.value,edit:false},this.validate)

    }

    changeQuantity = (EO) => {

        this.setState({currentQuantity: parseInt(EO.target.value),edit:false},this.validate)

    }

    save = () => {
        let obj =  {
            code:this.props.infoItem.code,
            brandTitle:this.state.currentName,
            selectItemCode:this.props.infoItem,
            modelTitle:this.props.infoItem.modelTitle,
            price:this.state.currentPrice,
            image:this.state.currentURL,quantity:this.state.currentQuantity};
        this.setState({edit:true})
        this.props.cbSave(this.props.infoItem.code, obj,this.state.edit)

    }
    cancel = () => {
    this.setState({edit:true})
    this.props.cbCancel(this.state.edit)

    }
    render () {

        return(
            (this.props.infoItem)&&
            <div className="input-group">
              <span className="input-group-text">ID: {this.props.infoItem.code}</span>
                <div className="control_block"><input type="text" data-tag='tag' aria-label="Name" value={this.state.currentName} onChange={this.changeName}  className="form-control"/>
                    <span className="error_msg">{this.state.nameError}</span> </div>

                <div className="control_block"> <input type="number" aria-label="Price" value={this.state.currentPrice} onChange={this.changePrice} className="form-control"/>
                    <span className="error_msg">{this.state.priceError}</span> </div>


                <div className="control_block"><input type="text" aria-label="URL" value={this.state.currentURL} onChange={this.changeURL} className="form-control"/>
                    <span className="error_msg">{this.state.URLError}</span>
                </div>

               <div className="control_block"><input type="number" aria-label="Quantity" value={this.state.currentQuantity} onChange={this.changeQuantity} className="form-control"/>
                   <span className="error_msg">{this.state.quantityError}</span>
               </div>

                <button className="btn btn-primary" disabled={!this.state.valid} onClick={this.save}>Save</button><button className="btn btn-primary" onClick={this.cancel}>Cancel</button>
            </div>
        )

    }
}

export default ProductCardEditComponent;
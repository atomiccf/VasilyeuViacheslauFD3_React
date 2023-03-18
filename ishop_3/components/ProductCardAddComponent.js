import React from 'react';

import './ProductCardAddComponent.css';

class ProductCardAddComponent extends React.Component {

    state = {
        code:null,
        currentName:this.props.currentName,
        currentModelName:this.props.currentModelName,
        currentPrice:this.props.currentPrice,
        currentURL:this.props.currentUrl,
        currentQuantity:this.props.currentQuantity,
        nameError:this.props.nameError,
        modelNameError:this.props.modelNameError,
        priceError:this.props.priceError,
        URLError:this.props.URLError,
        quantityError:this.props.quantityError,
    }


    generateCode = () => {

        this.props.stateItem.forEach((elem) => {
            let count = 0;
            count +=elem.code;
            return this.state.code = count+1


        } )


    };


    add = () => {
        let obj =  {
            key:this.state.code,
            code:this.state.code,
            brandTitle:this.props.currentName,
            selectItemCode:this.state.code,
            modelTitle:this.props.currentModelName,
            price:this.props.currentPrice,
            image:this.props.currentUrl,quantity:this.props.currentQuantity};
        this.props.cbSaveAdd(obj)
        this.props.cbCleanState()

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


                <div className="control_block">
                    <input type="text" placeholder="Brand" aria-label="Name" defaultValue={this.state.currentName} onChange={this.props.changeName}  className="form-control"/>
                    <span className="error_msg">{this.props.nameError}</span>
                </div>

                <div className="control_block">
                    <input type="text" placeholder="ModelName" aria-label="Name" defaultValue={this.state.currentModelName} onChange={this.props.changeModelName}  className="form-control"/>
                    <span className="error_msg">{this.props.modelNameError}</span>
                </div>
                <div className="control_block">
                    <input type="number" placeholder="Price" aria-label="Price" defaultValue={this.state.currentPrice} onChange={this.props.changePrice} className="form-control"/>
                    <span className="error_msg">{this.props.priceError}</span>
                </div>

                <div className="control_block">
                    <input type="text" placeholder="URL" aria-label="URL" defaultValue={this.state.currentURL} onChange={this.props.changeURL} className="form-control"/>
                    <span className="error_msg">{this.props.URLError}</span>
                </div>

                <div className="control_block">
                    <input  type="number" placeholder="Quantity" aria-label="Quantity" defaultValue={this.state.currentQuantity} onChange={this.props.changeQuantity} className="form-control"/>
                    <span className="error_msg">{this.props.quantityError}</span>
                </div>
                <button className="btn btn-primary" disabled={!this.props.valid}  onClick={this.handleClick}>Add</button><button className="btn btn-primary" onClick={this.cancel}>Cancel</button>
            </div>
        )

    }
}

export default ProductCardAddComponent;
import React from 'react';




class ProductCardComponent extends React.Component {



    render () {

        return(

            <div className="card" style={{width: "18rem"}}>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>Brand:{this.props.infoItem.brandTitle}</h5>
                    <p className={"card-text"}>Price:{this.props.infoItem.price}$</p>
                    <p className={"card-text"}>Quantity:{this.props.infoItem.quantity} unit</p>
                </div>

            </div>
        )

    }
}





export default ProductCardComponent;
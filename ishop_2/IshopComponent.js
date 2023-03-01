
var IshopComponent  = React.createClass({

    displayName: 'IshopComponent',

    propTypes: {

        cars:React.PropTypes.arrayOf(
                React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                brandTitle: React.PropTypes.string.isRequired,
                modelTitle: React.PropTypes.string.isRequired,
                image:React.PropTypes.string.isRequired,
                price:React.PropTypes.number.isRequired,
                quantity: React.PropTypes.number.isRequired,
            })
        )
    },
    getInitialState:function() {
    return {
        selectItemCode:null,
        defaultCards:this.props.cars

    }
    },
    cbSelect:function (code){

    this.setState({selectItemCode:code})

    },
    cbDelete:function (code){

        this.setState({defaultCards:this.state.defaultCards.filter(item =>{
                  return item.code!== code;
            })})

    },


   render: function () {
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
          

    return  React.DOM.div(null,
            React.createElement(TitleComponent, {title:this.props.title} ),
             React.DOM.table({className:"table table-dark table-striped"},
                 React.DOM.thead(null,
                     React.DOM.tr(null,
                         React.DOM.th({scope:"col",},'#'),
                         React.DOM.th({scope:"col"},'Brand'),
                         React.DOM.th({scope:"col"},'Model'),
                         React.DOM.th({scope:"col"},'Price'),
                         React.DOM.th({scope:"col"},'Image'),
                         React.DOM.th({scope:"col"},'Quantity'),
                         React.DOM.th({scope:"col"},'Delete'),
                     ),
                 ),
                 React.DOM.tbody(null,ItemCard),
              ))




   }


})


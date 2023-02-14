var IshopComponent  = React.createClass({

    displayName: 'IshopComponent',

    propTypes: {
        title: React.PropTypes.string.isRequired,
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



   render: function () {

    var ItemCard = this.props.cars.map( (v,index) =>
      
        React.DOM.tr({scope:"row", key:v.code},
        React.DOM.td(null, index+1),
        React.DOM.td(null, v.brandTitle),
        React.DOM.td(null, v.modelTitle),
        React.DOM.td(null, `${v.price} $`),
        React.DOM.td(null,React.DOM.img({src: v.image})),
        React.DOM.td(null,v.quantity),
        )
           );


    return  React.DOM.div(null,
            React.createElement(TitleComponent, {title:this.props.title} ),
            React.DOM.table({className:"table table-dark table-striped"},
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        React.DOM.th({scope:"col"},'#'),
                        React.DOM.th({scope:"col"},'Brand'),
                        React.DOM.th({scope:"col"},'Model'),
                        React.DOM.th({scope:"col"},'Price'),
                        React.DOM.th({scope:"col"},'Image'),
                        React.DOM.th({scope:"col"},'Quantity'),
                    ),
                ),
                React.DOM.tbody (null, ItemCard),
            ))



          
   }


})


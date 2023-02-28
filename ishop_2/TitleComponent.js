var TitleComponent  = React.createClass({

    displayName: 'TitleComponent',

   getDefaultProps: function () {
        return {title: "Some shop"}

    },

propTypes: {
    title: React.PropTypes.string.isRequired


},



    render: function () {
     
        return React.DOM.div({className:'ShopTitle'},this.props.title )

    }
})
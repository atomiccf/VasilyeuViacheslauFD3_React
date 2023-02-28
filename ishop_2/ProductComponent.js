var ProductComponent  = React.createClass({

    displayName: 'ProductComponent',


    clicked:function (){

      return this.props.cbSelect(this.props.code);


    },
    delete:function (EO){
         EO.stopPropagation();
         this.props.cbDelete(this.props.code);


    },


    render: function () {

        return    React.DOM.tr({
                scope:"row",
                key:this.props.code,
                className:(this.props.selectItemCode === this.props.code)? "table-primary": "",
                onClick:this.clicked,
            },
            React.DOM.td(null,this.props.index),
            React.DOM.td(null,this.props.brandTitle),
            React.DOM.td(null,this.props.modelTitle),
            React.DOM.td(null,this.props.price + '$'),
            React.DOM.td(null,React.DOM.img({src: this.props.src})),
            React.DOM.td(null,this.props.quantity),
            React.DOM.td(null,React.DOM.button({ type: "button",className:"btn btn-warning", onClick:this.delete,},'Delete')),

    );

    }
})
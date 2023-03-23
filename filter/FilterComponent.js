
var FilterComponent = React.createClass({

    displayName: 'FilterComponent',

    propTypes: {
        words: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),

    },

    getInitialState() {
        return {
            isSort:false,
            filterStr:'',
            wordList:this.props.words

        }

    },
    sortChecked:function (EO) {

        this.setState({isSort:EO.target.checked},this.sortList);

    },
    filterChenged:function (EO) {

    this.setState({filterStr:EO.target.value},this.sortList);

    },

    reset:function () {

        this.setState( {isSort:false, filterStr:''},this.sortList)

    },

    sortList:function () {
        let list = this.props.words.slice()

        if(this.state.isSort) list.sort();

        if (this.state.filterStr) list=list.filter(item => {

             return item.includes(this.state.filterStr)


        })
        this.setState({wordList:list});
    },

render: function () {

    return   React.DOM.div( null,
        React.DOM.div({className: 'container'},
            React.createElement('input',{type:'checkbox', checked:this.state.isSort, onChange:this.sortChecked}),
            React.createElement('input',{type:'text', value:this.state.filterStr,onChange:this.filterChenged}),
            React.createElement('button',{type:'button',onClick:this.reset}, 'Reset'),
            React.createElement('div',{className:'textarea'},this.state.wordList.join('\n')),
        )

    )

}

})


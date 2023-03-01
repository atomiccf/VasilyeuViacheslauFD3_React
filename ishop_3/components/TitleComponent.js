
import React from 'react';


import './TitleComponent.css';
import PropTypes from 'prop-types';

class TitleComponent extends React.Component {

    static propTypes = {

        title: PropTypes.string.isRequired,
    };

    static defaultProps = {
       title: "Some shop",
    };

    render () {

        return(
            <div className="ShopTitle">{this.props.title}</div>
        );

    }
}





export default TitleComponent;
import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';



class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,

  };


  render() {
    let arr = this.props.text.split(/<[^<>]+>/)
    let result = [];
    for (let i=0 ; i<arr.length ; i++) {
      if (i <= arr.length-1) {
        result.push(<br/>);
        result.push(arr[i])



      }

    }
    return (

      <div className="block">
      {result}
      </div>
    )
    ;

  }

}

  export default BR2JSX;

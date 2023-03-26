import React from 'react';
import {newEvent} from "./events";


import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      sureName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lastName:PropTypes.string.isRequired,
    /*  balance: PropTypes.number.isRequired,*/
      status:PropTypes.string.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

    componentDidUpdate = (oldProps, oldState) => {
        console.log("MobileClient id="+this.props.info.id+" componentDidUpdate");
       if ( this.props.info.sureName!==this.state.info.sureName ||
            this.props.info.name!==this.state.info.name ||
            this.props.info.lastName!==this.state.info.lastName ||
            this.props.info.balance!==this.state.info.balance||
            this.props.info.id!==this.state.info.id)
            this.setState({info:this.props.info});
    };




 deleteHandler = () => {

     newEvent.emit('deleteClient',this.state.info.id)

 }

 editHandler = () => {
     console.log(this.state.info)
     newEvent.emit('selectClient',this.state.info.id,this.state.info)


 }


  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
      const active = this.state.info.status !== 'blocked';
    return (

     <tr  key = {this.state.info.id}>
        <td>{this.state.info.sureName}</td>
        <td>{this.state.info.name}</td>
        <td>{this.state.info.lastName}</td>
        <td>{this.state.info.balance}</td>
        <td className={ active?'active':'blocked'}>{this.state.info.status}</td>
        <td> <button  onClick={this.editHandler} type={"button"} >Редактировать</button></td>
        <td> <button onClick={this.deleteHandler}  type={"button"} >Удалить</button></td>
  </tr>

    );

  }

}

export default MobileClient;

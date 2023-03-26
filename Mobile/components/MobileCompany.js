import React from 'react';
import {newEvent} from "./events";

import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import ClientEditComponent from "./ClientEditComponent";
import AddClientComponent from "./AddClientComponent";

import './MobileCompany.css';


class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        sureName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        lastName:PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        status:PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    clients: this.props.clients,
    isEdit: false,
    selectItemCode:null,
    editID:'',
    clientEdit:'',
    cardMode:0,  /*show показать карточку редактирования, add добавление нового клиента*/
  };

  selectClient = (id,client) =>{

    this.setState({selectItemCode:id,cardMode:'show',clientEdit:client,editID:id })

  };

  startAdd =() =>{

    this.setState({cardMode:"add"})

      }
  cancelEdit =() => {

    this.setState({cardMode:0})

  }

  deleteClient = (id) => {

    let newClients=[...this.state.clients];
    this.setState({clients:newClients.filter(item =>{

        return item.id !== id;
      })})

  }

  editClient = (client) => {

    let newClients = [...this.props.clients]
    newClients.forEach((item, index) => {

      if (item.id === client.id) {

        let newClient = {...item};

        newClient.sureName = client.sureName;
        newClient.name = client.name;
        newClient.lastName = client.lastName;
        newClient.balance = client.balance;

        newClients[index] = newClient;

      }

    })

    this.setState({clients:newClients,cardMode:0,clientEdit:''})

  }

  addClient = (client) => {

    this.setState({clients:[...this.state.clients,client],cardMode:0})

  }


  showActive = () => {
    this.setState({clients:[...this.state.clients].filter(item => {
        return item.status === 'active'})

    })
  }
  showBlocked = () => {

    this.setState({clients:[...this.state.clients].filter(item => {
        return item.status === 'blocked'})

    })
  }
  showAll = () => {

    this.setState({clients: this.props.clients});

  }
  


  componentDidMount() {
    newEvent.addListener('deleteClient', this.deleteClient);
    newEvent.addListener('editClient', this.editClient);
    newEvent.addListener('cancelEdit', this.cancelEdit);

    newEvent.addListener('selectClient', this.selectClient);
    newEvent.addListener('addClient', this.addClient);

  }

  componentWillUnmount() {

    newEvent.removeListener('deleteClient', this.deleteClient);
    newEvent.removeListener('selectClient', this.selectClient);

    newEvent.removeListener('selectClient', this.selectClient);
    newEvent.removeListener('cancelEdit', this.cancelEdit);
  }


  render() {
    console.log(this.state.clients)
    console.log("MobileCompany render");

    const clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <div className='button_block'>
          <input onClick={this.showAll} type="button" value="Все"/>
          <input onClick={this.showActive} type="button" value="Активные"/>
          <input onClick={this.showBlocked} type="button" value="Заблокированные"/>
        </div>
        <table>
          <thead>
          <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Баланс</th>
            <th>Статус</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
          </thead>
          <tbody>{clientsCode}</tbody>
          </table>
        <input onClick={this.startAdd} type="button" value="Добавить нового клиента"/>
        {(this.state.selectItemCode && this.state.cardMode === 'show')&&
            <ClientEditComponent  info={this.state.clientEdit} editId={this.state.editID} />

        }

        {( this.state.cardMode === 'add')&&
            <AddClientComponent  info={this.state.clients} />

        }
      </div>
    )
    ;

  }

}

export default MobileCompany;

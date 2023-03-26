import React from 'react';

import {newEvent} from "./events";



class ClientEditComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.sureRef = React.createRef();
        this.nameRef = React.createRef();
        this.lastRef = React.createRef();
        this.balRef = React.createRef();

    }

    save = () => {

        let obj =  {
            id:this.props.editId,
            sureName:this.sureRef.current ? this.sureRef.current.value : this.props.info.sureName,
            name:this.nameRef.current ? this.nameRef.current.value : this.props.info.name,
            lastName:this.lastRef.current ? this.lastRef.current.value : this.props.info.lastName,
            balance:this.balRef.current ?  parseInt(this.balRef.current.value) : this.props.info.balance,
            };
        console.log(obj)
        console.log(obj.balance)
        newEvent.emit('editClient', obj)


    }

    cancel = () => {
        newEvent.emit('cancelEdit')

    }
    render () {

        return(

            <div className="input-group">
               <div className="control_block"><input type="text" defaultValue={this.props.info.sureName} ref={this.sureRef} data-tag='tag' placeholder="Фамилия" aria-label="Фамилия"    className="form-control"/>
                     </div>

                <div className="control_block"> <input type="text" defaultValue={this.props.info.name} ref={this.nameRef} placeholder="Имя" aria-label="Имя"   className="form-control"/>
                     </div>


                <div className="control_block"><input type="text" defaultValue={this.props.info.lastName} ref={this.lastRef} placeholder="Отчество" aria-label="Отчество"   className="form-control"/>

                </div>

               <div className="control_block"><input type="number" defaultValue={this.props.info.balance}  ref={this.balRef} placeholder="Баланс" aria-label="Баланс"   className="form-control"/>

               </div>

                <button onClick={this.save}>Save</button><button  onClick={this.cancel}>Cancel</button>
            </div>
        )

    }
}

export default ClientEditComponent;
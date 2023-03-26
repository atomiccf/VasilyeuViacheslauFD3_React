import React from 'react';

import {newEvent} from "./events";


class AddClientComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.sureRef = React.createRef();
        this.nameRef = React.createRef();
        this.lastRef = React.createRef();
        this.statRef = React.createRef();
        this.balRef = React.createRef();

    }
        state = {
        code:''

        }
    generateCode = () => {

        this.props.info.forEach((elem) => {

            let count = 0;
            count +=elem.id;
            return this.state.code = count+10


        } )


    };
    save = () => {
            this.generateCode()

        let obj =  {
            id:this.state.code,
            sureName:this.sureRef.current.value,
            name:this.nameRef.current.value,
            lastName:this.lastRef.current.value,
            status:this.statRef.current.value,
            balance:parseInt(this.balRef.current.value),
        };

        newEvent.emit('addClient', obj)

    }

    cancel = () => {

        newEvent.emit('cancelEdit')

    }
    render () {

        return(

            <div className="input-group">
                <div className="control_block"><input type="text"  ref={this.sureRef} data-tag='tag' placeholder="Фамилия" aria-label="Фамилия"    className="form-control"/>
                </div>

                <div className="control_block"> <input type="text"  ref={this.nameRef} placeholder="Имя" aria-label="Имя"   className="form-control"/>
                </div>


                <div className="control_block"><input type="text"  ref={this.lastRef} placeholder="Отчество" aria-label="Отчество"   className="form-control"/>

                </div>

                <div className="control_block"><input type="number"   ref={this.balRef} placeholder="Баланс" aria-label="Баланс"   className="form-control"/>

                </div>
                <div className="control_block"><input type="text"  ref={this.statRef} placeholder="Статус" aria-label="Статус"   className="form-control"/>

                </div>
                <button onClick={this.save}>Save</button><button  onClick={this.cancel}>Cancel</button>
            </div>
        )

    }
}

export default AddClientComponent;
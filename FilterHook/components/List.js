import React from 'react';

import './List.css'

function List(props) {

    console.log('render')
      return <React.Fragment>
        <div className="textarea">
            {props.list.join('\n')}
        </div>
    </React.Fragment>;
}

export default List;
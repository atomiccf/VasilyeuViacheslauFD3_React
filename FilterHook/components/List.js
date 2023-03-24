import React from 'react';

import './List.css'

function List(props) {
    let list = props.list.slice()



    if (props.isSort) {

        list.sort()

    }
    if (props.filterStr) {

        list = list.filter(item => {

            return item.includes(props.filterStr)


        })
        return list
    }

   return <React.Fragment>
        <div className="textarea">
            {list.join('\n')}
        </div>
    </React.Fragment>;
}

export default List;
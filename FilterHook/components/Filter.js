import React,{useState} from "react";

import Control from "./Control";
import List from "./List";
import "./Filter.css"

function Filter() {
    const wordList = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

    const [isSort, setIsSort] = useState(false);
    const [filterStr, setFilterStr] = useState('');

    let cbChecked = (bool) =>{

        setIsSort(bool)
        console.log(isSort)
    }

    let cbGetFilterStr = (str) =>{

        setFilterStr(str)
        console.log(filterStr)
    }


    return <React.Fragment>

            <Control cbChecked={cbChecked}
                     cbGetFilterStr={cbGetFilterStr}>
            </Control>
            <List list={wordList}
                      isSort={isSort}
                      filterStr={filterStr}>
            </List>

     </React.Fragment>;
}

export default Filter;
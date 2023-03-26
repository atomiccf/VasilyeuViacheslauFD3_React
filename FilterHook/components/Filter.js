import React, {useEffect, useState} from "react";

import Control from "./Control";
import List from "./List";
import "./Filter.css"

function Filter() {
    const wordList = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

    const [isSort, setIsSort] = useState(false);
    const [filterStr, setFilterStr] = useState('');
    const [list, setList] = useState([]);

    let cbChecked = (bool) =>{

        setIsSort(bool)

    }

    let cbGetFilterStr = (str) =>{

        setFilterStr(str)

    }


    useEffect(()=>{

        let newWords = wordList.slice()


         if (isSort)
            newWords.sort()
           setList(newWords)



        if (filterStr) {
            setList( newWords.filter(item => {

                    return item.includes(filterStr)

                })
            )

        }


    },[isSort,filterStr])
    useEffect(()=>{



        if (filterStr) {
              setList( list.filter(item => {

                  return item.includes(filterStr)

              })
              )

          } else  setList(wordList.slice())




    },[filterStr])

    return <React.Fragment>

            <Control cbChecked={cbChecked}
                     cbGetFilterStr={cbGetFilterStr}>
            </Control>
            <List list={list}>
            </List>

     </React.Fragment>;
}

export default Filter;
import React,{useRef} from 'react';

import './Control.css'


function Control(props)  {

    const check = useRef(false)
    const input = useRef('')

    let sortChecked = (EO) => {

            props.cbChecked(EO.target.checked)


    }

    let getFilterStr = (EO) => {
        props.cbGetFilterStr(EO.target.value)

    }

    let clickReset = () => {
        check.current.checked = false;
        props.cbChecked(false)
        input.current.value = ''
        props.cbGetFilterStr('')
    }


  return <React.Fragment>

      <input ref={check}  type="checkbox" onChange={sortChecked}/>
      <input ref={input} type="text" onChange={getFilterStr}/>
      <input type="button" value="Reset" onClick={clickReset}/>

   </React.Fragment>;
}

  export default Control;

import React,{useRef} from "react";
import { useDispatch, useSelector} from 'react-redux';
import {setTaskInfo} from "../redux/userSlice";

import './EditComponent.css'
import {newEvent} from "./event";


export const EditComponent = () => {

    const dispatch = useDispatch();
    const task= useSelector(state => state.user.taskInfo);
    const inputEl = useRef(null);

    const cancelHandler = () => {

        newEvent.emit('cancel')

    }

    const updateText = (EO) => {

        dispatch(setTaskInfo({taskInfo:EO.target.value}))


    }

    const makeChange = () => {

        newEvent.emit('update')

    }

    return (

        <>
            <div className={'editBlock'}>
                <input onChange={updateText} type="text" ref={inputEl} defaultValue={task}/>
                <button onClick={makeChange} >Change</button>
                <button onClick={cancelHandler}>Cancel</button>
            </div>

        </>



    )








}
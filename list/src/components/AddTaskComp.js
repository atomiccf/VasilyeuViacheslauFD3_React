import React, {useState,useRef} from "react";
import { useSelector} from 'react-redux';

import { getDatabase, ref,push,set} from "firebase/database";

import {ShowListComp} from "./ShowListComp";
import "./AddTaskComp.css"

export const AddTaskComp =() => {



    const [task,setTask] = useState('');
    let input = useRef('')
    let userId = useSelector(state => state.user.id);
    let currentDate = new Date().toLocaleString();


    const getTask = (EO) => {

        setTask(EO.target.value)


    }

    const sendData = (EO) => {
        if (task === null) {

            EO.preventDefault();

        }
        const db = getDatabase();
        const postListRef = ref(db, 'users/'+ userId);
        const newPostRef = push(postListRef);


            set(newPostRef,   {
                id: newPostRef.key,
                task: task,
                date: currentDate,
                state:'current'
            }).then(() => {

                console.log("Success")
                input.current.value ='';
            })
                .catch(console.error);



    }




    return (
        <>
            <div className="inputBlock">
                <div className='inputGroup'>
                    <input ref={input} onChange={getTask} type="text"/>
                    <input onClick={sendData} value='Send' type="submit"/>
                </div>

                <ShowListComp/>
            </div>

        </>




    )




}
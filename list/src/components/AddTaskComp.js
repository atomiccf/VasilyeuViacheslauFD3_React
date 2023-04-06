import React, {useState,useRef} from "react";
import { useSelector} from 'react-redux';

import { getDatabase, ref,push,set} from "firebase/database";

import {ShowListComp} from "../components/ShowListComp";
import "./AddTaskComp.css"

export const AddTaskComp =() => {



    const [task,setTask] = useState('');
    let input = useRef('')
    let userId = useSelector(state => state.user.id);
    let currentDate = new Date().toLocaleString();


    const getTask = (EO) => {

        setTask(EO.target.value)


    }

    const sendData = () => {
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
                    <input onClick={sendData} type="submit"/>
                </div>

                <ShowListComp/>
            </div>

        </>




    )




}
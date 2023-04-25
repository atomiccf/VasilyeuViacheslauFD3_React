import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setTaskInfo,setTaskId} from "../redux/userSlice";
import {newEvent} from "./event";

import {getDatabase, onValue, ref, update} from "firebase/database";

import "./ShowListComp.css"
import {EditComponent} from "./EditComponent";


export const ShowListComp = () => {

    const db = getDatabase();
    const currentDate = new Date().toLocaleString();
    const isLogin = useSelector(state => state.user.isLogin);
    const userId = useSelector(state => state.user.id);
    const userTask = useSelector(state => state.user.taskInfo);
    const taskId = useSelector(state => state.user.taskId);
    const dispatch = useDispatch();

    const [dataCurrent,setDataCurrent] = useState([]);
    const [dataComplete,setDataComplete] = useState([]);
    const [isCurrent,setCurrent] = useState(true);
    const [isComplete,setComplete] = useState(false);
    const [isEdit,setEdit] = useState(false);
     const [countCurrent,setCountCurrent] = useState(0)
    const [countComplete,setCountComplete] = useState(0)


    const handlerEdit = (EO) => {

        EO.target.parentNode.childNodes.forEach(item => {
            if (item.className === "text_style") {

                dispatch(setTaskInfo({taskInfo:item.firstChild.nextSibling.textContent}));
                dispatch(setTaskId({taskId:EO.target.parentNode.id}))
            }
        })

        setEdit(true);

        console.log(taskId)
        newEvent.addListener('update', updateData);
        newEvent.addListener('cancel', cbCancel);

    }

    const cbCancel = () => {

        setEdit(false);
        newEvent.removeListener('cancel', cbCancel);
    }

    const updateData = () => {

        const postRef = ref(db, `users/${userId}/${taskId}`);
        update(postRef, {
            task: userTask,
            date: currentDate,
        }).then(() => {
            console.log("Post updated successfully!");
        })
            .catch((error) => {
                console.error(error);
            });

        setEdit(false);
        newEvent.removeListener('cancel', updateData);
    }

    const handlerChange = (EO) => {


        if(EO.currentTarget.id === "current") {
            setCurrent(true)
            setComplete(false)
            console.log( 'active current')

        }else if (EO.currentTarget.id === "complete") {
            setCurrent(false)
            setComplete(true)
            console.log('active complete')
        }



    }


    const handlerComplete = (EO) => {

        EO.target.parentNode.classList.add('taskBlock_hide');
        const postId = EO.target.parentNode.id;


        setTimeout(()=> {

            const postRef = ref(db, `users/${userId}/${postId}`);

            update(postRef, {
                state: 'complete'
            }).then(() => {
                console.log("Post updated successfully!");
            })
                .catch((error) => {
                    console.error(error);
                })
        },2000)


    }

    useEffect(()=>{

        const Ref = ref(db,'users/'+ userId);

        onValue(Ref, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                const currenArray = Object.values(data).filter(item => {
                    return item.state === "current"
                });
                    const completeArray =Object.values(data).filter(item => {
                        return item.state === "complete"
                    });

                setDataCurrent(currenArray);
                setDataComplete(completeArray);
                setCountCurrent(currenArray.length)
                setCountComplete(completeArray.length)

            }


        });

    }, [db,isLogin,userId])


    return    (

        <>
            {(dataCurrent === null || dataComplete === null) &&
                <div className='showBlock' >
                </div>
            }


           {(isCurrent) &&

                <div className='showBlock'>
                    <div className="tabs_panel">
                        <div onClick={handlerChange} id="current" className={(isCurrent)?"tabBlock pressed":"tabBlock"}>Current tasks {countCurrent}</div>
                        <div onClick={handlerChange} id="complete" className={"tabBlock tabBlock_complete"}>Complete tasks {countComplete}</div>
                    </div>
                    {dataCurrent.map((value) => (
                        <div  id={value.id} className="taskBlock" key={value.id}>
                            <input type="radio"/>
                            <div className='text_style'> {value.task} <span>{value.date}</span></div>

                            <button title={'edit'} className ='edit' onClick={handlerEdit}></button>
                            <button title={'remove'} className ='remove' onClick={handlerComplete}></button>
                        </div>
                    ))}
                </div>
            }

            {(isComplete) &&

                <div className='showBlock'>
                    <div className="tabs_panel">
                        <div onClick={handlerChange} id="current" className="tabBlock">Current tasks {countCurrent}</div>
                        <div onClick={handlerChange} id="complete" className={(isComplete)? "tabBlock tabBlock_complete pressed":"tabBlock tabBlock_complete"}>Complete tasks {countComplete}</div>
                    </div>
                    {dataComplete.map((value) => (
                        <div  id={value.id} className="taskBlock" key={value.id}>
                            <input checked='true' type="radio"/>
                            <div className='text_style'> <span>{value.task}</span> <span>{value.date}</span></div>
                            </div>
                    ))}
                </div>
            }
            {(isEdit) &&
                <EditComponent/>


            }

        </>

    )

}
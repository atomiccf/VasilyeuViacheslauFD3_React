import React,{useState,useEffect} from "react";
import { useSelector} from 'react-redux';

import { getDatabase, ref,update,onValue} from "firebase/database";

import "./ShowListComp.css"



export const ShowListComp = () => {
    const db = getDatabase();
    const isLogin = useSelector(state => state.user.isLogin);
    const userId = useSelector(state => state.user.id);
    const [dataCurrent,setDataCurrent] = useState([]);
    const [dataComplete,setDataComplete] = useState([]);
    const [isCurrent,setCurrent] = useState(true);
    const [isComplete,setComplete] = useState(false);
    const [countCurrent,setCountCurrent] = useState(0)
    const [countComplete,setCountComplete] = useState(0)


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
        console.log(EO.target.parentNode.id)

        EO.target.parentNode.classList.add('taskBlock_hide');
        let postId = EO.target.parentNode.id;


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
                            <div className='text_style'> <span>{value.task}</span> <span>{value.date}</span></div>
                            <button onClick={handlerComplete}></button>
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
        </>

    )

}
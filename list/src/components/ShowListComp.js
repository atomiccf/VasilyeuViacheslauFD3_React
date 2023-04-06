import React,{useState,useEffect} from "react";
import { useSelector} from 'react-redux';

import { getDatabase, ref,onValue} from "firebase/database";

import "./ShowListComp.css"


export const ShowListComp = () => {
    const db = getDatabase();
    const isLogin = useSelector(state => state.user.isLogin)
    const userId = useSelector(state => state.user.id);
    const [data,setData] = useState([])

    useEffect(()=>{

        const Ref = ref(db,'users/'+ userId);
        onValue(Ref, (snapshot) => {
            /*здесь вы можете полученные данные обработать*/
            const data = snapshot.val();
            if (data) {
                const todosArray = Object.values(data);
                setData(todosArray);
            }


        });

    }, [db,isLogin])


    return    (

        <>
            {(data === null) &&
                <div className='showBlock' >
                </div>


            }


           {(data !== null) &&
                <div className='showBlock'>
                    {data.map((value) => (
                        <div className="taskBlock" key={value.id}>
                            <span className=""> {value.task}</span>
                            <span className="restaraunt-desc"> {value.date}</span>
                        </div>
                    ))}




                </div>
            }




        </>



    )




}
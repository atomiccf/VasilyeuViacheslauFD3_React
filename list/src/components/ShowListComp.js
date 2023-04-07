import React,{useState,useEffect} from "react";
import { useSelector} from 'react-redux';

import { getDatabase, ref,update,onValue} from "firebase/database";

import "./ShowListComp.css"



export const ShowListComp = () => {
    const db = getDatabase();
    const isLogin = useSelector(state => state.user.isLogin)
    const userId = useSelector(state => state.user.id);
    const [data,setData] = useState([])


    const lineTrough = (EO) => {

        if (EO.currentTarget.checked) {
            console.log(EO.currentTarget.checked)
            console.log(EO.target.id)
        }




    }
    const handlerComplete = (EO) => {
        console.log(EO.target.parentNode.id)

        EO.target.parentNode.classList.add('taskBlock_hide')
        let postId = EO.target.parentNode.id


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
                const todosArray = Object.values(data).filter(item => {
                    return item.state === "current"
                });
                setData(todosArray);
            }


        });

    }, [db,isLogin,userId])


    return    (

        <>
            {(data === null) &&
                <div className='showBlock' >
                </div>
            }


           {(data !== null) &&
                <div className='showBlock'>
                    {data.map((value) => (
                        <div  id={value.id} className="taskBlock" key={value.id}>
                            <input onClick={lineTrough} type="radio"/>
                            <div className='text_style'> <span>{value.task}</span> <span>{value.date}</span></div>
                            <button onClick={handlerComplete}></button>
                        </div>
                    ))}
                </div>
            }
        </>

    )

}
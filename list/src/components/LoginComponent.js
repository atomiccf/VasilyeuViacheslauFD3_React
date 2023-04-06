import React,{useState}  from 'react';
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import {setUser,setLogin} from "../redux/userSlice";
import { useDispatch} from 'react-redux';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./LoginComponent.css"

export const LoginComponent = () => {

    const [email,setEmail] = useState('');

    const [pass,setPass] = useState('');
    const [isLogin,set] = useState(false);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const changeEmail =(EO) => {

        setEmail(EO.target.value)

    }
    const changePass =(EO) => {

        setPass(EO.target.value);
        set(false)
    }

    const handlerSinIn = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,pass)
            .then( ({user}) =>{
                dispatch(setUser({
                    email:user.email,
                    id:user.uid,
                    token:user.accessToken,

                }))
                dispatch(setLogin({isLogin:true}))
                navigate('/');


            })
            .catch(()=> {
                console.error()
                dispatch(setLogin({isLogin:false}))


            });


    }

    return (
        <>

            {(isLogin) &&
                <>
                    <div>
                        <h2> You are signed in {/*{userName.email}*/}</h2>
                        <NavLink to='/'><div>Start</div></NavLink>
                    </div>


                </>
            }
            { (!isLogin) &&
                <>
                    <div className="login_block">
                        <div className="login_form">
                            <h2>Please, sing in !</h2>
                            <input onChange={changeEmail} placeholder="Enter e-mail" type="text"/>
                            <input onChange={changePass} placeholder="Password" type="password"/>
                            <button onClick={handlerSinIn}>Send</button>

                        </div>

                    </div>
                </>


            }


        </>




    )

}
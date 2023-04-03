import React, { useState, useRef } from 'react';
import {NavLink} from "react-router-dom";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./PageRegistration.css"

import './PageLogin.css'


export const PageLogin =() => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isAuth, setIsAuth] = useState(false);

    const mail = useRef();
    const password = useRef();

    const changeEmail =(EO) => {

        setEmail(EO.target.value)


    }
    const changePass =(EO) => {

        setPass(EO.target.value)


    }

    const  loginAccount = () => {


        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,pass)
            .then ((userCredential) => {
                console.log('Success')
                /*const user = userCredential.user;*/


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`ErrorCode: ${errorCode} ErrorMessage: ${errorMessage} `)
            });
        setIsAuth(true)
        mail.current.value = '';
        password.current.value = '';
    }

    return (
        <>

            {(isAuth) &&
                <>
                    <div>
                        <h2>You are signed in</h2>
                        <NavLink to='/'><div>Start</div></NavLink>
                    </div>


                </>
            }
           { (!isAuth) &&
                <>
                    <div className="login_block">
                        <div className="login_form">
                            <input ref={mail} onChange={changeEmail} placeholder="Enter e-mail" type="text"/>
                            <input ref={password} onChange={changePass} placeholder="Password" type="password"/>
                            <button onClick={loginAccount}>Send</button>

                        </div>

                    </div>
                </>


            }


        </>




    )




}
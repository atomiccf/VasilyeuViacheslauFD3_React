import React, { useState, useRef } from 'react';
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import { useDispatch} from 'react-redux';
import {setUser} from "../redux/userSlice";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "./SingUpComponent.css"


export const  SingUpComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isReg, setIsReg] = useState(false);
    const mail = useRef();
    const password = useRef();

    const changeEmail =(EO) => {

        setEmail(EO.target.value)


    }
    const changePass =(EO) => {

        setPass(EO.target.value)


    }

    const  createAccount = () => {


        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,pass)
            .then( ({user}) =>{
                dispatch(setUser({
                    email:user.email,
                    id:user.uid,
                    token:user.accessToken,

                }))
                navigate('/');


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`ErrorCode: ${errorCode} ErrorMessage: ${errorMessage} `)
            });
        setIsReg(true)
        mail.current.value = '';
        password.current.value = '';
    }

    return (
        <>

            {(isReg) &&
                <>
                    <div>
                        <h2>Congratulations! Registration complete!</h2>
                        <p>Please Sing In</p>
                        <NavLink to='login'><div >Sing In</div></NavLink>
                    </div>


                </>
            }
            {(!isReg) &&
                <>
                    <div className="registration_block">
                        <div className="registration_form">
                            <input ref={mail} onChange={changeEmail} placeholder="Enter e-mail" type="text"/>
                            <input ref={password} onChange={changePass} placeholder="Password" type="password"/>
                            <button onClick={createAccount}>Send</button>

                        </div>

                    </div>
                </>


            }


        </>




    )

}
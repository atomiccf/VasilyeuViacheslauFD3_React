import React, { useState, useRef } from 'react';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./PageRegistration.css"




export const PageRegistration =() => {

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
            .then ((userCredential) => {
                console.log('Success')
                 const user = userCredential.user;


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
                    <a href="">Sing In</a>
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
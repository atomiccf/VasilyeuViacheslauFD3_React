import React  from 'react';
import {NavLink} from "react-router-dom";
import {newEvent} from "../components/event";


import { useDispatch, useSelector } from 'react-redux';

import { userLogin } from "../redux/userLogin.js";


import "./PageRegistration.css"

import './PageLogin.css'


export const PageLogin =() => {

    const dispatch = useDispatch();
    const user = useSelector( state => state.user);
    const changeEmail =(EO) => {

        newEvent.emit('Mail',EO.target.value)

    }
    const changePass =(EO) => {

        newEvent.emit('Pass',EO.target.value)


    }

    function load (){

        dispatch(userLogin)

    }



    return (
        <>

            {(user.isLogin) &&
                <>
                    <div>
                        <h2> You are signed in {user.data.email}</h2>
                        <NavLink to='/'><div>Start</div></NavLink>
                    </div>


                </>
            }
           { (!user.isLogin) &&
                <>
                    <div className="login_block">
                        <div className="login_form">
                            <h2>Please, sing in !</h2>
                            <input onChange={changeEmail} placeholder="Enter e-mail" type="text"/>
                            <input onChange={changePass} placeholder="Password" type="password"/>
                            <button onClick={load}>Send</button>

                        </div>

                    </div>
                </>


            }


        </>




    )




}
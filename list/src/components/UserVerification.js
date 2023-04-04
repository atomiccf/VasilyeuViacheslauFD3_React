import React from "react";
import {useSelector} from 'react-redux'
import {useEffect} from "react";
import {NavLink} from "react-router-dom";

import "./UserVerification.css"

export const UserVerification =() => {


    let isLogin = useSelector(state => state.user.isLogin)
    let userName = useSelector(state => JSON.parse(state.user.data))

    useEffect(() => {
        if(isLogin === undefined){
            return}
        else{


        }}, [isLogin,userName]);



    return (
        <>
            { ( !isLogin   ) &&

                <>
                    <div className="user_info">
                        <span>You not registered</span> <NavLink to='registration'><div >Sing Up</div></NavLink> <NavLink to='login'><div >Sing In</div></NavLink>
                    </div>

                </>

            }
            {
                (isLogin) &&

                <>
                    <div className="user_info">
                        <span>Hi, {userName.email}!</span>  <NavLink to='login'><div >Sing out</div></NavLink>
                    </div>

                </>



            }
        </>




    )









}
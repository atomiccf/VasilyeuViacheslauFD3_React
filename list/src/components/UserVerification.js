import React from "react";

import {setLogin,setUser} from "../redux/userSlice";
import { useDispatch,useSelector } from 'react-redux';

import {NavLink} from "react-router-dom";
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";

import "./UserVerification.css"

export const UserVerification =() => {

    let isLogin = useSelector(state => state.user.isLogin)
    let email = useSelector(state => state.user.email)
    const dispatch = useDispatch();
    const auth = getAuth();


    const handleLogout = () => {


        signOut(auth).then(() => {
            console.log("Sign-out successful") // Sign-out successful.
            dispatch(setLogin({isLogin:false}))
            console.log(isLogin)
        }).catch((error) => {
            console.log(error)
        });


    }

    onAuthStateChanged(auth, (user) => {

        if (user) {
            dispatch(setUser({
                email:user.email,
                id:user.uid,
                token:user.accessToken,
            }))
            dispatch(setLogin({isLogin:true}))


        }


    } )



    return (
        <>
            { (!isLogin) &&

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
                        <span>Hi, {email} !</span>  <NavLink to='login'><button onClick={handleLogout}>Sing out</button></NavLink>
                    </div>

                </>



            }
        </>




    )









}
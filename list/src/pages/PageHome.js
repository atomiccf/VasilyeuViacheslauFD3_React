import React from "react";
import {useSelector} from 'react-redux'
import {useEffect} from "react";
import {NavLink} from "react-router-dom";

import "./PageHome.css"

export const PageHome = () => {


    let isLogin = useSelector(state => state.user.isLogin)
    let userName = useSelector(state => JSON.parse(state.user.data))


    useEffect(() => {
        if(isLogin === undefined){
            return}
        else{


        }}, [isLogin,userName]);




    return (
    <>
        {( !isLogin   ) &&
            <>
                <div className="container_home">
                    <h1>Home Page</h1>
                    <p>Welcome in our application! If you first time there, please register!</p>

                </div>

            </>


        }

        {
            <>
                <div className="container_home">
                    <h1>Home Page</h1>
                    <h2>Welcome {userName.email} !</h2>
                    <NavLink to='list'><a href="">Start</a></NavLink>
                </div>

            </>



        }


    </>




)

}


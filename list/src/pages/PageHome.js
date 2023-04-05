import React from "react";
import {useSelector} from 'react-redux'

import {NavLink} from "react-router-dom";


import "./PageHome.css"

export const PageHome = () => {


    let isLogin = useSelector(state => state.user.isLogin)
    let email = useSelector(state => state.user.email)








    return (
    <>
        {(!isLogin) &&
            <>
                <div className="container_home">
                    <h1>Home Page</h1>
                    <p>Welcome in our application! If you first time there, please register!</p>

                </div>

            </>


        }

        {(isLogin)&&
            <>
                <div className="container_home">
                    <h1>Home Page</h1>
                    <h2>Welcome {email} !</h2>
                    <NavLink to='list'><button href="#">Start</button></NavLink>
                </div>

            </>



        }


    </>




)

}


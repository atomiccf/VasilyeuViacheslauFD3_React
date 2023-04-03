import React from "react";

import {NavLink} from "react-router-dom";

import "./PageHome.css"

export const PageHome = () => {

return (
    <>
    <div className="container_home">
        <h1>Home Page</h1>
        <p>Welcome in our application! If you first time there, please register!</p>
        <NavLink to='registration'><button>Registration</button></NavLink>
        <NavLink to='login'><button>Sing In</button></NavLink>
    </div>


    </>




)

}


import React from "react";

import {NavLink} from "react-router-dom";

import  './PagesNavigation.css';
export const PagesNavigation =() => {



    return (
        <div className='navBar'>
            <NavLink to='/'>Номе</NavLink>
            <NavLink to='List'>Add new task</NavLink>

        </div>





    )






}
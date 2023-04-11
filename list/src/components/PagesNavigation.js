import React from "react";
import { useSelector} from 'react-redux';

import {NavLink} from "react-router-dom";

import  './PagesNavigation.css';
export const PagesNavigation =() => {
    let isLogin = useSelector(state => state.user.isLogin)

    return (
        <div className='navBar'>
            <NavLink to='/'>Номе</NavLink>
            {(isLogin) &&

                <NavLink to='List'>Task</NavLink>


            }



        </div>





    )






}
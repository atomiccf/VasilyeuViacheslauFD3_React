
import React from 'react';
import {Routes,Route} from 'react-router-dom';

import {PageHome} from "../pages/PageHome";
import {PageList} from "../pages/PageList";
import {PageRegistration} from "../pages/PageRegistration";
import {PageLogin} from "../pages/PageLogin";


export const PageRouter = () => {


    return (
        <Routes>
        <Route path='/' element={<PageHome/>}></Route>
        <Route path='/list' element={<PageList/>}></Route>
        <Route path='/registration' element={<PageRegistration/>}></Route>
        <Route path='/login' element={<PageLogin/>}></Route>

        </Routes>



    )







}
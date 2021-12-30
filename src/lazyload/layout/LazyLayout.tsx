import React from 'react';
import {NavLink,Routes,Route} from "react-router-dom";
import LazyPage from "../pages/LazyPage";
import LazyPage1 from "../pages/LazyPage1";
import LazyPage2 from "../pages/LazyPage2";

const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>
            <ul>
                <li>
                    <NavLink to='lazy'>Lazy</NavLink>
                </li>
                <li>
                    <NavLink to='lazy1'>Lazy1</NavLink>
                </li>
                <li>
                    <NavLink to='lazy2'>Lazy2</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='lazy' element={<LazyPage/>}/>
                <Route path='lazy1' element={<LazyPage1/>}/>
                <Route path='lazy2' element={<LazyPage2/>}/>
            </Routes>
        </div>
    );
};

export default LazyLayout;
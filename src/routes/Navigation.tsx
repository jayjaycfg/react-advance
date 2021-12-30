import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
} from 'react-router-dom';

import logo from '../logo.svg';

import {LazyPage,LazyPage1,LazyPage2} from "../lazyload/pages";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy" className={({isActive})=> isActive ? 'nav-active' : ''}>Lazy</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy1" className={({isActive})=> isActive ? 'nav-active' : ''}>Lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={({isActive})=> isActive ? 'nav-active' : ''}>Lazy2</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path='lazy1' element={<LazyPage1/>}/>
                    <Route path='lazy2' element={<LazyPage2/>}/>
                    <Route path='lazy' element={<LazyPage/>}/>
                    <Route path='/*' element={<Navigate to='/lazy' replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};
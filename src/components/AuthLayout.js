import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";

const AuthLayout = () => {
    return (
        <div className="App">
            <NavBar/>
            <Outlet />
        </div>
    );
};

export default AuthLayout;
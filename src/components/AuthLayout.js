import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {AuthContext} from "../index";
import {observer} from "mobx-react-lite";


const AuthLayout = observer(() => {
    const {sidebar} = useContext(AuthContext);
    return (
        <div className={sidebar.isOpen ? "App sb-nav-fixed" : "App sb-nav-fixed sb-sidenav-toggled"}>
            <NavBar/>
            <div id="layoutSidenav">
            <Sidebar/>

                <div id="layoutSidenav_content">
                    <div className="container">
            <Outlet />
                    </div>
            <Footer/>
                </div>
            </div>
        </div>
    );
});

export default AuthLayout;
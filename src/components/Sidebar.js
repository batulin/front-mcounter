import React from 'react';
import {Link} from "react-router-dom";
import { UilUsersAlt, UilBedDouble, UilFileInfoAlt, UilSetting } from '@iconscout/react-unicons'
const Sidebar = () => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav p-3">
                        <Link to={"/client"}><UilUsersAlt size="30" color="#fff" /><span>Clients</span></Link>
                        <Link to={"/clients"}><UilBedDouble size="30" color="#fff" /><span>Places</span></Link>
                        <Link to={"/clients"}><UilFileInfoAlt size="30" color="#fff" /><span>Orders</span></Link>
                        <Link to={"/clients"}><UilSetting size="30" color="#fff" /><span>Settings</span></Link>
                        <Link to={"/users"}><UilUsersAlt size="30" color="#fff" /><span>Users</span></Link>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
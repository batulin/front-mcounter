import React, {useContext} from 'react';
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {AuthContext} from "../index";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faCoffee} from '@fortawesome/free-solid-svg-icons'
import Home from "../pages/Home";

const NavBar = observer(() => {
    const {user, sidebar} = useContext(AuthContext);

    const logout = () => {
        user.setId();
        user.setEmail('');
        user.setRoles([]);
        user.setIsAuth(false)
        localStorage.clear();
    }

    return (

    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand ps-3" to={"/"}>logo</Link>
        <Button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 text-light"
            onClick={() => {
                sidebar.setIsOpen(!sidebar.isOpen)
            }}
            >
            <FontAwesomeIcon icon={faBars} />
        </Button>
        <Form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
            </div>
        </Form>
    </nav>
    );
});

export default NavBar;
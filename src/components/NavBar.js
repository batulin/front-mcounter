import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {AuthContext} from "../index";
import {Link} from "react-router-dom";

const NavBar = () => {
    const {user} = useContext(AuthContext);

    const logout = () => {
        user.setId();
        user.setEmail('');
        user.setRoles([]);
        user.setIsAuth(false)
        localStorage.clear();
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Link to={"/"}>Home</Link>
                <Nav className="me-auto">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/clients"}>Clients</Link>
                    { user.isAuth ?
                    <Button onClick={() => logout()}>Logout</Button>
                    :
                    null
                    }
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
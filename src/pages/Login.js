import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {$host} from "../api";
import jwtDecode from "jwt-decode";
import {AuthContext} from "../index";
import {observer} from "mobx-react-lite";

const Login = observer(() => {
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        try {
            const {data} = await $host.post('/auth/login', {"username": username, "password": password})

            localStorage.setItem("token", data.token);
            user.setId(jwtDecode(data.token).id);
            user.setRoles(jwtDecode(data.token).roles);
            user.setEmail(jwtDecode(data.token).username);
            user.setIsAuth(true);
            navigate("/clients");
        } catch (err) {
        }
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 50}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Login</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Button
                            variant={"outline-success"}
                            className="mt-3 align-self-end"
                            onClick={() => handleSubmit()}
                        >Login</Button>
                    </div>

                </Form>
            </Card>
        </Container>
    );
});

export default Login;
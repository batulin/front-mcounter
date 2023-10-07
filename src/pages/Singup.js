import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {$host} from "../api";
import jwtDecode from "jwt-decode";

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const {data} = await $host.post('/auth/signup', {"email": email, "password": password, "confirmPassword": password})
            navigate("/login");
        } catch (err) {
        }
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 50}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Register</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        >Signup</Button>
                    </div>

                </Form>
            </Card>
        </Container>
    );
};

export default Signup;
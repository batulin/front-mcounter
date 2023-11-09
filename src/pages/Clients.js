import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../index";
import {fetchClients} from "../api/clientApi";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import ClientList from "../components/client/ClientList";
import {Button} from "react-bootstrap";
import CreateClient from "../components/client/CreateClient";

const Clients = observer(() => {

    const { client, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

        useEffect(() => {
            fetchClients().then(data => {
            client.setClients(data.items)
        }).catch((e) => {
                if (e.response.status === 401) {
                    user.setId();
                    user.setEmail('');
                    user.setRoles([]);
                    user.setIsAuth(false);
                    localStorage.clear();
                    navigate("/login")
                }
            }
        )
    }, [])
    return (
        <div>
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                <h2>Clients</h2>
                <Button className={"btn btn-primary"} onClick={() => {setVisible(true)}}>+</Button>

            </div>
            <ClientList />
            <CreateClient show={visible} onHide={() => setVisible(false)} />
        </div>
    );
});

export default Clients;
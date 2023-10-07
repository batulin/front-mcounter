import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../index";
import {fetchClients} from "../api/clientApi";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import {observer} from "mobx-react-lite";
import ClientList from "../components/client/ClientList";

const Clients = observer(() => {
    const { client, user } = useContext(AuthContext);
    const navigate = useNavigate();

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
            <h2>Clients</h2>
            <ClientList />
        </div>
    );
});

export default Clients;
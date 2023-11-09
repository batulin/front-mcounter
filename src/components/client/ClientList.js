import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {AuthContext} from "../../index";
import ClientItem from "./ClientItem";
import {Table} from "react-bootstrap";

const ClientList = observer(() => {
    const {client} = useContext(AuthContext);

    return (
        <Table bordered hover>
        <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birth Date</th>
        </tr>
        </thead>
        <tbody>

            {client.clients.map(client =>
                <ClientItem key={client.id} client={client}/>
            )}
        </tbody>
    </Table>
    );
});

export default ClientList;
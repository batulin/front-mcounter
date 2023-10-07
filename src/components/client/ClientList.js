import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {AuthContext} from "../../index";
import ClientItem from "./ClientItem";
import {Table} from "react-bootstrap";

const ClientList = observer(() => {
    const {client} = useContext(AuthContext);

    return (
        <>
            {client.clients.map(client =>
                <ClientItem key={client.id} client={client}/>
            )}
        </>
    );
});

export default ClientList;
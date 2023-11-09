import React, {useContext, useState} from 'react';
import {Button} from "react-bootstrap";
import {removeClient} from "../../api/clientApi";
import {AuthContext} from "../../index";
import ConfirmDelete from "./ConfirmDelete";

const ClientItem = (props) => {
    const [show, setShow] = useState(false);
    const {client} = useContext(AuthContext);

    const deleteClient = () => {
        removeClient(props.client.id)
            .then(() => client.deleteClient(props.client.id))
    }
    return (
        <tr>
            <td>{props.client.id}</td>
            <td>{props.client.lastName}</td>
            <td>{props.client.firstName}</td>
            <td>{props.client.email}</td>
            <td>{props.client.phone}</td>
            <td>{props.client.birthDate}</td>
            <td><Button
                className={"btn btn-danger"}
                onClick={() => setShow(true)}
            >delete</Button></td>
            <ConfirmDelete show={show}
                           onHide={() => setShow(false)}
                           client={client}
                           deleteClient={deleteClient}/>
        </tr>
    );
};

export default ClientItem;
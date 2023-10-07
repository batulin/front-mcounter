import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";

const ClientItem = ({client}) => {
    return (
        <div>
            {client.lastName}
            {client.firstName}
            {client.birthDate}
            {client.emails}
        </div>
    );
};

export default ClientItem;
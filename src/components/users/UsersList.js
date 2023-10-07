import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../../index";
import UserItem from "./UserItem";
import {observer} from "mobx-react-lite";

const UsersList = observer(() => {
    const {users} = useContext(AuthContext);
    useEffect(() => {
        //console.log(users)
    }, []);

    return (
        <>
            {users.users.map(user =>
                <UserItem key={user.id} userItem={user} />
            )}
        </>
    );
});

export default UsersList;
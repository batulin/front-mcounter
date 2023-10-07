import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../index";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {fetchUsers} from "../api/usersApi";
import UsersList from "../components/users/UsersList";

const Users = observer(() => {
    const { users, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers().then(data => {
            users.setUsers(data)
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
            <h2>Users</h2>
            <UsersList />
        </div>
    );
});

export default Users;
import {Navigate, Outlet} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../index";
import {check} from "../api/userApi";
import {Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const RequireAuth = observer(({ allowedRoles }) => {
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        check()
            .then(data => {
            user.setId(data.id);
            user.setEmail(data.email);
            user.setRoles(data.roles);
            user.setIsAuth(true);
            console.log(user);
        })
            .catch((e) => {
                if (e.response.status === 401) {
                    user.setId();
                    user.setEmail('');
                    user.setRoles([]);
                    user.setIsAuth(false);
                    localStorage.clear();
                    console.log(user.roles)
                }
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        user.roles.find(role => allowedRoles.includes(role))
            ? <Outlet />
            : <Navigate to="/login" replace />
    );
})

export default RequireAuth;
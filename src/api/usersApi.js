import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const fetchUsers = async () => {
    const {data} = await $authHost.get('/v1/user/list')
    return data
}
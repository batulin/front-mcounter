import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const addClient = async (client) => {
    const {data} = await $authHost.post('/v1/client/add', client)
    return data
}

export const fetchClients = async () => {
    const {data} = await $authHost.get('/v1/client')
    return data
}

export const fetchOneClient = async (id) => {
    const {data} = await $authHost.get('/v1/client/' + id)
    return data
}
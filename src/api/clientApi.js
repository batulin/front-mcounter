import {$authHost, $host} from "./index";

export const createClient = async (client) => {
    const {data} = await $host.post('/client/add', client)
    return data
}

export const fetchClients = async () => {
    const {data} = await $host.get('/client')
    return data
}

export const fetchOneClient = async (id) => {
    const {data} = await $host.get('/client/' + id)
    return data
}

export const removeClient = async (id) => {
    const {data} = await $host.get('/client/' + id + '/delete')
    return data
}
import {makeAutoObservable} from "mobx";
import clients from "../pages/Clients";

export default class ClientStore {
    constructor() {
        this._clients = [];

        makeAutoObservable(this);
    }
    setClients(clients) {
        this._clients = clients
    }

    get clients() {
        return this._clients
    }

    addClient(object) {
        this._clients.push(object)
    }

    deleteClient(id) {

        this._clients = this._clients.filter((client) => client.id != id)

    }
}

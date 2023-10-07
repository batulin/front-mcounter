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
}

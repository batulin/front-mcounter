import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._email = '';
        this._id = 0;
        this._roles = [];

        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setId(id) {
        this._id = id
    }
    setEmail(email) {
        this._email = email
    }
    setRoles(roles) {
        this._roles = roles
    }

    get isAuth() {
        return this._isAuth
    }
    get email() {
        return this._email
    }
    get id() {
        return this._id
    }
    get roles() {
        return this._roles
    }
}

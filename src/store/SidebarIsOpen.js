import {makeAutoObservable} from "mobx";

export default class SidebarIsOpen {
    constructor() {
        this._isOpen = true;

        makeAutoObservable(this);
    }

    setIsOpen(bool) {
        this._isOpen = bool
    }

    get isOpen() {
        return this._isOpen
    }
}

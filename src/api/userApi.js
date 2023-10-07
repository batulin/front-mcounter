import {$host, $authHost} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $host.post('/auth/signup', {"email": email, "password": password, "confirmPassword": password})
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}
export const login = async (email, password) => {
    const {data} = await $host.post('/auth/login', {"username": email, "password": password})
    console.log(jwtDecode(data.token))
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}
export const check = async () => {
    const {data} = await $authHost.get('/v1/user/me')

    return data;
}
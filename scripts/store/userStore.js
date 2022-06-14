import {addAddress, getUser, getUserDeliveringAddresses, userAccess} from "../loaders/userLoader.js";

export function login(user, onSuccess, onFailure) {
    userAccess("api/user/login.php", user, onSuccess, onFailure)
}

export function signup(user, onSuccess, onFailure) {
    userAccess("api/user/signin.php", user, onSuccess, onFailure)
}

export function addUserAddress(address, onSuccess, onFailure){
    let user = JSON.parse(localStorage.getItem("user"))
    addAddress("api/user/addresses/new.php", {Token: user.token}, address, onSuccess, onFailure)
}

export function getUserAddresses(...handlers){
    let user = JSON.parse(localStorage.getItem("user"))
    getUserDeliveringAddresses('api/user/addresses/all.php', {Token: user.token}, {userId: user.userId}, ...handlers)
}

export function getUserInfo(...handlers){
    let user = JSON.parse(localStorage.getItem("user"))
    getUser('api/user/userinfo.php', {Token: user.token}, {userId: user.userId}, ...handlers)
}
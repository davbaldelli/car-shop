import {addAddress, getUser, getUserDeliveringAddresses, removeAddress, userAccess} from "../loaders/userLoader.js";

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

export function updateUserAddress(address, onSuccess, onFail){
    let user = JSON.parse(localStorage.getItem("user"))
    addAddress("api/user/addresses/update.php", {Token: user.token}, address, onSuccess, onFail)
}

export function getUserAddresses(...handlers){
    let user = JSON.parse(localStorage.getItem("user"))
    getUserDeliveringAddresses('api/user/addresses/all.php', {Token: user.token}, {userId: user.userId}, ...handlers)
}

export function getUserInfo(...handlers){
    let user = JSON.parse(localStorage.getItem("user"))
    getUser('api/user/userinfo.php', {Token: user.token}, {userId: user.userId}, ...handlers)
}

export function deleteAddress(address, onSuccess, onFail){
    let user = JSON.parse(localStorage.getItem("user"))
    removeAddress("api/user/addresses/delete.php", {Token: user.token}, {userId: user.userId, addressId : address.id}, onSuccess, onFail)
}
import {userAccess} from "../loaders/userLoader.js";

export function login(user, onSuccess, onFailure){
    userAccess("api/user/login.php",user, onSuccess, onFailure)
}

export function signup(user, onSuccess, onFailure){
    userAccess("api/user/signin.php", user, onSuccess, onFailure)
}
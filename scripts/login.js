import {userAccess} from "./userLogger.js";

$(() => {
    $("#loginBtn").onclick(() => {
        let username = $("#usernameTextField").val()
        let password = $("#passwordTextField1").val()
        login({username, password})
    })

    $("#singInBtn").onclick(() => {
        let username = $("#usernameTextField").val()
        let password1 = $("#passwordTextField1").val()
        let password2 = $("#passwordTextField2").val()
        if (password1 !== password2) {
            //TODO write down that the passwords do no match
        } else {
            signIn({username, password : password1})
        }
    })

    $("#logoutBtn").onclick(removeUser)

    let user = JSON.parse(localStorage.getItem("user"))
    if(user){
        if( user.role === "admin"){
            unlockAdminFeatures()
        } else {
            unlockUserFeatures()
        }
    }

})

function login(user) {
    //save user on success and refresh, write down username or password wrong on failure
    userAccess("api/user/login.php",user,user => saveUser(user.username, user.id, user.role, user.token), onLoginFailure)
}

function signIn(user){
    //save user on success and refresh, write down that the username is already taken on failure
    userAccess("api/user/signin.php", user, res => console.log(res), onSigningFailure)
}

function onLoginFailure(){
    //TODO wrong username or password hint
}

function onSigningFailure(){
    //TODO show username already taken hint
}

function saveUser(username, id, role, token){
    localStorage.setItem("user", JSON.stringify({username : username, user_id : id, role: role, token: token}))
    if(role === "admin"){
        unlockAdminFeatures()
    } else {
        unlockUserFeatures()
    }
}

function removeUser(){
    localStorage.removeItem("user")
}

function unlockAdminFeatures(){
    //TODO unlock the admin features
}

function unlockUserFeatures(){
    //TODO unlock user features
}
import {userAccess} from "./loaders/userLogger.js";

$(() => {

    $(".nav-login").click(function(){
        $(".login-container").toggleClass("form-hidden");
        $(".login-container").toggleClass("form-active"); 
    });
    $(".btn-close").click(function(){
        $(".login-container").toggleClass("form-hidden");
        $(".login-container").toggleClass("form-active");  
    });  


    $("#btn-login").click(() => {
        let username = $("#username-log").val()
        let password = $("#password-log").val()
        login({username, password})
        console.log("ok")
    })

    $("#btn-signup").click(() => {
        let username = $("#username-sign").val()
        let password1 = $("#password-sign").val()
        let password2 = $("#password2-sign").val()
        if (password1 !== password2) {
            //TODO write down that the passwords do no match
        } else {
            signIn({username, password : password1})
        }
        console.log("ok")
    })

    $("#logoutBtn").click(removeUser)

    let user = JSON.parse(localStorage.getItem("user"))
    if(user){
        if( user.role === "admin"){
            unlockAdminFeatures(user.username)
        } else {
            unlockUserFeatures(user.username)
        }
    }

})

function login(user) {
    //save user on success and refresh, write down username or password wrong on failure
    userAccess("api/user/login.php",user,user => saveUser(user.username, user.id, user.role, user.token), onLoginFailure)
}

function signIn(user){
    //save user on success and refresh, write down that the username is already taken on failure
    userAccess("api/user/signin.php", user, user => saveUser(user.username, user.id, user.role, user.token), onSigningFailure)
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
        unlockAdminFeatures(username)
    } else {
        unlockUserFeatures(username)
    }
}

function removeUser(){
    localStorage.removeItem("user")
}

function unlockAdminFeatures(username){
    //TODO unlock the admin features
}

function unlockUserFeatures(username){
    //TODO unlock user features
}
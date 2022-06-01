import {userAccess} from "./loaders/userLoader.js";

$(() => {

    $("#login-dropdown").click(function(){
        let loginContainer = $(".login-container")
        loginContainer.toggleClass("form-hidden");
        loginContainer.toggleClass("form-active");
    });

    $(".btn-close").click(closeLoginForm);

    let loginForm = $("#login-form-dropdown")
    let signupForm = $("#signup-form-dropdown")

    loginForm.keyup(e => {
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode === 13){
            e.preventDefault()
        }
        return false
    })

    signupForm.keyup(e => {
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode === 13){
            e.preventDefault()
        }
        return false
    })

    loginForm.submit((e) => {
        let username = $("#username-log").val()
        let password = $("#password-log").val()
        if(password==""){
            $("#error-login").html("Campo password vuoto")
        }else{
            login({username, password})
            closeLoginForm();
        }
        e.preventDefault()
    })

    signupForm.submit((e) => {
        let username = $("#username-sign").val()
        let password1 = $("#password-sign").val()
        let password2 = $("#password2-sign").val()
        if (password1 !== password2 || password1=="") {
            $("#error-sign").html("Password differenti o mancanti")
        } else {
            signIn({username, password : password1})
            closeLoginForm();
        }
        e.preventDefault()
    })


    let user = JSON.parse(localStorage.getItem("user"))
    if(user){
        if( user.role === "admin"){
            unlockAdminFeatures(user)
        } else {
            unlockUserFeatures(user)
        }
    }

})

function closeLoginForm(){
    let loginContainer = $(".login-container")
    loginContainer.toggleClass("form-hidden");
    loginContainer.toggleClass("form-active");
}

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
    localStorage.setItem("user", JSON.stringify({username : username, userId : id, role: role, token: token}))
    let user = JSON.parse(localStorage.getItem("user"))
    if(role === "admin"){
        unlockAdminFeatures(user)
    } else {
        unlockUserFeatures(user)
    }
}



function unlockAdminFeatures(user){
    $(".nav-login").toggleClass("a-login-hidden")
    $("#user-feature").html(`
        <div class="collapse navbar-collapse account-dprdwn" id="navbarNavDarkDropdown">
        <ul class="navbar-nav" id="navbarAccount">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${user.username}
                </a>
                    <ul class="dropdown-menu dropdown-menu-start dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="http://localhost/update-orders.php">Orders State</a></li>
                        <li><a class="dropdown-item" href="http://localhost/add-product.php">Add product</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li ><a class="dropdown-item" id="logoutBtn">Logout</a></li>
                    </ul>
            </li>
        </ul>
    </div>
    `)
    $("#logoutBtn").click(()=>removeUser())
}

function unlockUserFeatures(user){
    $(".nav-login").toggleClass("a-login-hidden")
    $("#user-feature").html(`
        <div class="collapse navbar-collapse account-dprdwn" id="navbarNavDarkDropdown">
        <ul class="navbar-nav" id="navbarAccount">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${user.username}
                </a>
                    <ul class="dropdown-menu dropdown-menu-start dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="http://localhost/account.php">Account</a></li>
                        <li><a class="dropdown-item" href="http://localhost/user-orders.php?userId=${user.userId}">My orders</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" id="logoutBtn" >Logout</a></li>
                    </ul>
            </li>
        </ul>
    </div>
    `)
    $("#logoutBtn").click(()=>removeUser())

}
function removeUser(){
    localStorage.removeItem("user")
    location.href = "index.php"
}
import {generateUserDropdown} from "./components/userDropdown.js";
import {login, signup} from "./store/userStore.js";

const userDropdownActions = (user) => [
    {
        label: "Account",
        link: "account.php"
    },
    {
        label: "My orders",
        link: `user-orders.php?userId=${user.userId}`
    },
]
const adminDropdownActions = [
    {
        label: "Update Orders State",
        link: "update-orders.php"
    },
    {
        label: "Add Product",
        link: "add-product.php"
    }
]

$(() => {

    $("#login-dropdown").click(openLoginForm);

    $("#close-login-form").click(closeLoginForm);

    let loginForm = $("#login-form-dropdown")
    let signupForm = $("#signup-form-dropdown")

    loginForm.keyup(e => {
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode === 13) {
            e.preventDefault()
        }
        return false
    })

    signupForm.keyup(e => {
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode === 13) {
            e.preventDefault()
        }
        return false
    })

    loginForm.submit((e) => {
        onLogin()
        e.preventDefault()
    })

    signupForm.submit((e) => {
        onSignup()
        e.preventDefault()
    })


    let user = JSON.parse(localStorage.getItem("user"))
    if (user) {
        if (user.role === "admin") {
            unlockUserFeatures(user, adminDropdownActions)
        } else {
            unlockUserFeatures(user, userDropdownActions(user))
        }
    }


})

function onLogin() {
    let username = $("#username-log").val()
    let password = $("#password-log").val()
    if (password === "") {
        $("#error-login").html("Empty password field")
    } else {
        login({username, password}, onLoginSuccess, onLoginFailure)
    }
}

function onSignup() {
    let username = $("#username-sign").val()
    let name = $("#name-input").val()
    let last_name = $("#last-name-input").val()
    let password1 = $("#password-sign").val()
    let password2 = $("#password2-sign").val()
    let avatar_image = "https://i.imgur.com/FBB2A6C.jpg"
    if (password1 !== password2 || password1 === "") {
        $("#error-sign").html("Passwords not matching, or missing")
    } else {
        signup({username, password: password1, name, last_name, avatar_image}, onLoginSuccess, onSigningFailure)
    }
}

function openLoginForm() {
    let loginContainer = $(".login-container")
    loginContainer.toggleClass("form-hidden");
    loginContainer.toggleClass("form-active");
}

function closeLoginForm() {
    let loginContainer = $(".login-container")
    loginContainer.toggleClass("form-hidden");
    loginContainer.toggleClass("form-active");
}

function onLoginSuccess(user) {
    saveUser(user.username, user.id, user.role, user.token)
    closeLoginForm();
    let toastLive = $("#loginToast")
    let toast = new bootstrap.Toast(toastLive)
    toast.show()
    $(document).trigger("login")
}

function onLoginFailure() {
    $("#error-login").html("Wrong username or password")
}

function onSigningFailure() {
    $("#error-sign").html("Username already taken")
}

function unlockUserFeatures(user, features) {
    $("#nav-login").toggleClass("item-hidden")
    $("#navNotification").toggleClass("item-hidden")
    generateUserDropdown("content-user-feature", user, features, removeUser)
}

function removeUser() {
    localStorage.removeItem("user")
    location.href = "index.php"
    localStorage.removeItem("cart")
}

function saveUser(username, id, role, token) {
    localStorage.setItem("user", JSON.stringify({username: username, userId: id, role: role, token: token}))
    let user = JSON.parse(localStorage.getItem("user"))
    if (role === "admin") {
        unlockUserFeatures(user, adminDropdownActions)
    } else {
        unlockUserFeatures(user, userDropdownActions(user))
    }
}
import {userAuth} from "../loaders/userLoader.js";


let adminPages = ["add product", "update orders"]
let userPages = ["order", "user orders", "purchase"]
const urlParams = new URLSearchParams(window.location.search);

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    let pageName = document.querySelector('meta[name="page-name"]').content
    if (adminPages.includes(pageName)) {
        if (user) {
            if (user.role === "admin") {
                userAuth("api/user/verifyauth.php", {Token: user.token}, {
                    userId: user.userId,
                    role: user.role
                }, goForward, goBack)
            } else {
                goBack()
            }
        } else {
            redirectTo("index.php")
        }
    }
    if (userPages.includes(pageName)) {
        console.log(user)
        if (user) {
            userAuth("api/user/verifyauth.php", {Token: user.token}, {userId: user.userId, role: user.role}, () => {
                const userId = parseInt(urlParams.get('userId'))
                if (userId === user.userId) {
                    goForward()
                } else {
                    goBack()
                }
            }, goBack)
        } else {
            console.log(user)
            redirectTo("index.php?login=true")
        }
    }
})

function goForward() {
    $(document).trigger("authorized");
}

function goBack() {
    console.log("unauthorized")
    //history.back()
}

function redirectTo(to) {
    //TODO redirect user to specific path
    location.href = to
}
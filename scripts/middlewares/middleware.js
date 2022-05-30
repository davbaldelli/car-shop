import {userAuth} from "../loaders/userLogger.js";


let adminPages = ["add product", "update orders"]
let userPages = ["order", "user orders"]
const urlParams = new URLSearchParams(window.location.search);

$(()=> {
    let user = JSON.parse(localStorage.getItem("user"))
    let pageName = document.querySelector('meta[name="page-name"]').content
    if(adminPages.includes(pageName)){
        if(user){
            if(user.role === "admin"){
                userAuth("api/user/verifyauth.php", {Token : user.token} ,{user_id : user.user_id, role : user.role}, goForward, goBack)
            } else {
                goBack()
            }
        } else {
            redirectTo("login")
        }
    }
    if (userPages.includes(pageName)){
        if (user){
            userAuth("api/user/verifyauth.php", {Token : user.token} ,{user_id : user.user_id, role : user.role}, () => {
                const user_id = parseInt(urlParams.get('user_id'))
                if(user_id === user.user_id){
                    goForward()
                } else {
                    goBack()
                }
            }, goBack)
        } else {
            redirectTo("login")
        }
    }
})

function goForward(){
    console.log("authorized")
    $(document).trigger("authorized");
}

function goBack(){
    console.log("unauthorized")
    history.back()
}

function redirectTo(to){
    console.log("you should go to: ",to)
    //TODO redirect user to specific path
}
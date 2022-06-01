import {getNotifications} from "./loaders/notificationsLoader.js";
import {generateNotifyDropdown} from "./components/notificationDropdown.js";
import {generateCartDropdown} from "./components/cartDropdown.js";


$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getNotifications("api/user/notifications/all.php",{Token : user.token}, {userId : user.userId},(notifications) => {
            generateNotifyDropdown("notificationDropdownContainer","My Notifications", notifications)
        })
    }
    let cart = JSON.parse(localStorage.getItem("cart"))
    if(cart){
        generateCartDropdown("cartDropdownContainer", "My Cart", cart.products, console.log, removeElementFromCart)
    }
})

function removeElementFromCart(index){
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.products.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(cart))
    generateCartDropdown("cartDropdownContainer", "My Cart", cart.products, console.log, removeElementFromCart)
}
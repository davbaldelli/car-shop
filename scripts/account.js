import {generateNotifyDropdown} from "./components/notificationDropdown.js";
import {generateCartDropdown} from "./components/cartDropdown.js";
import {getAllUserNotifications} from "./store/notificationsStore.js";
import {getUserInfo} from "./store/userStore.js";


$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if (user && user.token) {
        getAllUserNotifications((notifications) => {
            generateNotifyDropdown("notificationDropdownContainer", "My Notifications", notifications)
        })
    }
    let cart = JSON.parse(localStorage.getItem("cart"))
    if (cart) {
        generateCartDropdown("cartDropdownContainer", "My Cart", cart.products, console.log, removeElementFromCart)
    }
    getUserInfo(console.log)
})

function removeElementFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.products.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    generateCartDropdown("cartDropdownContainer", "My Cart", cart.products, console.log, removeElementFromCart)
}
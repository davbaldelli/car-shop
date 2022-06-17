import {generateCartDropdown} from "./components/cartDropdown.js";
import {getCart, removeProductFromCart} from "./utilities/cartManager.js";



$(() => {

    let cart = getCart()
    generateCartDropdown("cart-dropdown-container",  cart.products, console.log, removeProductFromCart)
})

$(document).on('cartUpdate',(event, cart)=>{
    generateCartDropdown("cart-dropdown-container",  cart.products, console.log, removeProductFromCart)
})
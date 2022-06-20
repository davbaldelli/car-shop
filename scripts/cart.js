import {getCart, removeProductFromCart} from "./utilities/cartManager.js";
import {CartDropdown} from "./components/cartDropdown.js";

let cartDropdown

$(() => {
    let cart = getCart()
    cartDropdown = new CartDropdown(10, $("#cart-dropdown-container"), cart.products, () => {}, removeProductFromCart)
})

$(document).on('cartUpdate',(event, cart)=>{
    cartDropdown.updateDropdown(cart.products)
    let dropdown = new bootstrap.Dropdown('#cart-dropdown')
    dropdown.toggle()
    setTimeout(function() {
        dropdown.toggle()
    },3000)
})

$(document).on('cartSilentUpdate',(event, cart)=>{
    cartDropdown.updateDropdown(cart.products)
})
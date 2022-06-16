import {generateCartDropdown} from "./components/cartDropdown.js";
import {getCart, removeProductFromCart} from "./utilities/cartManager.js";



$(() => {

    let cart = getCart()
    generateCartDropdown("cart-dropdown-container",  cart.products, console.log, removeProductFromCart)
    let cartDropdown = new bootstrap.Dropdown($("#cartDropdownBtn"))
    $("#cartDropdownContainer").hover(function (){
        cartDropdown.show()
        //setTimeout(()=> {cartDropdown.hide(), console.log("hello")}, 3000)
    })


})

$(document).on('cartUpdate',(event, cart)=>{
    generateCartDropdown("cart-dropdown-container",  cart.products, console.log, removeProductFromCart)
})
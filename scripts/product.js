import {carToInfoPanel} from "./formatters/carFormatter.js";
import {addProductToCart, getCart} from "./utilities/cartManager.js";
import {getCarById} from "./store/carsStore.js";


$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    getCarById(id, setCarInfoPanel)
})

function setCarInfoPanel(car) {
    $("#mainPanel").html(carToInfoPanel(car))
    $("#buyBtn").click(() => {
        addProductToCart(car, 1)
    })
    $("#addToCartBtn").click(() => {
        addProductToCart(car, 1)
        console.log(getCart())
    })
}

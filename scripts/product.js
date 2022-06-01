import {getCars} from "./loaders/carsLoader.js";
import {carToInfoPanel} from "./formatters/carFormatter.js";
import {addProductToCart, getCart} from "./utilities/cartManager.js";

let car = {}

$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    getCars("/api/cars/id.php",{id}, setCarInfoPanel);
})

function setCarInfoPanel(cars){
    car = cars[0]
    $("#mainPanel").html(carToInfoPanel(cars[0]))
    $("#buyBtn").click(() => {
        addProductToCart(car, 1)
    })
    $("#addToCartBtn").click(() => {
        addProductToCart(car, 1)
        console.log(getCart())
    })
}

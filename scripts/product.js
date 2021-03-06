import {carToInfoPanel} from "./formatters/carFormatter.js";
import {addProductToCart} from "./utilities/cartManager.js";
import {getCarById} from "./store/carsStore.js";


$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    getCarById(id, setCarInfoPanel)
})

function setCarInfoPanel(car) {
    $("#mainPanel").html(carToInfoPanel(car))
    $("#buyBtn").click(() => {
        onAddProductToCart(car)
    })
    $("#addToCartBtn").click(() => {
        addProductToCart(car, 1)
    })
    $("#breadcrumb-brand-name").html(`<a href="brand.php?name=${car.brand}">${car.brand}</a>`)
    $("#breadcrumb-car-model").html(car.model)
    $("#breadcrumb-car-year").html(car.year)
}

function onAddProductToCart(car){
    //TODO Open confirm modal
    addProductToCart(car, 1)
}
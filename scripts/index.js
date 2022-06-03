import {carsToCarouselElems} from "./formatters/carFormatter.js";
import {getRandomCars} from "./store/carsStore.js";

//load the given function when the page is loaded
$(() => {
    getRandomCars(setCarouselContent)
})

function setCarouselContent(cars){
    $("#carousel-content").html(carsToCarouselElems(cars).reduce((s, val) => s + val, ""))
}

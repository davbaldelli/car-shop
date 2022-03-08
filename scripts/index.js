import {getCars} from "./carLoader.js";
import {carsToCarouselElems} from "./carFormatter.js";

//load the given function when the page is loaded
$(() => {
    getCars("cars/random", {},
        (cars) =>  $("#carousel-content").html(carsToCarouselElems(cars).reduce((s, val) => s += val, "")))
})


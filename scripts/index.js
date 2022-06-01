import {getCars} from "./loaders/carsLoader.js";
import {carsToCarouselElems} from "./formatters/carFormatter.js";

//load the given function when the page is loaded
$(() => {
    getCars("/api/cars/random.php", {},
        (cars) =>  $("#carousel-content").html(carsToCarouselElems(cars).reduce((s, val) => s += val, "")))
})



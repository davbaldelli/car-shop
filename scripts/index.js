import {getCars} from "./carLoader.js";
import {carsToCards} from "./carCardFormatter.js";

//load the given function when the page is loaded
$(() => {
    getCars("cars/random", {},
        (cars) =>  document.getElementById("carList").innerHTML = carsToCards(cars))
})


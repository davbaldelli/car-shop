import {getCars} from "./carLoader.js";
import {carsToCards} from "./carCardFormatter.js";

//load the given function when the page is loaded
$(() => {
    getCars("cars/all", {},
        (cars) =>  document.getElementById("carList").innerHTML = carsToCards(cars))
})

import {getCars} from "./carLoader.js";
import {carsToCards} from "./carFormatter.js";

//load the given function when the page is loaded
$(() => {
    getCars("cars/all", {},
        (cars) =>  $("#carGrid").html(carsToCards(cars).reduce(generateGrid, "")))
})

function generateGrid(initialValue, nextValue) {
    return initialValue + `
        <div class="col-4">
            ${nextValue}
        </div>
    `
}
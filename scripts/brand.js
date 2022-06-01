import {getCars} from "./loaders/carsLoader.js";
import {carsToCards} from "./formatters/carFormatter.js";
import {generateCarGrid} from "./composers/carComposer.js";

$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('name');
    getCars("api/cars/brand.php", {name : brand}, setCarGridContent)
})

function setCarGridContent(cars){
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}


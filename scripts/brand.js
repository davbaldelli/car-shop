import {carsToCards} from "./formatters/carFormatter.js";
import {generateCarGrid} from "./composers/carComposer.js";
import {getCarsByManufacturer} from "./store/carsStore.js";

$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('name');
    getCarsByManufacturer(brand, setCarGridContent)
})

function setCarGridContent(cars) {
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}


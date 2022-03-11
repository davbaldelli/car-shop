import {getCars} from "./carLoader.js";
import {carsToCards} from "./carFormatter.js";
import {generateCarGrid} from "./carComposer.js";

$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('name');
    getCars("api/cars/brand", {name : brand}, setCarGridContent)
})

function setCarGridContent(cars){
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}


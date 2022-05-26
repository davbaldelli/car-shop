import {getCars} from "./loaders/carLoader.js";
import {carToInfoPanel} from "./formatters/carFormatter.js";
$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    getCars("/api/cars/id",{id}, setCarInfoPanel);
})


function setCarInfoPanel(car){
    $("#mainPanel").html(carToInfoPanel(car[0]))
}

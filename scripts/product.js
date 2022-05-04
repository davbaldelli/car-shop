import {getCars} from "./carLoader.js";
import {carToInfoPanel} from "./carFormatter.js";
$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    getCars("/api/cars/id",{id}, setCarInfoPanel);
})


function setCarInfoPanel(car){
    $("#mainPanel").html(carToInfoPanel(car[0]))
}

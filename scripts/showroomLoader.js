import {getCars} from "./carLoader.js";
import {carsToCards} from "./carCardFormatter.js";

getCars("cars/all", {},
    (cars) =>  document.getElementById("carList").innerHTML = carsToCards(cars))
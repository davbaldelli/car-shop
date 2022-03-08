import {getCars} from "./carLoader.js";
import {carsToCards} from "./carCardFormatter.js";

getCars("cars/random", {},
    (cars) =>  document.getElementById("carList").innerHTML = carsToCards(cars))

import {getCars} from "./carLoader.js";
import {carsToCarouselElems} from "./carFormatter.js";
import {darkModeGlobal, darkModeIndex} from "./darkMode.js";

//load the given function when the page is loaded
$(() => {
    getCars("/api/cars/random", {},
        (cars) =>  $("#carousel-content").html(carsToCarouselElems(cars).reduce((s, val) => s += val, "")))
        $('a').tooltip({ boundary: 'window' })


        $('.darklight-toggle').change(function(){darkModeGlobal(), darkModeIndex()});   
        
        
})



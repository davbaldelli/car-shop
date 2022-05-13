import {getCars} from "./carLoader.js";
import {carsToCarouselElems} from "./carFormatter.js";
import {darkModeGlobal, darkModeIndex} from "./darkMode.js";

//load the given function when the page is loaded
$(() => {
    getCars("/api/cars/random", {},
        (cars) =>  $("#carousel-content").html(carsToCarouselElems(cars).reduce((s, val) => s += val, "")))

    $('.div-ico').tooltip({ boundary: 'window' })

    $(".login").click(function(){
        $(".login-container").toggleClass("form-hidden");
        $(".login-container").toggleClass("form-active"); 
    });
    $(".btn-close").click(function(){
        $(".login-container").toggleClass("form-hidden");
        $(".login-container").toggleClass("form-active");  
    });
          
        
})



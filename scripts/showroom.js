import {getCars} from "./carLoader.js";
import {carsToCards} from "./carFormatter.js";
import {getBrands} from "./brandsLoader.js";
import {brandsToCards, brandsToDropDownItems} from "./brandsFormatter.js";
import {generateBrandGrid, generateBrandList} from "./brandComposer.js";
import {generateCarGrid} from "./carComposer.js";

//load the given function when the page is loaded
$(() => {
    getBrands("api/brands/all", {}, setBrandGridContent, setBrandDropDownContent)

    $("#allCarsBtn").click(() => getCars("api/cars/all", {}, setCarGridContent))
})

function setCarGridContent(cars){
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}

function setBrandDropDownContent(brands){
    $("#brand-menu .dropdown-menu").html(brandsToDropDownItems(brands).reduce(generateBrandList, ""))
    $("#brand-menu .dropdown-menu li .dropdown-item").click((event) => {
        getCars("api/cars/brand", {name : event.currentTarget.dataset.key}, setCarGridContent)
    })
}

function setBrandGridContent(brands){
    $("#mainGrid").html(brandsToCards(brands).reduce(generateBrandGrid, ""))
    $(".card-brand").click(event => {
        getCars("api/cars/brand", {name : event.currentTarget.dataset.key}, setCarGridContent)
    })
}

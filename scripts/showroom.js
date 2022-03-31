import {getCars} from "./carLoader.js";
import {carsToCards} from "./carFormatter.js";
import {getBrands} from "./brandsLoader.js";
import {brandsToCards} from "./brandsFormatter.js";
import {generateBrandGrid} from "./brandComposer.js";
import {generateCarGrid} from "./carComposer.js";
import {generateExtendedDropdown} from "./dropdownGenerator.js";
import {filterByBrand} from "./carsFilters.js";


//load the given function when the page is loaded
$(() => {
    getBrands("api/brands/all", {}, setBrandGridContent)
    $("#allCarsBtn").click(() => getCars("api/cars/all", {}, cars => {
        setCarGridContent(cars)
        getBrands("api/brands/all", {}, setBrandDropDownContent)
    }))
})

function setCarGridContent(cars){
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}

function setBrandGridContent(brands){
    $("#mainGrid").html(brandsToCards(brands).reduce(generateBrandGrid, ""))
}

function setBrandDropDownContent(items){
   generateExtendedDropdown("brandDropdown","mostra brand", items, 7, (a)=>setCarGridContentWithFilter(filterByBrand(a)))
}

function setCarGridContentWithFilter(filter){
    getCars("api/cars/all", {}, cars => {
        setCarGridContent(filter(cars))
    })
}


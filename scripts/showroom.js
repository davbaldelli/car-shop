import {getCars} from "./carLoader.js";
import {carsToCards} from "./carFormatter.js";
import {getBrands} from "./brandsLoader.js";
import {brandsToCards, brandsToDropDownItems} from "./brandsFormatter.js";
import {generateExtendedDropdown} from "./dropdownGenerator.js";



//load the given function when the page is loaded
$(() => {
    getBrands("api/brands/all", {}, setBrandGridContent) 
    $("#allCarsBtn").click(() => {

        getCars("api/cars/all", {}, setCarGridContent)
        
        getBrands("api/brands/all", {}, setBrandDropDownContent )
    })
})

function generateCarGrid(initialValue, nextValue) {
    return initialValue + `
        <div class="col-12 col-md-4">
            ${nextValue}
        </div>
    `
}

function generateBrandList(initialValue, nextValue) {
    return initialValue + nextValue
}

function generateBrandGrid(initialValue, nextValue){
    return initialValue + `
    <div class="col-12 col-md-4">
            ${nextValue}
    </div>
    `
}

export function setCarGridContent(cars){
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}

function setBrandGridContent(brands){
    $("#mainGrid").html(brandsToCards(brands).reduce(generateBrandGrid, ""))
    $(".card-brand").click(event => {
        getCars("api/cars/brand", {name : event.currentTarget.dataset.key}, setCarGridContent)
    })
}

function setBrandDropDownContent(items){
   generateExtendedDropdown("showBtnDropdown","Mostra brand", items, 7, (a,b)=>console.log(a,b), (a)=>console.log(a), (a)=>console.log(a))
}



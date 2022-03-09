import {getCars} from "./carLoader.js";
import {carsToCards} from "./carFormatter.js";
import {getBrands} from "./brandsLoader.js";
import {brandsToCards, brandsToDropDownItems} from "./brandsFormatter.js";

//load the given function when the page is loaded
$(() => {
    getBrands("api/brands/all", {}, setBrandGridContent, setBrandDropDownContent)

    $("#allCarsBtn").click(() => getCars("api/cars/all", {}, setGridContent))
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

function setGridContent(cars){
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}

function setBrandDropDownContent(brands){
    $("#brand-menu .dropdown-menu").html(brandsToDropDownItems(brands).reduce(generateBrandList, ""))
    $("#brand-menu .dropdown-menu li .dropdown-item").click((event) => {
        getCars("api/cars/brand", {name : event.currentTarget.dataset.key}, setGridContent)
    })
}

function setBrandGridContent(brands){
    $("#mainGrid").html(brandsToCards(brands).reduce(generateBrandGrid, ""))
    $(".card-brand").click(event => {
        getCars("api/cars/brand", {name : event.currentTarget.dataset.key}, setGridContent)
    })
}

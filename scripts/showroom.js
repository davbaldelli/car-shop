import {getCars} from "./carLoader.js";
import {carsToCards} from "./carFormatter.js";
import {getBrands} from "./brandsLoader.js";

//load the given function when the page is loaded
$(() => {
    getCars("cars/all", {}, setGridContent)

    getBrands("brands/all", {}, setBrandDropDownContent)
})

function generateCarGrid(initialValue, nextValue) {
    return initialValue + `
        <div class="col-12 col-md-4">
            ${nextValue}
        </div>
    `
}

function generateBrandList(initialValue, nextValue) {
    return initialValue + `
        <li><button class="dropdown-item">${nextValue.name}</button></li>
    `
}

function setGridContent(cars){
    $("#carGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}

function setBrandDropDownContent(brands){
    $("#brand-menu .dropdown-menu").html(brands.reduce(generateBrandList, ""))
    $("#brand-menu .dropdown-menu li .dropdown-item").click((event) => {
        console.log(event.target.innerHTML)
        getCars("cars/brand", {name : event.target.innerHTML}, setGridContent)
    })
}
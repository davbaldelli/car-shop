import {getCars} from "./carLoader.js";
import {carsToCards} from "./carFormatter.js";
import {getBrands} from "./brandsLoader.js";
import {brandsToCards, brandsToDropDownItems} from "./brandsFormatter.js";
import {createDropdownBtn, setBrandDropDownContent} from "./showroom-test.js";

//load the given function when the page is loaded
$(() => {
    getBrands("api/brands/all", {}, setBrandGridContent)

    $("#allCarsBtn").click(() => {
        getCars("api/cars/all", {}, setCarGridContent) 

        
        getBrands("api/brands/all", {}, function(brands){
            createDropdownBtn()
            let brand = brandsToDropDownItems(brands).reduce(generateBrandList, "")
            console.log(brand);
            setBrandDropDownContent(brand, 7)
        })
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


import {getCars} from "./carLoader.js";
import {carsToCards} from "./carFormatter.js";
import {getBrands} from "./brandsLoader.js";
import {brandsToCards} from "./brandsFormatter.js";
import {generateBrandGrid} from "./brandComposer.js";
import {generateCarGrid} from "./carComposer.js";
import {generateExtendedDropdown} from "./dropdownGenerator.js";
import {generateSinglePickDropdown} from "./singlePickDropDownGen.js";
import {filterByBrand, filterByChassis} from "./carsFilters.js";


//load the given function when the page is loaded
$(() => {
    getBrands("api/brands/all", {}, setBrandGridContent)
    $("#allCarsBtn").click(() => getCars("api/cars/all", {}, cars => {
        setCarGridContent(cars)
        getBrands("api/brands/all", {}, setBrandDropDownContent)
        setChassisDropDownContent([{name:"coupe"},{name:"sedan"}, {name: "convertible"}])
    }))
})

function setCarGridContent(cars){
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}

function setBrandGridContent(brands){
    $("#mainGrid").html(brandsToCards(brands).reduce(generateBrandGrid, ""))
}

function setBrandDropDownContent(items){
   generateExtendedDropdown("brandDropdown","mostra brand", items, 7, (a) =>
   {
       if(a.length !== 0) setCarGridContentWithFilter(filterByBrand(a))
       else setCarGridContentWithFilter(e => e)
   })
}
function setChassisDropDownContent(items){
    generateSinglePickDropdown("chassisDropdown", "Mostra opzioni", items,
        (a) => setCarGridContentWithFilter(filterByChassis(a)),
        () => setCarGridContentWithFilter(e => e))
}

function setCarGridContentWithFilter(filter){
    getCars("api/cars/all", {}, cars => {
        setCarGridContent(filter(cars))
    })
}


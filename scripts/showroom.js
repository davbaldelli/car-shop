import {getCars} from "./loaders/carsLoader.js";
import {carsToCards} from "./formatters/carFormatter.js";
import {getBrands} from "./loaders/brandsLoader.js";
import {brandsToCards} from "./formatters/brandsFormatter.js";
import {generateBrandGrid} from "./composers/brandComposer.js";
import {generateCarGrid} from "./composers/carComposer.js";
import {generateMultiSelectDropdown} from "./components/multiSelectDropdown.js";
import {generateSingleSelectionDropdown} from "./components/singleSelectionDropdown.js";
import {filterByBrand, filterByChassis} from "./utilities/carsFilters.js";


//load the given function when the page is loaded
$(() => {
    getBrands("api/brands/all.php", {}, setBrandGridContent)
    $("#allCarsBtn").click(() => getCars("api/cars/all.php", {}, cars => {
        setCarGridContent(cars)
        getBrands("api/brands/all.php", {}, setBrandDropDownContent)
        setChassisDropDownContent([{name:"Coupè", value : "coupe"},{name:"Berlina", value : "sedan"},
            {name: "Cabriolet", value: "convertible"}, {name : "Station Wagon",value: "station_wagon"},
            {name: "Minivan",value: "van"}, {name: "Suv",value: "suv"}] )
    }))
})

function setCarGridContent(cars){
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}

function setBrandGridContent(brands){
    $("#mainGrid").html(brandsToCards(brands).reduce(generateBrandGrid, ""))
}

function setBrandDropDownContent(items){
   generateMultiSelectDropdown("brandDropdown","Marca", items, 7, (a) =>
   {
       if(a.length !== 0) setCarGridContentWithFilter(filterByBrand(a))
       else setCarGridContentWithFilter(e => e)
   })
}
function setChassisDropDownContent(items){
    generateSingleSelectionDropdown("chassisDropdown", "Telaio", items,
        (a) => setCarGridContentWithFilter(filterByChassis(a)),
        () => setCarGridContentWithFilter(e => e))
}

function setCarGridContentWithFilter(filter){
    getCars("api/cars/all.php", {}, cars => {
        setCarGridContent(filter(cars))
    })
}


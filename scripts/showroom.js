import {carsToCards} from "./formatters/carFormatter.js";
import {brandsToCards} from "./formatters/brandsFormatter.js";
import {generateBrandGrid} from "./composers/brandComposer.js";
import {generateCarGrid} from "./composers/carComposer.js";
import {generateMultiSelectDropdown} from "./components/multiSelectDropdown.js";
import {generateSingleSelectionDropdown} from "./components/singleSelectionDropdown.js";
import {filterByBrand, filterByChassis} from "./utilities/carsFilters.js";
import {getAllManufacturers} from "./store/brandsStore.js";
import {getAllCars} from "./store/carsStore.js";

const chassisList = [{name: "Coupè", value: "coupe"}, {name: "Berlina", value: "sedan"},
    {name: "Cabriolet", value: "convertible"}, {name: "Station Wagon", value: "station_wagon"},
    {name: "Minivan", value: "van"}, {name: "Suv", value: "suv"}]

//load the given function when the page is loaded
$(() => {
    getAllManufacturers(setBrandGridContent)
    $("#allCarsBtn").click(() => getAllCars(setCarGridContent, () => getAllManufacturers(setBrandDropDownContent), () => setChassisDropDownContent(chassisList)))
})

function setCarGridContent(cars) {
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}

function setBrandGridContent(brands) {
    $("#mainGrid").html(brandsToCards(brands).reduce(generateBrandGrid, ""))
}

function setBrandDropDownContent(items) {
    generateMultiSelectDropdown("brandDropdown", "Marca", items, 7, (a) => {
        if (a.length !== 0) setCarGridContentWithFilter(filterByBrand(a))
        else setCarGridContentWithFilter(e => e)
    })
}

function setChassisDropDownContent(items) {
    generateSingleSelectionDropdown("chassisDropdown", "Telaio", items,
        (a) => setCarGridContentWithFilter(filterByChassis(a)),
        () => setCarGridContentWithFilter(e => e))
}

function setCarGridContentWithFilter(filter) {
    getAllCars(cars => setCarGridContent(filter(cars)))
}


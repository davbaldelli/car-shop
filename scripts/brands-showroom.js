import {carsToCards} from "./formatters/carFormatter.js";
import {brandsToCards} from "./formatters/brandsFormatter.js";
import {generateBrandGrid} from "./composers/brandComposer.js";
import {generateCarGrid} from "./composers/carComposer.js";
import {getAllManufacturers} from "./store/brandsStore.js";

$(() => {
    getAllManufacturers(setBrandGridContent)
})

function setCarGridContent(cars) {
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
    let filtersRow = $("#filters-row")
    filtersRow.addClass("d-flex")
    filtersRow.removeClass("d-none")
    $("#all-cars-btn").addClass("d-none")
}

function setBrandGridContent(brands) {
    $("#mainGrid").html(brandsToCards(brands).reduce(generateBrandGrid, ""))
}

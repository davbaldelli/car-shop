import {brandsToCards} from "./formatters/brandsFormatter.js";
import {generateBrandGrid} from "./composers/brandComposer.js";
import {getAllManufacturers} from "./store/brandsStore.js";
import {filterByName} from "./utilities/brandFilters.js";

let nameFilter = it => it;

$(() => {
    getAllManufacturers(setBrandGridContent)
    $("#brand-name-searchbar").on("input",function(){
        if($(this).val() !== ""){
            nameFilter = filterByName($(this).val())
        } else {
            nameFilter = it => it
        }
        setBrandGridContentWithFilter()
    })
})

function setBrandGridContentWithFilter() {
    getAllManufacturers(brands => setBrandGridContent(nameFilter(brands)))
}

function setBrandGridContent(brands) {
    $("#mainGrid").html(brandsToCards(brands).reduce(generateBrandGrid, ""))
}

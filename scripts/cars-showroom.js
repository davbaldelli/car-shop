import {carsToCards} from "./formatters/carFormatter.js";
import {generateCarGrid} from "./composers/carComposer.js";
import {filterByBrand, filterByChassis, filterByName} from "./utilities/carsFilters.js";
import {getAllManufacturers} from "./store/brandsStore.js";
import {getAllCars} from "./store/carsStore.js";
import {MultiSelectDropdown} from "./components/multiSelectDropdown.js";
import {SingleSelectionDropdown} from "./components/singleSelectionDropdown.js";

const chassisList = [{name: "Coupè", value: "coupe"}, {name: "Berlina", value: "sedan"},
    {name: "Cabriolet", value: "convertible"}, {name: "Station Wagon", value: "station_wagon"},
    {name: "Minivan", value: "van"}, {name: "Suv", value: "suv"}]

let brandFilter = it => it;
let chassisFilter = it => it;
let modelNameFilter = it => it;
let filters = it => modelNameFilter(brandFilter(chassisFilter(it)))
let brandsDropdown
let chassisDropdown

$(() => {
    getAllCars(setCarGridContent, () => getAllManufacturers(setBrandDropDownContent), () => setChassisDropDownContent(chassisList))
    let searchBar = $("#car-model-searchbar")
    searchBar.on("input",function(){
        if($(this).val() !== ""){
            modelNameFilter = filterByName($(this).val())
        } else {
            modelNameFilter = it => it
        }
        setCarGridContentWithFilter()
    })
})

function setCarGridContent(cars) {
    $("#mainGrid").html(carsToCards(cars).reduce(generateCarGrid, ""))
}

function setBrandDropDownContent(items) {
    brandsDropdown = new MultiSelectDropdown("0",$("#brandDropdown"),"Brand", items, 7, (items) => {
        if (items.length !== 0) {
            brandFilter = filterByBrand(items)
        }
        else {
            brandFilter = it => it
        }
        setCarGridContentWithFilter()
    },(item) => {
        addFilterBadge(item,item,onBrandRemoveFromFilter)
    }, removeFilterBadge)
    brandsDropdown.generateDropdown()
}

function onBrandRemoveFromFilter(key){
    brandsDropdown.removeElement(key)
}

function removeFilterBadge(key){
    $(`.filter-badge[data-key='${key}']`).remove()
}
function setChassisDropDownContent(items) {
    chassisDropdown = new SingleSelectionDropdown(1,$("#chassisDropdown"), "Chassis", items,
        (val, prev) => {
            chassisFilter = filterByChassis(val)
            addFilterBadge(val, val, (key) => {
                chassisFilter = it => it
                removeFilterBadge(key)
                setCarGridContentWithFilter()
            })
            setCarGridContentWithFilter()
            removeFilterBadge(prev)
        })
    chassisDropdown.generateDropdown()
}

function setCarGridContentWithFilter() {
    getAllCars(cars => setCarGridContent(filters(cars)))
}

function addFilterBadge(label, key, onClose){
    $("#filters-badge-container").append(badgeFormatter(label,key))
    $(`.badge-close-btn[data-key='${key}']`).click(() => {
        onClose(key)
    })
}

function badgeFormatter(label, key){
    return `<div class="badge rounded-pill bg-primary filter-badge" data-key="${key}">
                <div class="d-flex flex-row align-items-center">
                    <div class="m-1">${label}</div>
                    <button type="button" class="btn-close btn-close-white badge-close-btn" aria-label="Close" data-key="${key}"></button>
                 </div>
            </div>`
}

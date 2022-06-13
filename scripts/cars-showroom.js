import {carsToCards} from "./formatters/carFormatter.js";
import {generateCarGrid} from "./composers/carComposer.js";
import {filterByBrand, filterByChassis, filterByFuelType, filterByName} from "./utilities/carsFilters.js";
import {getAllManufacturers} from "./store/brandsStore.js";
import {getAllCars} from "./store/carsStore.js";
import {MultiSelectDropdown} from "./components/multiSelectDropdown.js";
import {SingleSelectionDropdown} from "./components/singleSelectionDropdown.js";
import {keyValueToBadge} from "./formatters/bedgeFormatter.js";

const chassisList = [{name: "Coupè", value: "coupe"}, {name: "Berlina", value: "sedan"},
    {name: "Cabriolet", value: "convertible"}, {name: "Station Wagon", value: "station_wagon"},
    {name: "Minivan", value: "van"}, {name: "Suv", value: "suv"}]

const fuelList = [{name : "hybrid", value: "hybrid"},{name: "gasoline" , value: "gasoline"},
    {name: "diesel", value: "diesel"},{name : "electric", value : "electric"},{name : "gpl", value: "gpl"},
    {name: "methane", value : "methane"}]

let brandFilter = it => it;
let chassisFilter = it => it;
let fuelFilter = it => it;
let modelNameFilter = it => it;
let filters = it => modelNameFilter(brandFilter(chassisFilter(fuelFilter(it))))
let brandsDropdown
let chassisDropdown
let fuelDropdown

$(() => {
    getAllCars(setCarGridContent )
    getAllManufacturers(setBrandDropdownContent)
    setChassisDropDownContent(chassisList)
    setEngineFuelDropdownContent(fuelList)
    $("#car-model-searchbar").on("input",function(){
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

function setBrandDropdownContent(items) {
    brandsDropdown = new MultiSelectDropdown("0",$("#brandDropdown"),"Brand", items, 7, onBrandFilterChange,
        (item) => addFilterBadge(item, item, removeBrandFromFilter), removeFilterBadge)
    brandsDropdown.generateDropdown()
}

function onBrandFilterChange(items){
    if (items.length !== 0) {
        brandFilter = filterByBrand(items)
    }
    else {
        brandFilter = it => it
    }
    setCarGridContentWithFilter()
}

function removeBrandFromFilter(key){
    brandsDropdown.removeElement(key)
}

function removeFilterBadge(key){
    $(`.filter-badge[data-key='${key}']`).remove()
}

function setChassisDropDownContent(items) {
    chassisDropdown = new SingleSelectionDropdown(1,$("#chassisDropdown"), "Chassis", items,
        (val, prev) => {
            chassisFilter = filterByChassis(val)
            removeFilterBadge(prev)
            addFilterBadge(val, val, (key) => {
                chassisFilter = it => it
                removeFilterBadge(key)
                setCarGridContentWithFilter()
            })
            setCarGridContentWithFilter()
        })
    chassisDropdown.generateDropdown()
}

function setEngineFuelDropdownContent(items){
    fuelDropdown = new SingleSelectionDropdown(2, $("#fuelTypeDropdown"), "Engine Fuel", items,
    (val, prev) =>{
        fuelFilter = filterByFuelType(val)
        removeFilterBadge(prev)
        addFilterBadge(val, val, (key) => {
            fuelFilter = it => it
            removeFilterBadge(key)
            setCarGridContentWithFilter()
        })
        setCarGridContentWithFilter()
    })
    fuelDropdown.generateDropdown()
}

function setCarGridContentWithFilter() {
    getAllCars(cars => setCarGridContent(filters(cars)))
}

function addFilterBadge(label, key, onClose){
    $("#filters-badge-container").append(keyValueToBadge(key, label))
    $(`.badge-close-btn[data-key='${key}']`).click(() => {
        onClose(key)
    })
}
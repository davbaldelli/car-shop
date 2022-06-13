import {carsToCards} from "./formatters/carFormatter.js";
import {generateCarGrid} from "./composers/carComposer.js";
import {getCarsByManufacturer} from "./store/carsStore.js";
import {getManufacturerByName} from "./store/brandsStore.js";
import {SingleSelectionDropdown} from "./components/singleSelectionDropdown.js";
import {filterByChassis, filterByFuelType, filterByName} from "./utilities/carsFilters.js";
import {keyValueToBadge} from "./formatters/bedgeFormatter.js";

const chassisList = [{name: "Coupè", value: "coupe"}, {name: "Berlina", value: "sedan"},
    {name: "Cabriolet", value: "convertible"}, {name: "Station Wagon", value: "station_wagon"},
    {name: "Minivan", value: "van"}, {name: "Suv", value: "suv"}]

const fuelList = [{name : "hybrid", value: "hybrid"},{name: "gasoline" , value: "gasoline"},
    {name: "diesel", value: "diesel"},{name : "electric", value : "electric"},{name : "gpl", value: "gpl"},
    {name: "methane", value : "methane"}]

let chassisFilter = it => it;
let fuelFilter = it => it;
let modelNameFilter = it => it;
let filters = it => modelNameFilter(chassisFilter(fuelFilter(it)))
let chassisDropdown
let fuelDropdown
let brand

$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    brand = urlParams.get('name');
    getCarsByManufacturer(brand, setCarGridContent)
    getManufacturerByName(brand, setPageValues)
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

function setCarGridContentWithFilter() {
    getCarsByManufacturer(brand,cars => setCarGridContent(filters(cars)))
}

function setPageValues(brand){
    $("#breadcrumb-brand-name").html(brand.name)
    $("#brand-page-title").html(brand.name)
    $("#brand-page-image").prop("src", brand.logo)
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

function removeFilterBadge(key){
    $(`.filter-badge[data-key='${key}']`).remove()
}

function addFilterBadge(label, key, onClose){
    $("#filters-badge-container").append(keyValueToBadge(key, label))
    $(`.badge-close-btn[data-key='${key}']`).click(() => {
        onClose(key)
    })
}
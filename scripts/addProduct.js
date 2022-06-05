import {brandsToSelectOptions} from "./formatters/brandsFormatter.js";
import {getAllManufacturers} from "./store/brandsStore.js";
import {insertCar} from "./store/carsStore.js";

$(() => {
    $("#new-car-form").submit((evt) => {
        evt.preventDefault()
        let user = JSON.parse(localStorage.getItem("user"))
        if (user && user.role === "admin") {
            let car = {
                model: $("#model-input").val(),
                id_brand: $("#brand-select").val(),
                year: $("#year-input").val(),
                image: $("#image-input").val(),
                bhp: $("#bhp-input").val(),
                torque: $("#torque-input").val(),
                weight: $("#weight-input").val(),
                top_speed: $("#top-speed-input").val(),
                transmission: $("#transmission-select").val(),
                drivetrain: $("#drivetrain-select").val(),
                car_type: $("#chassis-select").val(),
                fuel_type: $("#engine-select").val(),
                price: $("#price-input").val(),
                doors: $("#doors-input").val(),
                rating: $("#rating-input").val()
            }
            insertCar(car, handleSuccessCarInsert, handleErrorCarInsert)
        }
    })
    getAllManufacturers(setBrandSelectOptions)


})

function handleSuccessCarInsert() {
    let goodModal = new bootstrap.Modal($("#confirmationModal"), {keyboard: true})
    goodModal.show()
}

function handleErrorCarInsert() {
    let errorModal = new bootstrap.Modal($("#errorModal"), {keyboard: true})
    errorModal.show()
}

function setBrandSelectOptions(brands) {
    $("#brand-select").html(brandsToSelectOptions(brands).reduce((res, brand) => res + brand, ""))
}
import {addCar, getCars} from "../loaders/carsLoader.js";

export function getCarsByManufacturer(manufacturer, ...handlers) {
    getCars("api/cars/brand.php", {name: manufacturer}, ...handlers)
}

export function getRandomCars(...handlers) {
    getCars("/api/cars/random.php", {}, ...handlers)
}

export function getCarById(id, ...handlers) {
    getCars("/api/cars/id.php", {id}, ...handlers)
}

export function getAllCars(...handlers) {
    getCars("api/cars/all.php", {}, ...handlers)
}

export function insertCar(car, onSuccess, onError) {
    let user = JSON.parse(localStorage.getItem("user"))
    addCar("api/user/admin/addcar.php", {Token: user.token}, car, onSuccess, onError)
}
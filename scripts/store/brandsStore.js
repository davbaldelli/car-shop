import {getBrands} from "../loaders/brandsLoader.js";

export function getAllManufacturers(...handlers) {
    return getBrands("api/brands/all.php", {}, ...handlers)
}

export function getManufacturerByName(name, ...handlers) {
    return getBrands("api/brands/name.php", {name}, ...handlers)
}
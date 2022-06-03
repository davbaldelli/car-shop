import {getBrands} from "../loaders/brandsLoader.js";

export function getAllManufacturers(...handlers) {
    return getBrands("api/brands/all.php", {}, ...handlers)
}
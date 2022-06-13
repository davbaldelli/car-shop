export function filterByBrand(brands) {
    return items => items.filter(item => brands.includes(item.brand))
}

export function filterByChassis(chassis) {
    return items => items.filter(item => item.car_type === chassis)
}

export function filterByName(name){
    return items => items.filter(it => (it.brand + it.model).toLowerCase().includes(name.toLowerCase()))
}
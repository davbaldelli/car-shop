export function filterByBrand(brands) {
    return items => items.filter(item => brands.includes(item.brand))
}

export function filterByChassis(chassis) {
    return items => items.filter(item => item.car_type === chassis)
}
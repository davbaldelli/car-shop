export function filterByBrand(brands){
    return items => items.filter(item => brands.includes(item.brand))
}
export function filterByChassis(chassis){
    console.log(chassis)
    return items => items.filter(item=> item.car_type===chassis.name)
}
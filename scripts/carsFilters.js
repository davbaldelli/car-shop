export function filterByBrand(brands){
    return items => items.filter(item => brands.includes(item.brand))
}
export function filterByName(name){
    return items => items.filter(it => it.name.toLowerCase().includes(name.toLowerCase()), 0)
}
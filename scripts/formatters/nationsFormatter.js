export function nationsToSelectElements(nations) {
    return nations.map(nation => {
        return `<option value="${nation.id}">${nation.name}</option>`
    })
}

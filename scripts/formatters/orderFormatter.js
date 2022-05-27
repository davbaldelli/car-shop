export function ordersToUpdateCard(orders){
    return orders.map(order => {
        return `<div class="card">Ordine numero ${order.id}</div>`
    })
}

export function ordersToCard(orders){
    return orders.map(order => {
        return `<div class="card">Ordine numero ${order.id}</div>`
    })
}

export function orderToInfoPanel(order){
    return `<div class="row" style="color : white">Ordern n. ${order.id} -> ${order.state}</div>`
}

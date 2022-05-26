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

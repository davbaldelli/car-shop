export function ordersToUpdateCard(orders){
    return orders.map(order => {
        return `<div class="card">Ordine numero ${order.id} - stato: ${order.state}<button class="forwardOrderBtn" ${order.state==="delivered"? "disabled":""} data-key="${order.id}" >avanti</button>
        <button class="reverseOrderBtn" data-key="${order.id}" ${order.state==="pending_payment_confirm"? "disabled":""}>indietro</button></div>`
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

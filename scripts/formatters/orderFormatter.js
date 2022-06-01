import {getOldestLogsPerState} from "../utilities/logsFilter.js";

export function ordersToUpdateCard(orders){
    return orders.map(order => {
        return `<div class="card">Ordine numero ${order.id} - stato: ${order.state}<button class="forwardOrderBtn" ${order.state==="delivered"? "disabled":""} data-key="${order.id}" >avanti</button>
        <button class="reverseOrderBtn" data-key="${order.id}" ${order.state==="pending_payment_confirm"? "disabled":""}>indietro</button></div>`
    })
}

export function ordersToCard(orders){
    return orders.map(order => {
        return `<div class="card"><a href="order.php?orderId=${order.id}&userId=${order.id_user}">Ordine numero ${order.id}</a></div>`
    })
}

export function orderToInfoPanel(order){
    let statesLogMap = getOldestLogsPerState(order.logs)
    return `<div style="color : white">Ordern n. ${order.id} -> ${order.state}</div>
            <div style="color : white">ordered at -> ${statesLogMap.get("pending_payment_confirm").timestamp}</div>
            <div style="color : white">taken in charge at -> ${statesLogMap.get("taken_in_charge").timestamp}</div>
            <div style="color : white">delivering at -> ${statesLogMap.get("delivering").timestamp}</div>
            <div style="color : white">delivered at -> ${statesLogMap.get("delivered").timestamp}</div>`
}

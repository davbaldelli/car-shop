import {getOldestLogsPerState} from "../utilities/logsFilter.js";

export function ordersToUpdateCard(orders) {
    return orders.map(order => {
        return `<div class="card">Ordine numero ${order.id} - stato: ${order.state}<button class="forwardOrderBtn" ${order.state === "delivered" ? "disabled" : ""} data-key="${order.id}" >avanti</button>
        <button class="reverseOrderBtn" data-key="${order.id}" ${order.state === "pending_payment_confirm" ? "disabled" : ""}>indietro</button></div>`
    })
}

let orderMap = new Map([['taken_in_charge', "Taken in charge"], ["pending_payment_confirm", "Pending payment confirm"], ["delivering", "In transit"], ["delivered", "Your car has arrived"]])
let statusMap = new Map([['taken_in_charge', "src_img/status_taken.png"], ["pending_payment_confirm", "src_img/status_base.png"], ["delivering", "src_img/status_delivering.png"], ["delivered", "src_img/status_done.png"]])
export function ordersToCard(orders) {
    console.log(orders)
    return orders.map(order => {
        return `
        <li class="list-group-item order-list-element" style="background-color: #1E1E1E">
           
            <a id="list-element-content" href="order.php?orderId=${order.id}&userId=${order.id_user}">
             <div class="row">
                    <div class="col-2"><img id="orderCarIcon"src="${order.image}"/></div> 
                    <div class="col-2"><span>Order N.${order.id} </span></div>    
                    <div class="col-2"><span>${order.product}</span></div> 
                    <div class="col-2"><span> USD: ${order.price} </span></div> 
                    <div class="col-2"><span>${order.address_line_1} ${order.address_line_2}</span></div> 
                    <div class="col-2"><span>${orderMap.get(order.state)}</span></div> 
                </div>
            </a> 
        </li>
    `
    })
}


export function orderToInfoPanel(order) {
    console.log(order.logs[order.logs.length-1])
    let statesLogMap = getOldestLogsPerState(order.logs)
    let res = Array.from(statesLogMap).map(([key, value])=>{
        return `<div style="color : white">${key}-> ${value.timestamp} </div>`
    })
    return res.reduce((res, item)=>res+item, `<img src="${statusMap.get(order.logs[order.logs.length-1].state)}"/> <div style="color : white">Ordern n. ${order.id} -> ${order.state}</div>`)
}

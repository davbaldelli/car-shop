import {getOldestLogsPerState} from "../utilities/logsFilter.js";

export function ordersToUpdateCard(orders) {
    return orders.map(order => {
        return `<div class="card">Ordine numero ${order.id} - stato: ${order.state}
                    <button class="forwardOrderBtn" ${order.state === "delivered" ? "disabled" : ""} data-key="${order.id}" >avanti</button>
                    <button class="reverseOrderBtn" data-key="${order.id}" ${order.state === "pending_payment_confirm" ? "disabled" : ""}>indietro</button>
                </div>`
    })
}

let orderMap = new Map([['taken_in_charge', "Taken in charge"], ["pending_payment_confirm", "Pending payment confirm"], ["delivering", "In transit"], ["delivered", "Your car has arrived"]])
let statusMap = new Map([['taken_in_charge', "src_img/status_taken.png"], ["pending_payment_confirm", "src_img/status_base.png"], ["delivering", "src_img/status_delivering.png"], ["delivered", "src_img/status_done.png"]])
let classesMap = new Map([['taken_in_charge', "taken"], ["pending_payment_confirm", "payment-pending"], ["delivering", "delivering"], ["delivered", "delivered"]])

export function ordersToCard(orders) {
    return orders.map(order => {
        return `
        <li class="list-group-item order-list-element" style="background-color: #1E1E1E">
           
            <a id="list-element-content" href="order.php?orderId=${order.id}&userId=${order.id_user}">
             <div class="row">
                    <div class="col-2"><img id="orderCarIcon" src="${order.image}" alt="ordered car thumbnail"/></div> 
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
    return res.reduce((res, item)=>res+item, `<img src="${statusMap.get(order.logs[order.logs.length-1].state)}"/> <div style="color : white">Order n. ${order.id} -> ${order.state}</div>`)
}


export function orderToInfoPanel2(order) {
    let statesLogMap = getOldestLogsPerState(order.logs)
    let ordersHTML = Array.from(statesLogMap).map(([key, value])=>{
        return `<div  id="${classesMap.get(key)}" class="status-detail-list" > <span>${orderMap.get(key)}</span><span>${value.timestamp}</span> </div>`
    })
    return `
            <div class="row " id="order-detail-header">
                <div id="div-order-detail-car-img"><img id="order-detail-car-img" src="${order.image}"/></div>
                <div id="order-number-header"><h4>Order n. ${order.id}  &nbsp &nbsp </h4> <h2>${order.product}</h2></div>
            </div>
            
            
            <div class="row order-row"  id="order-detail-content">
                <div class="col-1" id="statusPoints"><img src="${statusMap.get(order.logs[order.logs.length - 1].state)}"/></div>
                <div class="col">${ordersHTML.reduce((res, item) => res + item, "")}</div>
            </div>
            
            
            <div class="row order-row" id="order-detail-user">
                <ol class="list-group" id="list-user-detail">
                  <li class="list-group-item d-flex justify-content-between align-items-start user-detail">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Costumer Name:</div>
                      ${order.address.first_name} ${order.address.last_name}
                    </div>              
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start user-detail">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Shipping Address:</div>
                      Area: ${order.address.administrative_area} &nbsp City: ${order.address.locality} &nbsp Address: ${order.address.address_line_1} ${order.address.address_line_2}
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start user-detail">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Price: </div>
                      ${order.price}
                    </div>
                  </li>
                </ol>
            </div>`
}
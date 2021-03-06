import {getOldestLogsPerState} from "../utilities/logsFilter.js";

let orderAdminMap = new Map([['taken_in_charge', "Taken in charge"], ["pending_payment_confirm", "Pending payment confirm"], ["delivering", "In transit"], ["delivered", "Car delivered"]])

export function ordersToUpdateCard(orders) {
    return orders.map(order => {
        return `<li class="list-group-item list-group-item-admin-update">
                    <span> Order n. ${order.id} - state: <strong>${orderAdminMap.get(order.state)}</strong></span>
                    
                    <span class="list-group-admin-update-buttons">
                        <button class="reverseOrderBtn btn btn-info" data-key="${order.id}" ${order.state === "pending_payment_confirm" ? "disabled" : ""}><- Previus State</button>
                        <button class="forwardOrderBtn btn btn-info"  ${order.state === "delivered" ? "disabled" : ""} data-key="${order.id}" >Next state -></button>
                    </span>
                </li>`
    })
}

let orderMap = new Map([['taken_in_charge', "Taken in charge"], ["pending_payment_confirm", "Pending payment"], ["delivering", "In transit"], ["delivered", "Delivered"]])
let statusMap = new Map([['taken_in_charge', "src_img/status_taken.png"], ["pending_payment_confirm", "src_img/status_pending.png"], ["delivering", "src_img/status_delivering.png"], ["delivered", "src_img/status_done.png"]])
let classesMap = new Map([['taken_in_charge', "taken"], ["pending_payment_confirm", "payment-pending"], ["delivering", "delivering"], ["delivered", "delivered"]])

export function ordersToList(orders) {
    return orders.map(order => {
        return `
        <li class="list-group-item order-list-element" style="background-color: #1E1E1E">
           
            <a id="list-element-content" href="order.php?orderId=${order.id}&userId=${order.id_user}">
             <div class="order-detail-row">
                    <div class="order-detail-col"><img id="orderCarIcon" src="${order.image}" alt="ordered car thumbnail"/></div> 
                    <div class="order-detail-col"><span>Order N.${order.id} </span></div>                   
                    <div class="order-detail-col"><span>${order.quantity}x - ${order.product}</span></div> 
                    <div class="order-detail-col"><span> USD: ${order.price} </span></div> 
                    <div class="order-detail-col"><span>${orderMap.get(order.state)}</span></div> 
                </div>
            </a> 
        </li>
    `
    })
}

export function orderToInfoPanel2(order) {
    let statesLogMap = getOldestLogsPerState(order.logs)
    let ordersHTML = Array.from(statesLogMap).map(([key, value])=>{
        let time=timeFormat(value.timestamp)
        return `<div  id="${classesMap.get(key)}" class="status-detail-item" > <span class="status-detail-item-state">${orderMap.get(key)}</span><em class="status-detail-item-time">${time[0]}</em> </div>`
    })
    return `
            <div class="row py-3 mt-2" id="orderDetailHeader">
                <div class="col-12 col-md-3">
                    <a id="detailLinkToCar" href="product.php?id=${order.id_car}"><img id="order-detail-car-img"  class="img-fluid" src="${order.image}" alt="car image" aria-hidden="true"/></a>
                </div>
                <div class="col-12 col-md-6 text-center d-flex flex-column flex-md-row align-items-center justify-content-center mt-md-0 mt-3" id="order-detail-heading">
                    <h1 class="h3">Order n. ${order.id}  &nbsp &nbsp </h1>
                    <h2 class="h2">${order.product}</h2>
                </div>
            </div>
           
            <div class="row mt-3">
                <div class="col-1 col-md-3"></div>
                <div class="col-2 col-md-1" id="status-points"> <img src="${statusMap.get(order.logs[order.logs.length - 1].state)} " alt="roadmap" aria-hidden="true"/></div>
                <div class="col-6 col-md-4"><div class= "status-detail-list">${ordersHTML.reduce((res, item) => res + item, "")}</div></div>
            </div>
                        
            <div class="row my-5">
                <div class="col">
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
                </div>
            </div>

`
}

function timeFormat(time){
    let timeArray
    return  timeArray=time.split(" ")
}
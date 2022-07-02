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
    console.log(orders)
    return orders.map(order => {
        return `
        <li class="list-group-item order-list-element" style="background-color: #1E1E1E">
           
            <a id="list-element-content" href="order.php?orderId=${order.id}&userId=${order.id_user}">
             <div class="order-detail-row">
                    <div class="order-detail-col"><img id="orderCarIcon" src="${order.image}" alt="ordered car thumbnail"/></div> 
                    <div class="order-detail-col"><span>Order N.${order.id} </span></div>                   
                    <div class="order-detail-col"><span>${order.quantity} - ${order.product}</span></div> 
                    <div class="order-detail-col"><span> USD: ${order.price} </span></div> 
                    <div class="order-detail-col"><span>${order.address_line_1} ${order.address_line_2}</span></div> 
                    <div class="order-detail-col"><span>${orderMap.get(order.state)}</span></div> 
                </div>
            </a> 
        </li>
    `
    })
}


// export function orderToInfoPanel(order) {
//     let statesLogMap = getOldestLogsPerState(order.logs)
//     let res = Array.from(statesLogMap).map(([key, value])=>{
//         return `<div style="color : white">${key}-> ${value.timestamp} </div>`
//     })
//     return res.reduce((res, item)=>res+item, `<img src="${statusMap.get(order.logs[order.logs.length-1].state)}"/> <div style="color : white">Order n. ${order.id} -> ${order.state}</div>`)
// }


export function orderToInfoPanel2(order) {
    console.log(order)
    let statesLogMap = getOldestLogsPerState(order.logs)
    let ordersHTML = Array.from(statesLogMap).map(([key, value])=>{
        let time=timeFormat(value.timestamp)
        return `<div  id="${classesMap.get(key)}" class="status-detail-item" > <span class="status-detail-item-state">${orderMap.get(key)}</span><span class="status-detail-item-time">${time[0]}</span> </div>`
    })
    return `
            <div id="orderDetailHeader">
                <div id="div-order-detail-car-img"><a id="detailLinkToCar" href="/product.php?id=${order.id_car}"><img id="order-detail-car-img" src="${order.image}" alt="car image" aria-hidden="true"/></a></div>
                <div id="order-number-header"><h4>Order n. ${order.id}  &nbsp &nbsp </h4> <h2>${order.product}</h2></div>
            </div>
            
            <div id="orderDetailContainer">
                <div class="row order-row"  id="order-detail-content">
                    <div  id="statusPoints"> <img src="${statusMap.get(order.logs[order.logs.length - 1].state)} " alt="roadmap" aria-hidden="true"/></div>
                    <div class= "status-detail-list">${ordersHTML.reduce((res, item) => res + item, "")}</div>
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
                </div>
            </div>

`
}

function timeFormat(time){
    let timeArray
    return  timeArray=time.split(" ")
}
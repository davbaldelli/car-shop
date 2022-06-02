export function ordersToUpdateCard(orders){
    return orders.map(order => {
        return `<div class="card">Ordine numero ${order.id} - stato: ${order.state}<button class="forwardOrderBtn" ${order.state==="delivered"? "disabled":""} data-key="${order.id}" >avanti</button>
        <button class="reverseOrderBtn" data-key="${order.id}" ${order.state==="pending_payment_confirm"? "disabled":""}>indietro</button></div>`
    })
}
let orderMap = new Map([['taken_in_charge', "Taken in charge"], ["pending_payment_confirm", "Pending payment confirm"], ["delivering", "In transit"], ["delivered", "Your car has arrived"]])
export function ordersToCard(orders){
    console.log(orders)
    return orders.map(order => {
        return `
        <li class="list-group-item order-list-element" style="background-color: #1E1E1E">
           
            <a id="list-element-content" href="order.php?orderId=${order.id}&userId=${order.id_user}">
             <div class="row">
                    <div class="col-2"><img id="orderCarIcon"src="${order.image}"/></div> 
                    <div class="col-2"><span>Order N.${order.id} </span></div>    
                    <div class="col-2"><span>${order.product}</span></div> 
                    <div class="col-2"><span> US: ${order.price} </span></div> 
                    <div class="col-2"><span>${order.address_line_1} ${order.address_line_2}</span></div> 
                    <div class="col-2"><span>${orderMap.get(order.state)}</span></div> 
                </div>
            </a> 
        </li>
    `})
}


export function orderToInfoPanel(order){
    return `<div class="row" style="color : white">Ordern n. ${order.id} -> ${order.state}</div>`
}

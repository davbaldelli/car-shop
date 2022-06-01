export function ordersToUpdateCard(orders){
    return orders.map(order => {
        return `<div class="card">Ordine numero ${order.id} - stato: ${order.state}<button class="forwardOrderBtn" ${order.state==="delivered"? "disabled":""} data-key="${order.id}" >avanti</button>
        <button class="reverseOrderBtn" data-key="${order.id}" ${order.state==="pending_payment_confirm"? "disabled":""}>indietro</button></div>`
    })
}

export function ordersToCard(orders){
    console.log(orders)
    return orders.map(order => {
        return `
        <li class="list-group-item order-list-element" style="background-color: #1E1E1E">
            <a id="list-element-content" href="order.php?orderId=${order.id}&userId=${order.id_user}">
                <img id="orderCarIcon"src="https://i.imgur.com/lL2KQPH.jpg"/> 
                <span>Order N.${order.id} </span>      
                <span>${order.product}</span>
                <span> US: ${order.price} </span>
                <span>${orderStateParse(order)}</span>
            </a>
        </li>
    `})
}

function orderStateParse(order){
  if(order.state=="taken_in_charge") {
      return "Take in charge"
  }else if(order.state=="pending_payment_confirm"){
      return "Waiting for payment"
  }else if(order.state=="delivering"){
      return "In transit"
  }else if(order.state=="delivered"){
      return "Your car has arrived"
  }
}

export function orderToInfoPanel(order){
    return `<div class="row" style="color : white">Ordern n. ${order.id} -> ${order.state}</div>`
}

import {getOrders} from "./loaders/orderLoader.js";
import {ordersToCard} from "./formatters/orderFormatter.js";

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getOrders("/api/user/orders/all.php",{Token : user.token}, {userId : user.userId}, setOrderListContent)
    }
    $("#deliveredOrdersButton").click(() => {
        getOrders("/api/user/orders/bystate.php",{Token : user.token}, {userId : user.userId, state : "delivered"}, setOrderListContent)
    })

    $("#deliveringOrdersButton").click(() => {
        getOrders("/api/user/orders/bystate.php",{Token : user.token}, {userId : user.userId, state : "delivering"}, setOrderListContent)
    })

    $("#allOrdersButton").click(() => {
        getOrders("/api/user/orders/all.php",{Token : user.token}, {userId : user.userId}, setOrderListContent)
    })
})

function setOrderListContent(orders){
    $("#ordersList").html(ordersToCard(orders).reduce((res,order) => res + order,""))
}

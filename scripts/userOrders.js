import {getOrders} from "./loaders/orderLoader.js";
import {ordersToCard} from "./formatters/orderFormatter.js";

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getOrders("/api/user/orders/all.php",{Token : user.token}, {userId : user.user_id}, setOrderListContent)
    } else {
        //TODO reinderizzare al login
        console.log("Devi essere loggato per questo")
    }
    $("#deliveredOrdersButton").click(() => {
        getOrders("/api/user/orders/bystate.php",{Token : user.token}, {userId : user.user_id, state : "delivered"}, setOrderListContent)
    })

    $("#deliveringOrdersButton").click(() => {
        getOrders("/api/user/orders/bystate.php",{Token : user.token}, {userId : user.user_id, state : "delivering"}, setOrderListContent)
    })

    $("#allOrdersButton").click(() => {
        getOrders("/api/user/orders/all.php",{Token : user.token}, {userId : user.user_id}, setOrderListContent)
    })
})

function setOrderListContent(orders){
    $("#ordersList").html(ordersToCard(orders).reduce((res,order) => res + order,""))
}

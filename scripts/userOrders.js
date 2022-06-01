import {getOrders} from "./loaders/orderLoader.js";
import {ordersToCard} from "./formatters/orderFormatter.js";

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getOrders("/api/user/orders/all.php",{Token : user.token}, {userId : user.userId}, setOrderListContent)
    }
    $("#deliveredOrders-tab").click(() => {
        getOrders("/api/user/orders/bystate.php",{Token : user.token}, {userId : user.userId, state : "delivered"}, setOrderListContent)
    })

    $("#deliveringOrder-tab").click(() => {
        getOrders("/api/user/orders/bystate.php",{Token : user.token}, {userId : user.userId, state : "delivering"}, setOrderListContent)
    })

    $("#allOrders-tab").click(() => {
        getOrders("/api/user/orders/all.php",{Token : user.token}, {userId : user.userId}, setOrderListContent)
    })
})

function setOrderListContent(orders){
    $(".list-group").html(ordersToCard(orders).reduce((res,order) => res + order,""))
}

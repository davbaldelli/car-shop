import {getOrders} from "./loaders/orderLoader.js";
import {ordersToCard} from "./formatters/orderFormatter.js";
import {getAllUserOrders, getUserDeliveredOrders, getUserNotDeliveredOrders} from "./store/ordersStore.js";

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getAllUserOrders(setOrderListContent)
    }
    $("#deliveredOrdersTab").click(() => {
        getUserDeliveredOrders(setOrderListContent)
    })

    $("#deliveringOrdersTab").click(() => {
        getUserNotDeliveredOrders(setOrderListContent)
    })

    $("#allOrdersTab").click(() => {
        getAllUserOrders(setOrderListContent)
    })
})

function setOrderListContent(orders){
    $(".list-group").html(ordersToCard(orders).reduce((res,order) => res + order,""))
}

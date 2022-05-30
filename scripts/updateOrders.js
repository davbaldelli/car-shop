import {getOrders, updateOrder} from "./loaders/orderLoader.js";
import {ordersToUpdateCard} from "./formatters/orderFormatter.js";
import {addNotify} from "./loaders/notifiesLoader.js";

let ordersStateArray=["pending_payment_confirm", "taken_in_charge", "delivering", "delivered"]
let ordersStateMap=ordersStateArray.reduce((res, item, index)=>res.set(item, index), new Map())
let orders=new Map()



$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.role === "admin"){
        getOrders("/api/user/admin/getorders.php", {Token : user.token},{}, setOrderListContent, setOrdersMap)
    }
})
function setOrdersMap(items){
    orders= items.reduce((res, item)=>res.set(item.id, item), new Map())   
}

function setOrderListContent(ordersCards){
    $("#orderList").html(ordersToUpdateCard(ordersCards).reduce((res, card) => res + card),"")
    $(".forwardOrderBtn").click(evt => {
        let state = ordersStateArray[ordersStateMap.get(orders.get(parseInt(evt.currentTarget.dataset.key)).state)+1]
        updateOrderState(evt.currentTarget.dataset.key, state)
    })

    $(".reverseOrderBtn").click(evt => {
        let state = ordersStateArray[ordersStateMap.get(orders.get(parseInt(evt.currentTarget.dataset.key)).state)-1]
        updateOrderState(evt.currentTarget.dataset.key, state)
    })

}

function updateOrderState(id, state){
    let data = {id , state}
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.role === "admin"){
        updateOrder("api/user/admin/updateorder.php", {Token : user.token}, data, res => {
            sendUpdateNotification(user, "Order Update",`The order n. ${id} now is in the current state: ${state}`)
            getOrders("/api/user/admin/getorders.php", {Token : user.token},{}, setOrderListContent, setOrdersMap)
        })
    }
}

function sendUpdateNotification(user, title, description){
    let notify = {id_user : user.user_id, title: title, description : description}
    addNotify("api/user/admin/addnotify.php",{Token : user.token}, notify)
}
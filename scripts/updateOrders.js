import {ordersToUpdateCard} from "./formatters/orderFormatter.js";
import {insertNotify} from "./store/notificationsStore.js";
import {getAllOrders, updateOrderState} from "./store/ordersStore.js";

let ordersStateArray = ["pending_payment_confirm", "taken_in_charge", "delivering", "delivered"]
let ordersStateMap = ordersStateArray.reduce((res, item, index) => res.set(item, index), new Map())
let orders = new Map()


$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if (user && user.role === "admin") {
        getAllOrders(setOrderListContent, setOrdersMap)
    }
})

function setOrdersMap(items) {
    orders = items.reduce((res, item) => res.set(item.id, item), new Map())
}

function setOrderListContent(ordersCards) {
    $("#orderList").html(ordersToUpdateCard(ordersCards).reduce((res, card) => res + card), "")
    $(".forwardOrderBtn").click(evt => {
        let state = ordersStateArray[ordersStateMap.get(orders.get(parseInt(evt.currentTarget.dataset.key)).state) + 1]
        onUpdateOrderState(evt.currentTarget.dataset.key, state)
    })

    $(".reverseOrderBtn").click(evt => {
        let state = ordersStateArray[ordersStateMap.get(orders.get(parseInt(evt.currentTarget.dataset.key)).state) - 1]
        onUpdateOrderState(evt.currentTarget.dataset.key, state)
    })

}

function onUpdateOrderState(id, state) {
    let user = JSON.parse(localStorage.getItem("user"))
    if (user && user.role === "admin") {
        updateOrderState(id, state, res => {
            sendUpdateNotification(res, "Order Update", `The order n. ${id} now is in the current state: ${state}`)
            getAllOrders(setOrderListContent, setOrdersMap)
        })
    }
}

function sendUpdateNotification(order, title, description) {
    let notify = {userId: order.id_user, title: title, description: description}
    insertNotify(notify, () => {
    }, () => {
    })
}
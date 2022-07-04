import {addOrder, getOrders, updateOrder} from "../loaders/orderLoader.js";

export function getOrder(id, ...handlers) {
    let user = JSON.parse(localStorage.getItem("user"))
    getOrders("api/user/orders/byid.php", {Token: user.token}, {userId: user.userId, orderId: id}, ...handlers)
}

export function getAllOrders(...handlers) {
    let user = JSON.parse(localStorage.getItem("user"))
    getOrders("api/user/admin/getorders.php", {Token: user.token}, {}, ...handlers)
}

export function getAllUserOrders(...handlers) {
    let user = JSON.parse(localStorage.getItem("user"))
    getOrders("api/user/orders/all.php", {Token: user.token}, {userId: user.userId}, ...handlers)
}

export function getUserDeliveredOrders(...handlers) {
    let user = JSON.parse(localStorage.getItem("user"))
    getOrders("api/user/orders/bystate.php", {Token: user.token}, {
        userId: user.userId,
        state: "delivered"
    }, ...handlers)
}

export function getUserNotDeliveredOrders(...handlers) {
    let user = JSON.parse(localStorage.getItem("user"))
    getOrders("api/user/orders/notdelivered.php", {Token: user.token}, {userId: user.userId}, ...handlers)
}

export function insertOrder(order, onSuccess, onFail) {
    let user = JSON.parse(localStorage.getItem("user"))
    addOrder("api/user/orders/new.php", {Token: user.token}, order, onSuccess)
}

export function updateOrderState(id, state, onSuccess) {
    let user = JSON.parse(localStorage.getItem("user"))
    updateOrder("api/user/admin/updateorder.php", {Token: user.token}, {id, state}, onSuccess)
}
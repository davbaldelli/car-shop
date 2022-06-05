import {orderToInfoPanel} from "./formatters/orderFormatter.js";
import {getOrder} from "./store/ordersStore.js";

$(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const orderId = urlParams.get('orderId')
    let user = JSON.parse(localStorage.getItem("user"))
    if (user && user.token) {
        getOrder(orderId, setInfoPanelContent)
    }

})

function setInfoPanelContent(order) {
    $("#orderInfoPanel").html(orderToInfoPanel(order))
}
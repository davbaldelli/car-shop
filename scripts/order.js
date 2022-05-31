import {orderToInfoPanel} from "./formatters/orderFormatter.js";
import {getOrders} from "./loaders/orderLoader.js";

$(()=>{
    const urlParams = new URLSearchParams(window.location.search)
    const orderId = urlParams.get('orderId')

    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getOrders("api/user/orders/byid.php",{Token : user.token}, {userId : user.userId, orderId : orderId}, setInfoPanelContent)
    }

})

function setInfoPanelContent(order){
    $("#orderInfoPanel").html(orderToInfoPanel(order))
}
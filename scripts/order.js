import {orderToInfoPanel} from "./formatters/orderFormatter.js";
import {getOrders} from "./loaders/orderLoader.js";

$(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const order_id = urlParams.get('order_id');
    const user_id = urlParams.get('user_id')

    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getOrders("api/user/orders/byid.php",{Token : user.token}, {userId : user.user_id, orderId : order_id}, setInfoPanelContent)
    }

})

function setInfoPanelContent(order){
    $("#orderInfoPanel").html(orderToInfoPanel(order))
}
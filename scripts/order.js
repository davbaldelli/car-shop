import {orderToInfoPanel} from "./formatters/orderFormatter.js";
import {getOrders} from "./loaders/orderLoader.js";

$(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getOrders("api/user/orders/byid.php",{Token : user.token}, {userId : user.id_user, orderId : id}, setInfoPanelContent)
    }

})

function setInfoPanelContent(order){
    $("#orderInfoPanel").html(orderToInfoPanel(order[0]))
}
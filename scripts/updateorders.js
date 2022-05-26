import {getOrders, updateOrder} from "./orderLoader.js";
import {ordersToUpdateCard} from "./orderFormatter.js";

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.role === "admin"){
        getOrders("/api/user/admin/getorders.php", {Token : user.token},{}, setOrderListContent)
    }
})

function setOrderListContent(ordersCards){
    $("#orderList").html(ordersToUpdateCard(ordersCards).reduce((res, card) => res + card),"")
    $(".updateOrderBtn").click(evt => {
        //TODO trovare il modo di acquisire sia l'id dell'ordine che lo stato da aggiornare
        let data = {id : evt.currentTarget.dataset.key, state : evt.currentTarget.dataset.state}
        let user = JSON.parse(localStorage.getItem("user"))
        if(user && user.role === "admin"){
            updateOrder("api/user/admin/updateorder.php", {Token : user.token}, data, res => console.log(res))
        }
    })
}
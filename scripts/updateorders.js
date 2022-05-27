import {getOrders, updateOrder} from "./loaders/orderLoader.js";
import {ordersToUpdateCard} from "./formatters/orderFormatter.js";

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
        //TODO trovare il modo di acquisire sia l'id dell'ordine che lo stato da aggiornare
        let state = ordersStateArray[ordersStateMap.get(orders.get(parseInt(evt.currentTarget.dataset.key)).state)+1]
        let data = {id : evt.currentTarget.dataset.key, state}
        let user = JSON.parse(localStorage.getItem("user"))
        if(user && user.role === "admin"){
            updateOrder("api/user/admin/updateorder.php", {Token : user.token}, data, res => {            
                getOrders("/api/user/admin/getorders.php", {Token : user.token},{}, setOrderListContent, setOrdersMap)
            })
        }
    })

    $(".reverseOrderBtn").click(evt => {
        //TODO trovare il modo di acquisire sia l'id dell'ordine che lo stato da aggiornare
        let state = ordersStateArray[ordersStateMap.get(orders.get(parseInt(evt.currentTarget.dataset.key)).state)-1]
        let data = {id : evt.currentTarget.dataset.key, state}
        let user = JSON.parse(localStorage.getItem("user"))
        if(user && user.role === "admin"){
            updateOrder("api/user/admin/updateorder.php", {Token : user.token}, data, res => {               
                getOrders("/api/user/admin/getorders.php", {Token : user.token},{}, setOrderListContent, setOrdersMap)
            })
        }
    })

}
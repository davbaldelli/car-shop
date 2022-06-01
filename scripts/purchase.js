import {getCart} from "./utilities/cartManager.js";
import {productsToListElements} from "./formatters/productFormatter.js";
import {addAddress, getUserDeliveringAddresses, makePayment} from "./loaders/userLoader.js";
import {addressesToListItems} from "./formatters/addressesFormatter.js";
import {getNations} from "./loaders/nationLoader.js";
import {nationsToSelectElements} from "./formatters/nationsFormatter.js";
import {addOrder} from "./loaders/orderLoader.js";

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    setupProductList(getCart().products)
    getUserDeliveringAddresses('api/user/addresses/all.php', {Token : user.token}, {userId : user.userId}, setupAddressesList)
    getNations("api/nations/all.php", {}, setupNationsSelectOptions)
    $("#addAddressForm").submit((e) => {
        e.preventDefault()
        let car = {
            first_name : $("#firstNameInput").val(),
            last_name : $("#lastNameInput").val(),
            id_user : user.userId,
            id_country : $("#nation-select").val(),
            administrative_area: $("#administrativeAreaInput").val(),
            locality : $("#localityInput").val(),
            postal_code : $("#zipInput").val(),
            address_line_1 : $("#addressL1Input").val(),
            address_line_2 : $("#addressL2Input").val(),
        }
        addAddress("api/user/addresses/new.php",{Token : user.token}, car, (res) => console.log(res))
    })
    $("#purchaseBtn").click(() => {
        let address = parseInt($("input[name='delivering-address']:checked").val());
        getCart().products.forEach(item => {
                let order = {id_user : user.userId, id_car : item.product.id, state : "pending_payment_confirm", quantity: item.quantity, id_address : address}
                addOrder("api/user/orders/new.php", {Token : user.token}, order,(_) => onNewOrderSuccess(item))
            }
        )
    })
})

function onNewOrderSuccess(item){
    let user = JSON.parse(localStorage.getItem("user"))
    makePayment("api/user/payment/makepayment.php",{Token : user.token}, {userId : user.userId, amount : item.product.price * item.quantity}, (res) => console.log(res))
}

function setupProductList(products){
    $("#productsList").html(productsToListElements(products).reduce((res, el) => res + el, ""))
}

function setupAddressesList(addresses){
    $("#addressesList").html(addressesToListItems(addresses).reduce((res, el) => res + el, ""))
}

function setupNationsSelectOptions(nations){
    $("#nation-select").html(nationsToSelectElements(nations).reduce((res, el) => res + el, ""))
}
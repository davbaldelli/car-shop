import {getCart} from "./utilities/cartManager.js";
import {productsToListElements} from "./formatters/productFormatter.js";
import {addAddress, getUserDeliveringAddresses, makePayment, rechargeWallet} from "./loaders/userLoader.js";
import {addressesToListItems} from "./formatters/addressesFormatter.js";
import {nationsToSelectElements} from "./formatters/nationsFormatter.js";
import {getAllNations} from "./store/nationsStore.js";
import {insertOrder} from "./store/ordersStore.js";

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    setupProductList(getCart().products)
    getUserDeliveringAddresses('api/user/addresses/all.php', {Token: user.token}, {userId: user.userId}, setupAddressesList)
    getAllNations(setupNationsSelectOptions)
    $("#addAddressForm").submit((e) => {
        e.preventDefault()
        let car = {
            first_name: $("#firstNameInput").val(),
            last_name: $("#lastNameInput").val(),
            id_user: user.userId,
            id_country: $("#nation-select").val(),
            administrative_area: $("#administrativeAreaInput").val(),
            locality: $("#localityInput").val(),
            postal_code: $("#zipInput").val(),
            address_line_1: $("#addressL1Input").val(),
            address_line_2: $("#addressL2Input").val(),
        }
        addAddress("api/user/addresses/new.php", {Token: user.token}, car, (res) => console.log(res))
    })
    $("#purchaseBtn").click(() => {
        let address = parseInt($("input[name='delivering-address']:checked").val());
        getCart().products.forEach(item => {
                let order = {
                    id_user: user.userId,
                    id_car: item.product.id,
                    state: "pending_payment_confirm",
                    quantity: item.quantity,
                    id_address: address
                }
                insertOrder(order, () => onNewOrderSuccess(item))
            }

        )
    })

    $("#rechargeWalletBtn").click(() => {
        let amount = parseInt($("#rechargeAmountInput").val())
        let user = JSON.parse(localStorage.getItem("user"))
        rechargeWallet("api/user/payment/rechargewallet.php", {Token: user.token}, {
            userId: user.userId,
            amount
        }, onRechargeSuccess)
    })

})

function onRechargeSuccess() {
    //TODO Show Recharge success
}

function onNewOrderSuccess(item) {
    let user = JSON.parse(localStorage.getItem("user"))
    makePayment("api/user/payments/makepayment.php", {Token: user.token}, {
        userId: user.userId,
        amount: item.product.price * item.quantity
    }, onPaymentConfirm, onPaymentError)
}

function onPaymentConfirm() {
    //TODO Show payment success
}

function onPaymentError() {
    //TODO Show payment error
}

function setupProductList(products) {
    $("#productsList").html(productsToListElements(products).reduce((res, el) => res + el, ""))
}

function setupAddressesList(addresses) {
    $("#addressesList").html(addressesToListItems(addresses).reduce((res, el) => res + el, ""))
}

function setupNationsSelectOptions(nations) {
    $("#nation-select").html(nationsToSelectElements(nations).reduce((res, el) => res + el, ""))
}
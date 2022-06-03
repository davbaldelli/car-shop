import {getCart} from "./utilities/cartManager.js";
import {productsToListElements} from "./formatters/productFormatter.js";
import {addressesToListItems} from "./formatters/addressesFormatter.js";
import {nationsToSelectElements} from "./formatters/nationsFormatter.js";
import {getAllNations} from "./store/nationsStore.js";
import {insertOrder} from "./store/ordersStore.js";
import {addUserAddress, getUserAddresses} from "./store/userStore.js";
import {payProduct, putAmountInWallet} from "./store/walletStore.js";

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    setupProductList(getCart().products)
    getUserAddresses(setupAddressesList)
    getAllNations(setupNationsSelectOptions)
    $("#addAddressForm").submit((e) => {
        e.preventDefault()
        let address = {
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
        addUserAddress(address, onInsertAddressSuccess, onInsertAddressError)
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

    $("#rechargeWalletForm").submit((e) => {
        let amount = parseInt($("#creditInput").val())
        putAmountInWallet(amount, onRechargeSuccess)
        e.preventDefault()
    })

})

function onRechargeSuccess() {
    //TODO Show Recharge success
}

function onInsertAddressSuccess(){
    //TODO Show address insert success
}

function onInsertAddressError(){
    //TODO Show address insert success
}

function onNewOrderSuccess(item) {
    payProduct(item.product, item.quantity, onPaymentConfirm, onPaymentError)
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
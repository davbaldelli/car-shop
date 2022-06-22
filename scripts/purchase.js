import {getCart} from "./utilities/cartManager.js";
import {productsToListElements} from "./formatters/productFormatter.js";
import {addressesToListItems} from "./formatters/addressesFormatter.js";
import {nationsToSelectElements} from "./formatters/nationsFormatter.js";
import {getAllNations} from "./store/nationsStore.js";
import {insertOrder} from "./store/ordersStore.js";
import {addUserAddress, getUserAddresses} from "./store/userStore.js";
import {checkEnoughCredit, payProduct, putAmountInWallet} from "./store/walletStore.js";

let AddressModal = new bootstrap.Modal($(".addNewAddressModal"), {
    keyboard: false
})

let purchaseConfirmModal = new bootstrap.Modal($("#purchaseConfirmModal"), {
    keyboard: true
})

let feedBackToast = new bootstrap.Toast($("#userFeedbackToast"))

$(() => {

    let user = JSON.parse(localStorage.getItem("user"))
    setupProductList(getCart().products)
    setupReceiptView(getCart().products)
    showUserCredits()
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
                checkEnoughCredit(item.product.price * item.quantity, () => {
                    let order = {
                        id_user: user.userId,
                        id_car: item.product.id,
                        state: "pending_payment_confirm",
                        quantity: item.quantity,
                        id_address: address
                    }
                    insertOrder(order, () => onNewOrderSuccess(item))
                }, onNotEnoughCredit)

            }

        )
    })

    $("#rechargeWalletForm").submit((e) => {
        let amount = parseInt($("#creditInput").val())
        putAmountInWallet(amount, () => onRechargeSuccess(amount))
        e.preventDefault()
    })

    $("#goToUserOrders").prop("href", `user-orders.php?userId=${user.userId}`)

})

let toastContent= $("#toastContent")

function onRechargeSuccess(amount) {
    toastContent.html(amount+" credits added successfully")
    feedBackToast.show()
}

function onInsertAddressSuccess(){
    getUserAddresses(setupAddressesList)
    AddressModal.toggle()
}

function onInsertAddressError(){
    console.log("error insert address")
}

function onNewOrderSuccess(item) {
    payProduct(item.product, item.quantity, onPaymentConfirm, onPaymentError)
    purchaseConfirmModal.toggle()
}

function onPaymentConfirm() {
    //TODO Show payment success
}

function onPaymentError() {
    console.log("Payment Error")
}

function onNotEnoughCredit(){
    toastContent.html("Not enough credits for this transaction")
    feedBackToast.show()
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
function setupReceiptView(products) {
    console.log(products)
    $("#subtotal").html(products.reduce((res, item)=> res+(item.quantity*item.product.price), 0))
    $("#itemPriceList").html(products.reduce((res, item)=> res+`
        <li class="row list-receipt-view"><div class="col-xxl-8">${item.product.brand +" "+ item.product.model } </div><div class="col-xxl-4">${item.product.price}</div> </li>
`, ""))
}

function showUserCredits() {
    //TODO Show user credit near radio btn
}
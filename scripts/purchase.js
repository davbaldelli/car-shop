import {
    clearCart,
    decreaseProductQuantity,
    getCart,
    increaseProductQuantity,
    removeProductFromCart, updateProductQuantity
} from "./utilities/cartManager.js";
import {productsToListElements} from "./formatters/productFormatter.js";
import {addressesToRadioInputs} from "./formatters/addressesFormatter.js";
import {nationsToSelectElements} from "./formatters/nationsFormatter.js";
import {getAllNations} from "./store/nationsStore.js";
import {insertOrder} from "./store/ordersStore.js";
import {addUserAddress, getUserAddresses, getUserInfo} from "./store/userStore.js";
import {checkEnoughCredit, payProduct, putAmountInWallet} from "./store/walletStore.js";

let AddressModal = new bootstrap.Modal($(".addNewAddressModal"), {
    keyboard: false
})
let confirmationModal = new bootstrap.Modal($(".purchase-confirm-modal"), {keyboard: false})


let feedBackToast = new bootstrap.Toast($("#userFeedbackToast"))

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    setupProductList(getCart().products)
    setupReceiptView(getCart().products)
    showUserCredits()
    getUserInfo(user => {
        setupAddressesList(user.addresses)
        $("#firstNameInput").val(user.name)
        $("#lastNameInput").val(user.last_name)
    })
    getAllNations(setupNationsSelectOptions)
    $("#addressForm").submit(function(e){
        e.preventDefault()
        let address = $(this).serializeArray().reduce(function (json, { name, value }) {
            json[name] = value;
            return json;
        }, {});
        addUserAddress({
            ...address,
            id_user: user.userId,
        }, onInsertAddressSuccess, onInsertAddressError)
    })
    $("#purchaseBtn").click(() => {
        let address = parseInt($("input[name='delivering-address']:checked").val());
        console.log(address)
        if(address) {
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
        } else {
            AddressModal.toggle()
        }

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
    confirmationModal.toggle()
    clearCart()
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
    $(".remove-cart-product-btn").click((evt) => {
        removeProductFromCart(evt.currentTarget.dataset.key)
        setupProductList(getCart().products)
        setupReceiptView(getCart().products)
    })
    $(".product-quantity-input").change(function (evt){
        updateProductQuantity(evt.currentTarget.dataset.key, $( this ).val())
        setupReceiptView(getCart().products)
    })

}

function setupAddressesList(addresses) {
    $("#addressesList").html(addressesToRadioInputs(addresses).reduce((res, el) => res + el, ""))
}

function setupNationsSelectOptions(nations) {
    $("#nation-select").html(nationsToSelectElements(nations).reduce((res, el) => res + el, ""))
}
function setupReceiptView(products) {
    $("#subtotal").html(products.reduce((res, item)=> res+(item.quantity*item.product.price), 0))
    $("#itemPriceList").html(products.reduce((res, item)=> res+`
        <li class="row list-receipt-view"><div class="col-sm-1">${item.quantity}x</div> <div class="col-xxl-7 truncate">${item.product.brand +" "+ item.product.model } </div><div class="col-xxl-3 list-receipt-view-price">${item.product.price}</div> </li>
`, ""))
}

function showUserCredits() {
    //TODO Show user credit near radio btn
}
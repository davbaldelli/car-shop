import {makePayment, rechargeWallet} from "../loaders/userLoader.js";

export function payProduct(product, quantity, onSuccess, onFailure){
    let user = JSON.parse(localStorage.getItem("user"))
    makePayment("api/user/payments/makepayment.php", {Token: user.token}, {
        userId: user.userId,
        amount: product.price * quantity
    }, onSuccess, onFailure)
}

export function putAmountInWallet(amount, onSuccess, onFailure = () => {}){
    let user = JSON.parse(localStorage.getItem("user"))
    rechargeWallet("api/user/payments/rechargewallet.php", {Token: user.token}, {
        userId: user.userId,
        amount
    }, onSuccess, onFailure)
}
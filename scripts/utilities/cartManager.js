export function addProductToCart(product, quantity) {
    let cart = getCart()
    let added = false
    cart.products.forEach(item => {
        if (item.product.id === product.id) {
            item.quantity += quantity
            added = true;
        }
    })
    if (!added) {
        cart.products.push({product, quantity})
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    $(document).trigger("cartUpdate", cart)
}

export function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"))
    if (cart) {
        return cart
    }
    return {products: []}
}
export function removeProductFromCart(index){
    let cart = getCart()
    cart.products.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    $(document).trigger("cartUpdate", cart)
}
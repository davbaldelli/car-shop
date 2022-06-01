export function addProductToCart(product, quantity){
    let cart = JSON.parse(localStorage.getItem("cart"))
    let added = false
    if(!cart) {
        cart = {products : []}
    }
    cart.products.forEach(item => {
        if(item.product.id === product.id){
            item.quantity += quantity
            added = true;
        }
    })
    if(!added){
        cart.products.push({product, quantity})
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}

export function getCart(){
    let cart = JSON.parse(localStorage.getItem("cart"))
    if(cart){
        return cart
    }
    return {products : []}
}
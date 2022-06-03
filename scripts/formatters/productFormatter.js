export function productsToListElements(products) {
    return products.map(prod => `<div  class="row" style="color : white">${prod.product.model} - x${prod.quantity}</div>`)
}

export function productToDropdownElement(products) {
    return products.map(prod => `<div style="color : white">${prod.product.model} - x${prod.quantity}</div>`)
}
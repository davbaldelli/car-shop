export function productsToListElements(products) {
    return products.map(prod => `    
    <li class="list-group-item purchase-cart-list">
        <label for="purchaseProductQuanity">${prod.product.model}</label>
        <div class="list-item-cart-purchase">
            <input class="form-control" type="number" id="purchaseProductQuantity" value="${prod.quantity}">
            <button class="btn remove-cart-product-btn" data-key="${prod.product.id}"> 
                <span class="material-icons">delete</span>
            </button>
        </div>
    </li>
`)
}

export function productToDropdownElement(products) {
    return products.map(prod => `<div>${prod.product.model} - x${prod.quantity}</div>`)
}
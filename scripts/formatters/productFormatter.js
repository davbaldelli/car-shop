export function productsToListElements(products) {
    return products.map(prod => `    
    <li class="list-group-item purchase-cart-list">
        <label for="purchaseProductQuanity">${prod.product.model} 
            <input class="form-control" type="number" id="purchaseProductQuanity" value="${prod.quantity}">
        </label>
        <button class="btn remove-cart-product-btn" data-key="${prod.product.id}"><span>ICON</span></button>
    </li>
`)
}

export function productToDropdownElement(products) {
    return products.map(prod => `<div>${prod.product.model} - x${prod.quantity}</div>`)
}
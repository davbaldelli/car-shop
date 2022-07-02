
export function productsToListElements(products) {
    return products.map((prod,index) => `    
    <li class="list-group-item purchase-cart-list">
        <label for="product-${index}-quantity-input">${prod.product.model}</label>
        <div class="list-item-cart-purchase">
            <input class="form-control product-quantity-input" id="product-${index}-quantity-input" type="number" value="${prod.quantity}" min="1" data-key="${index}">
            <button class="btn remove-cart-product-btn" data-key="${index}"> 
                <span class="material-icons">delete</span>
            </button>
        </div>
    </li>
`)
}

export function productToDropdownElement(products) {
    return products.map(prod => `<div>${prod.product.model} - x${prod.quantity}</div>`)
}
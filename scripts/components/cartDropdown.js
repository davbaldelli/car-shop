function createCartDropdown(content) {
    return `<div class="dropdown" id="cartDropdownContainer">
                <a class="nav-link " type="button" id="cartDropdownBtn" role="button" data-bs-toggle="dropdown"  data-bs-autoColse="outside" aria-expanded="false">
                    <span class="material-icons"> shopping_cart </span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end list-group-flush"  id="cartContentContainer" aria-labelledby="notify dropdown menu">
                    ${content}
                    <li class="list-group-item cart-dropdown-item cart-content-item">
                        <a class="btn " id="btnCartToPurchase" href="http://localhost/purchase.php"><span class="material-icons"> shopping_cart_checkout </span> <span>Go to check-out</span> </a>
                    </li>
                </ul>
            </div>`
}

function createDropdownElements(cart) {
    return cart.reduce((res, item, index) => {
        return res + `
            <li class="list-group-item cart-dropdown-row" data-key="${index}">
                <div class="cart-dropdown-item"> <strong>${item.quantity}</strong> | <span class="cartProductName">${item.product.model}</span> <span class="remove-cart-product-btn material-icons cartRemoveItem" data-key="${index}">delete</span></div>              
            </li>
        `
    }, "")
}

export function generateCartDropdown(divName, items, onSelected = () => {
}, onRemove = () => {
}) {
    $(`#${divName}`).html(createCartDropdown( createDropdownElements(items)))
    $(".remove-cart-product-btn").click(event => {
        onRemove(event.currentTarget.dataset.key)
    })
}

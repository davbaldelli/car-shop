function createCartDropdown(label, content) {
    return `<div class="dropdown">
                <a class="nav-link dropdown-toggle" type="button" id="cartDropdownBtn" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${label}
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="notify dropdown menu">
                    ${content}
                </ul>
            </div>`
}

function createDropdownElements(cart) {
    return cart.reduce((res, item, index) => {
        return res + `
            <li class="list-group-item cart-dropdown-item" data-key="${index}">
                <div> ${item.product.model} - x${item.quantity}</div>
                <button class="remove-cart-product-btn" data-key="${index}">remove</button>
            </li>
        `
    }, "")
}

export function generateCartDropdown(divName, dropdownLabel, items, onSelected = () => {
}, onRemove = () => {
}) {
    $(`#${divName}`).html(createCartDropdown(dropdownLabel, createDropdownElements(items)))
    $(".remove-cart-product-btn").click(event => {
        onRemove(event.currentTarget.dataset.key)
    })
}

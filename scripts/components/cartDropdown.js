function createCartDropdown(content) {
    return `<div class="dropdown" id="cartDropdownContainer">
                <a class="nav-link " type="button" id="cartDropdownBtn" role="button" data-bs-toggle="dropdown"  data-bs-auto-close="outside" aria-expanded="false">
                    <span class="material-icons"> shopping_cart </span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end list-group-flush"  id="cartContentContainer" aria-labelledby="notify dropdown menu">
                    ${content}                   
                </ul>
            </div>`
}

function createDropdownElements(cart) {
    if(cart.length!==0){
        let x =  cart.reduce((res, item, index) => {
            return res + `
                <li class="list-group-item cart-dropdown-row cart-dropdown-item " data-key="${index}">
                    <div class="cart-content-item"> <strong class="cart-product-quantity">${item.quantity}</strong><span class="cart-product-name">${item.product.model}</span> <span class="remove-cart-product-btn material-icons cartRemoveItem" data-key="${index}">delete</span></div>              
                </li>  
            `
        }, "")
        return x + `<li class="list-group-item cart-dropdown-item cart-content-item " id="defaultCartItem">
                        <a class="btn " id="btnCartToPurchase" href="http://localhost/purchase.php"><span class="material-icons"> shopping_cart_checkout </span> <span>Go to check-out</span> </a>
                    </li>`
    }else {
        return `
            <li class="list-group-item">
                    <div id="emptyCart">
                        <strong><span>Your cart is empty </span><span>Add some cars now!</span></strong>
                        <a id="linkEmptyCartGoToShowRoom" href="brands-showroom.php"><span class="material-icons" id="emptyCartGoToShowRoom">add_shopping_cart</span></a>
                    </div>              
            </li> 
        `
    }
}

export function generateCartDropdown(divName, items, onSelected = () => {}, onRemove = () => {}) {
    $(`#${divName}`).html(createCartDropdown( createDropdownElements(items)))
    $(".remove-cart-product-btn").click(event => {
        onRemove(event.currentTarget.dataset.key)
    })
}

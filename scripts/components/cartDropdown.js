export class CartDropdown {

    #id
    #container
    #items
    #onSelect
    #onRemove

    constructor(id, container, items, onSelected, onRemoved) {
        this.#id = id
        this.#container = container
        this.#items = items
        this.#onSelect = onSelected
        this.#onRemove = onRemoved
        this.#spawnDropdown()
    }

    #spawnDropdown() {
        this.#container.html(this.#composeDropdown())
        $(".remove-cart-product-btn").click(event => {
            this.#onRemove(event.currentTarget.dataset.key)
        })
    }

    updateDropdown(items) {
        this.#items = items
        this.#spawnDropdown()
    }

    #createDropdownElements() {
        if (this.#items.length !== 0) {
            let x = this.#items.reduce((res, item, index) => {
                return res + `
                <li class="list-group-item cart-dropdown-row" data-key="${index}">
                    <div class="cart-dropdown-item cart-content-item">
                        <strong class="cart-product-quantity">${item.quantity}</strong>  
                        <span class="cart-product-name">${item.product.model}</span> 
                        <button class="remove-cart-product-btn"><span class=" material-icons" data-key="${index}">delete</span></button>
                    </div>              
                </li>  
            `
            }, "")
            return x + `<li class="list-group-item cart-dropdown-item ">
                        <a class="btn" id="btnCartToPurchase" href="http://localhost/purchase.php?userId=${this.#getUserID()}"><span class="material-icons"> shopping_cart_checkout </span> <span>Go to check-out</span> </a>
                    </li>`
        } else {
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

    #getUserID() {
        let user = JSON.parse(localStorage.getItem("user"))
        return user ? user.userId : ""
    }

    #composeDropdown() {
        return `<div class="dropdown" id="cart-dropdown">
                    <button class="nav-link" type="button" id="cart-dropdown-btn" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                        <span class="material-icons"> shopping_cart </span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end list-group-flush"  id="cartContentContainer" aria-labelledby="notify dropdown menu">
                        ${this.#createDropdownElements()}
                    </ul>
                </div>`
    }

}
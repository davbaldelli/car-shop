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

    #spawnDropdown(){
        this.#container.html(this.#composeDropdown())
        $(".remove-dropdown-cart-product-btn").click(event => {
            this.#onRemove(event.currentTarget.dataset.key)
        })
    }

    updateDropdown(items){
        this.#items = items
        this.#spawnDropdown()
    }

    #createDropdownElements(){
        return this.#items.reduce((res, item, index) => {
            return res + `
            <li class="list-group-item cart-dropdown-row" data-key="${index}">
                <div class="cart-dropdown-item"> 
                    <strong>${item.quantity}</strong> | <span class="cart-product-name">${item.product.model}</span> 
                    <span class="remove-dropdown-cart-product-btn material-icons cart-remove-item" data-key="${index}">delete</span>
                </div>              
            </li>`
        }, "")
    }

    #getUserID(){
        let user = JSON.parse(localStorage.getItem("user"))
        return user?user.userId:""
    }

    #composeDropdown(){

        return `<div class="dropdown" id="cart-dropdown">
                    <a class="nav-link" type="button" id="cart-dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="material-icons"> shopping_cart </span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end list-group-flush"  id="cart-dropdown-menu" aria-labelledby="notify dropdown menu">
                        ${this.#createDropdownElements()}
                        <li class="list-group-item cart-dropdown-item cart-content-item">
                            <a class="btn " id="cart-purchase-btn" href="http://localhost/purchase.php?userId=${this.#getUserID()}"><span class="material-icons"> shopping_cart_checkout </span> <span>Go to check-out</span> </a>
                        </li>
                    </ul>
                </div>`
    }

}
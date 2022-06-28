export class NotificationDropdown{
    #id
    #container
    #items
    #onSelect
    #onRemoveAll

    constructor(id, container, items, onSelected, onRemoved) {
        this.#id = id
        this.#container = container
        this.#items = items
        this.#onSelect = onSelected
        this.#onRemoveAll = onRemoved
        this.#spawnDropdown()
    }

    #spawnDropdown() {
        this.#container.html(this.#composeDropdown())
        if(this.#items.length===0){
            $('#notificationCounter').remove()
        }else{
            $('#notificationCounter').html(this.#items.length)}
        $(".dropdown-item").click(event => {
            this.#onSelect(event.currentTarget.dataset.key)
        })
        $("#deleteNotificationsBtn").click(() => {
            this.#onRemoveAll(this.#items)
        })
    }

    updateItems(items){
        this.#items = items
        this.#spawnDropdown()
    }

    #composeDropdown(){
        return `<div class="dropdown" id="notificationDropdownContainer">
                <span class="badge rounded-pill bg-danger" id="notificationCounter">
                    <span class="visually-hidden">unread messages</span>
                </span>
                <a class="nav-link" id="notificationDropdownBtn" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                    <span class="material-icons">notifications</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="notify dropdown menu">
                    <div id="notificationHeader">
                    <span>Notification</span>
                    <button id="deleteNotificationsBtn">Clear All</button>
                    </div>
                    <ul class=" list-group-flush" id="notificationDropdownContent">
                        ${this.#createDropdownElements()}
                    </ul>
                </div>
                
            </div>`
    }

    #createDropdownElements(){
        if (this.#items.length !== 0) {
            return this.#items.reduce((res, notify) => {
                return res + `
                <li class="list-group-item notification-list-item" style="background-color: #212529">
                    <div class="d-flex w-100 justify-content-between" style="background-color: #212529">
                        <h5 class="mb-1" style="color: #fff">${notify.title}</h5>
                    </div>
                    <p class="mb-1" style="color: #fff">${notify.description}</p>
                </li>`
                }, "")
        } else {
            return `
                <li class="list-group-item" style="background-color: #212529">
                    <div class="d-flex w-100 justify-content-between" style="background-color: #212529">
                        <h5 class="mb-1" style="color: #fff">No notifications</h5>
                    </div>
                    <p class="mb-1" style="color: #fff">You don't have any notifications</p>
                </li>`
        }
    }
}
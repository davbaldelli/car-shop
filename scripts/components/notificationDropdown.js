function createNotificationDropdown(label, content) {
    return `<div class="dropdown" id="notificationDropdownContainer">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="notificationCounter">
                <span class="visually-hidden">unread messages</span>
                </span>
                <a class="nav-link" id="notificationDropdownBtn" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                    <span class="material-icons">notifications</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end list-group-flush" id="notificationDropdownContent" aria-labelledby="notify dropdown menu" >
                    ${content}
                </ul>
            </div>`
}

function createDropdownList(items) {
    console.log(items)
        if(items.length!=0){
            return items.reduce((res, notify) => {
                return res + `
            <li class="list-group-item notification-list-item" style="background-color: #212529">
                <div class="d-flex w-100 justify-content-between" style="background-color: #212529">
                    <h5 class="mb-1" style="color: #fff">${notify.title}</h5>
                </div>
                <p class="mb-1" style="color: #fff">${notify.description}</p>
            </li>`
            }, "")
        }else{
            return `
                <li class="list-group-item" style="background-color: #212529">
                    <div class="d-flex w-100 justify-content-between" style="background-color: #212529">
                        <h5 class="mb-1" style="color: #fff">No notifications</h5>
                    </div>
                    <p class="mb-1" style="color: #fff">You don't have any notifications</p>
                </li>
        `}
}
export function generateNotifyDropdown(divName, dropdownLabel, items, onSelected = () => {}) {
    $(`#${divName}`).html(createNotificationDropdown(dropdownLabel, createDropdownList(items)))
    $('#notificationCounter').html(items.length)
    $(".dropdown-item").click(event => {
        onSelected(event.currentTarget.dataset.key)
    })
}


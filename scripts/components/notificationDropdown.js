function createNotificationDropdown(label, content) {
    return `<div class="dropdown">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="notificationCounter">99+
                <span class="visually-hidden">unread messages</span>
                </span>
                <a class="nav-link dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                    ${label}
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="notify dropdown menu">
                    ${content}
                </ul>
            </div>`
}

function createDropdownList(items) {
    return items.reduce((res, notify) => {
        return res + `
        <li data-key="${notify.id}">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${notify.title}</h5>
                    <p class="card-title">${notify.description}</p>
                </div>
            </div>
        </li>`
    }, "")
}

export function generateNotifyDropdown(divName, dropdownLabel, items, onSelected = () => {}) {
    $(`#${divName}`).html(createNotificationDropdown(dropdownLabel, createDropdownList(items)))
    $('#notificationCounter').html(items.length)
    $(".dropdown-item").click(event => {
        onSelected(event.currentTarget.dataset.key)
    })
}


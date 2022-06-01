function createNotificationDropdown(label, content){
    return `<div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    ${label}
                </button>
                <ul class="dropdown-menu" aria-labelledby="notify dropdown menu">
                    ${content}
                </ul>
            </div>`
}

function createDropdownList(items){
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
        },"")
}

export function generateNotifyDropdown(divName, dropdownLabel, items, onSelected = () => {}, onUnselected = () => {}){
    $(`#${divName}`).html(createNotificationDropdown(dropdownLabel, createDropdownList(items)))
    $(".dropdown-item").click(event => {
        onSelected(event.currentTarget.dataset.key)
    })
}


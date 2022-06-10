export function notificationToListItems(notifications) {
    return notifications.map(notify => {
        return `<li> <a class="dropdown-item" href="#">${notify.title} - ${notify.description}</a></li>`
    })
}
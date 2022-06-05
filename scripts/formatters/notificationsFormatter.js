export function notificationToListItems(notifications) {
    return notifications.map(notify => {
        return `<div class="row" style="color : white">${notify.title} - ${notify.description}</div>`
    })
}
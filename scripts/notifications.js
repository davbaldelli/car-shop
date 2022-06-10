import {notificationToListItems} from "./formatters/notificationsFormatter.js";
import {getAllUserNotifications} from "./store/notificationsStore.js";

export function setNotification(){
    let user = JSON.parse(localStorage.getItem("user"))
    if (user && user.token) {
        getAllUserNotifications(setNotificationListContent)
    }
}

function setNotificationListContent(notifications) {
    $('#notificationCounter').html(notifications.length)
    console.log(notifications.length)
    $('#notificationsList').html(notificationToListItems(notifications).reduce((res, item) => res + item, ""))
}
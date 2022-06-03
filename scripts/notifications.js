import {notificationToListItems} from "./formatters/notificationsFormatter.js";
import {getAllUserNotifications} from "./store/notificationsStore.js";

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getAllUserNotifications(setNotificationListContent)
    }
})

function setNotificationListContent(notifications){
    //TODO set the counter in the notification icon
    $('#notificationsList').html(notificationToListItems(notifications).reduce((res, item) => res + item, ""))
}
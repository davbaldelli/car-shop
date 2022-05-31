import {getNotifications} from "./loaders/notificationsLoader.js";
import {notificationToListItems} from "./formatters/notificationsFormatter.js";

$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getNotifications("api/user/notifications/all.php",{Token : user.token}, {userId : user.userId},setNotificationListContent)
    }
})

function setNotificationListContent(notifications){
    //TODO set the counter in the notification icon
    $('#notificationsList').html(notificationToListItems(notifications).reduce((res, item) => res + item, ""))
}
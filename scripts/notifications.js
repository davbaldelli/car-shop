import {getAllUserNotifications} from "./store/notificationsStore.js";
import {generateNotifyDropdown} from "./components/notificationDropdown.js";

export function setNotification(){
    let user = JSON.parse(localStorage.getItem("user"))
    if (user && user.token) {
        getAllUserNotifications(setNotificationListContent)
    }
}

function setNotificationListContent(notifications) {
    generateNotifyDropdown("notify-dropdown-container", "Notifications",notifications, () => {})
}
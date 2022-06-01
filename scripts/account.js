import {getNotifications} from "./loaders/notificationsLoader.js";
import {generateNotifyDropdown} from "./components/notificationDropdown.js";


$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        getNotifications("api/user/notifications/all.php",{Token : user.token}, {userId : user.userId},(notifications) => {
            generateNotifyDropdown("notificationDropdownContainer","My Notifications", notifications)
        })
    }
})
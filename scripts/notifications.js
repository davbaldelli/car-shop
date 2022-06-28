import {getAllUserNotifications, updateNotificationsState} from "./store/notificationsStore.js";
import {NotificationDropdown} from "./components/notificationDropdown.js";

let notificationsDropdown

$(()=>{
    dropdownSetup()
})
$(document).on("login",()=>{
    dropdownSetup()
})

function setNotificationListContent(notifications) {
    notificationsDropdown = new NotificationDropdown(20, $("#notify-dropdown-container"), notifications,() => {}, removeNotifications)
}

function dropdownSetup(){
    let user = JSON.parse(localStorage.getItem("user"))
    if (user && user.token) {
        getAllUserNotifications(setNotificationListContent)
    }
}

function removeNotifications(notifications){
    updateNotificationsState(() => {
        getAllUserNotifications(items => notificationsDropdown.updateItems(items))
    }, console.log, ...notifications)
}

function activateHover(){
    let notyDropdown = new bootstrap.Dropdown($("#notificationDropdownBtn"))

    $("#notificationDropdownContainer").hover(function (){
        notyDropdown.show()
    })
}
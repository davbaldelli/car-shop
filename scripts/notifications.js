import {getAllUserNotifications} from "./store/notificationsStore.js";
import {generateNotifyDropdown} from "./components/notificationDropdown.js";


$(()=>{
    dropdownSetup()
})
$(document).on("login",()=>{
    dropdownSetup()
})

function setNotificationListContent(notifications) {
    generateNotifyDropdown("notify-dropdown-container", "Notifications",notifications, () => {})
}

function dropdownSetup(){
    let user = JSON.parse(localStorage.getItem("user"))
    if (user && user.token) {
        getAllUserNotifications(setNotificationListContent)
    }
}
function activateHover(){
    let notyDropdown = new bootstrap.Dropdown($("#notificationDropdownBtn"))

    $("#notificationDropdownContainer").hover(function (){
        notyDropdown.show()
    })
}
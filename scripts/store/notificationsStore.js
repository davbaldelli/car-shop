import {addNotify, getNotifications} from "../loaders/notificationsLoader.js";

export function getAllUserNotifications(...handlers){
    let user = JSON.parse(localStorage.getItem("user"))
    getNotifications("api/user/notifications/all.php",{Token : user.token}, {userId : user.userId}, ...handlers)
}

export function insertNotify(notify, onSuccess, onFail){
    let user = JSON.parse(localStorage.getItem("user"))
    addNotify("api/user/admin/addnotify.php",{Token : user.token}, notify,onSuccess, onFail)
}
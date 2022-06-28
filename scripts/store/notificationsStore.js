import {addNotify, getNotifications, updateNotify} from "../loaders/notificationsLoader.js";

export function getAllUserNotifications(...handlers) {
    let user = JSON.parse(localStorage.getItem("user"))
    getNotifications("api/user/notifications/all.php", {Token: user.token}, {userId: user.userId}, ...handlers)
}

export function insertNotify(notify, onSuccess, onFail) {
    let user = JSON.parse(localStorage.getItem("user"))
    addNotify("api/user/admin/addnotify.php", {Token: user.token}, notify, onSuccess, onFail)
}

export function updateNotificationsState(onSuccess, onFail, ...notifications){
    let user = JSON.parse(localStorage.getItem("user"))
    updateNotify("api/user/notifications/updatestate.php", {Token: user.token},
        {userId: user.userId, ids : notifications.reduce((r,i) => i.id+"-"+r, "")}, onSuccess)
}
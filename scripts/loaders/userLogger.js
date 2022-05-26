export function userAccess(url, data, onSuccess, onFail){
    $.post(url, data, onSuccess).fail(onFail)
}
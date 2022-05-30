export function userAccess(url, data, onSuccess, onFail){
    $.post(url, data, onSuccess).fail(onFail)
}

export function userAuth(url, headers, data, onSuccess, onFail){
    $.ajax({
        type : 'POST',
        url: url,
        data : data,
        headers : headers,
        success : res => (onSuccess(res)),
        error : res => (onFail(res))
    })
}
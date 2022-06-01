export function userAccess(url, data, onSuccess, onFail){
    $.post(url, data, onSuccess).fail(onFail)
}

export function userAuth(url, headers, data, onSuccess, onFail){
    $.ajax({
        type : 'POST',
        url: url,
        data : data,
        headers : headers,
        success : onSuccess,
        error : onFail
    })
}

export function getUserDeliveringAddresses(url, headers, data, onSuccess){
    $.ajax({
        type : 'GET',
        url : url,
        data : data,
        headers : headers,
        success: onSuccess
    })
}

export function addAddress(url, headers = {}, data, handler){
    $.ajax({
        type : 'POST',
        url: url,
        data : JSON.stringify(data),
        headers : headers,
        contentType: 'application/json; charset=utf-8',
        success : res => (handler(res)),
    })
}

export function makePayment(url, headers = {}, data, handler){
    $.ajax({
        type : 'POST',
        url: url,
        data : data,
        headers : headers,
        success : res => (handler(res)),
    })
}

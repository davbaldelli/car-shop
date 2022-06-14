export function userAccess(url, data, onSuccess, onFail) {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: onSuccess,
        error: onFail
    })
}

export function userAuth(url, headers, data, onSuccess, onFail) {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        headers: headers,
        success: onSuccess,
        error: onFail
    })
}

export function getUser(url, headers, data, ...handlers){
    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        headers: headers,
        success: res => {
            if (handlers) {
                handlers.forEach(h => h(res))
            }
        }
    })
}

export function getUserDeliveringAddresses(url, headers, data, ...handlers) {
    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        headers: headers,
        success: res => {
            if (handlers) {
                handlers.forEach(h => h(res))
            }
        }
    })
}

export function addAddress(url, headers = {}, data, onSuccess, onFailure) {
    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(data),
        headers: headers,
        contentType: 'application/json; charset=utf-8',
        success: onSuccess,
        statusCode:{
            500 : onFailure
        }
    })
}

export function makePayment(url, headers = {}, data, onSuccess, onError) {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        headers: headers,
        success: onSuccess,
        statusCode: {
            500: onError
        }
    })
}

export function rechargeWallet(url, headers = {}, data, onSuccess, onError) {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        headers: headers,
        success: onSuccess,
        statusCode: {
            500: onError
        }
    })
}

export function checkCredit(url, headers = {}, data, onSuccess, onError) {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        headers: headers,
        success: onSuccess,
        statusCode: {
            500: onError
        }
    })
}
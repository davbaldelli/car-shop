export function getNotifications(url, headers = {}, data = {},...handlers){
    $.ajax({
        type : 'GET',
        url: url,
        data : data,
        headers : headers,
        contentType : "application/json; charset=utf-8",
        success : res => {
            if(handlers) {
                handlers.forEach(h => h(res))
            }
        }
    })
}

export function addNotify(url, headers = {}, data, handler){
    $.ajax({
        type : 'POST',
        url: url,
        data : JSON.stringify(data),
        headers : headers,
        contentType : "application/json; charset=utf-8",
        success : res => (handler(res)),
    })
}

export function updateNotify(url, headers = {}, data, handler){
    $.ajax({
        type : 'POST',
        url: url,
        data : data,
        headers : headers,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        success : res => (handler(res)),
    })
}
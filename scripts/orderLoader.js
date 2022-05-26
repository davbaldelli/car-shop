export function updateOrder(url, headers = {}, data, handler){
    $.ajax({
        type : 'POST',
        url: url,
        data : data,
        headers : headers,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'application/json',
        success : res => handler(res)
    })
}

export function getOrders(url, options = {}, ...handlers){
    $.get(url, options, (responseObj) => {
        if(handlers){
            handlers.forEach(h => h(responseObj))
        }
    })
}
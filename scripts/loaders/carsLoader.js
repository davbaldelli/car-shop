export function getCars(url, options = {}, ...handlers){
    $.get(url, options, (responseObj) => {
        if(handlers){
            handlers.forEach(h => h(responseObj))
        }
    })
}
export function addCar(url, headers = {}, data, onSuccess, onError){
    $.ajax({
        type : 'POST',
        url: url,
        data : JSON.stringify(data),
        headers : headers,
        contentType: 'application/json; charset=utf-8',
        success : onSuccess,
        statusCode : {
            500 : onError
        }
    })
}
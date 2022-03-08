export function getCars(url, options, handler){
    $.get(url, options, (responseObj) => {
        handler(responseObj)
    })
}
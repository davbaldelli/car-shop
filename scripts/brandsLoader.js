export function getBrands(url, options, handler){
    $.get(url, options, (responseObj) => {
        handler(responseObj)
    })
}
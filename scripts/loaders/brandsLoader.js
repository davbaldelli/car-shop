export function getBrands(url, options = {}, ...handlers) {
    $.get(url, options, (responseObj) => {
        if (handlers) {
            handlers.forEach(h => h(responseObj))
        }
    })
}
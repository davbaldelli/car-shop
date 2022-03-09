export function getCars(url, options, handler, ...optHandlers){
    $.get(url, options, (responseObj) => {
        handler(responseObj)
        if(optHandlers){
            optHandlers.forEach(h => h(responseObj))
        }
    })
}
export function addressesToListItems(addresses){
    return addresses.map(address => {
        return `<div class="row" style="color : white">${address.address_line_1}, ${address.address_line_2}, ${address.postal_code}, ${address.locality}, ${address.administrative_area}</div>`
    })
}
export function addressesToListItems(addresses) {
    return addresses.map(address => {
        return `<input id=address-${address.id} type="radio" style="color : white" name="delivering-address" value="${address.id}">
                <label style="color : white" for="address-${address.id}">${address.address_line_1}, ${address.address_line_2}, ${address.postal_code}, ${address.locality}, ${address.administrative_area}</label>`
    })
}
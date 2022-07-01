export function addressesToRadioInputs(addresses) {
    return addresses.map((address, index) => {
        return `<div>
                    <input id=address-${address.id} type="radio" name="delivering-address" value="${address.id}" ${index === 0 ? "checked" : ""}>
                    <label  for="address-${address.id}">${address.address_line_1} ${address.address_line_2}, ${address.postal_code}, ${address.locality}, ${address.administrative_area}</label>
                </div>
`})
}

export function addressToListItems(addresses){
    return addresses.map((address) => {
        return `<li class="user-address-item">
                    ${address.address_line_1} ${address.address_line_2}, ${address.postal_code}, ${address.locality}, ${address.administrative_area} 
                    <button class="editAddressBtn" data-key="${address.id}">edit</button>
                    <button class="removeAddressBtn" data-key="${address.id}">remove</button>
                </li>`
    })
}
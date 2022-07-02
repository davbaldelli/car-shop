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
                    <span class="flex flex-row">
                        ${address.address_line_1} ${address.address_line_2}, ${address.postal_code}, ${address.locality}, ${address.administrative_area} 
                        <button class="ms-auto editAddressBtn btn-icon" data-key="${address.id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><span class="material-icons">edit</span></button>
                    </span>
                </li>`
    })
}
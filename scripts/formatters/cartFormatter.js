export function cartToListItems(items) {
    return items.map(item => {
        return `<li> <a class="dropdown-item" href="#">${item.id}</a></li>`
    })
}
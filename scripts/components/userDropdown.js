export function generateUserDropdown(containerId, user, elements, onLogout) {
    $(`#${containerId}`).html(`
        <a class="nav-link dropdown-toggle" href="#" id="navbarNavDarkDropdown" role="button" data-bs-toggle="dropdown"
         aria-expanded="false">
             ${user.username}
         </a>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarNavDarkDropdown">
            ${getDropdownLinkList(elements)}
            <li>
                <hr className="dropdown-divider">
            </li>
            <li><a className="dropdown-item" id="logoutBtn">Logout</a></li>
        </ul>
    `)
    $("#logoutBtn").click(onLogout)
}

function getDropdownLinkList(elements) {
    return elements.reduce((res, element) => {
        return res + `<li><a class="dropdown-item" href="${element.link}">${element.label}</a></li>`
    }, "")
}


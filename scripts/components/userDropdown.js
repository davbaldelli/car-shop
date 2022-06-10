export function generateUserDropdown(containerId, user, elements, onLogout) {
    $(`#${containerId}`).html(`
        <div class="dropdown">
            <a class="nav-link dropdown-toggle" id="navbarNavDarkDropdown" role="button" data-bs-toggle="dropdown"
                 aria-expanded="false">${user.username}
            </a>
            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="navbarNavDarkDropdown">
                ${getDropdownLinkList(elements)}
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" id="logoutBtn">Logout</a></li>
            </ul>
        </div>`)
    $("#logoutBtn").click(onLogout)
}

function getDropdownLinkList(elements) {
    return elements.reduce((res, element) => {
        return res + `<li><a class="dropdown-item" href="${element.link}">${element.label}</a></li>`
    }, "")
}


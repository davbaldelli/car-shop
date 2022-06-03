export function generateUserDropdown(containerId, user, elements, onLogout) {
    $(`#${containerId}`).html(`
        <div class="collapse navbar-collapse account-dprdwn" id="navbarNavDarkDropdown">
        <ul class="navbar-nav" id="navbarAccount">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${user.username}
                </a>
                    <ul class="dropdown-menu dropdown-menu-start dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        ${getDropdownLinkList(elements)}
                        <li><hr class="dropdown-divider"></li>
                        <li ><a class="dropdown-item" id="logoutBtn">Logout</a></li>
                    </ul>
            </li>
        </ul>
    </div>
    `)
    $("#logoutBtn").click(onLogout)
}

function getDropdownLinkList(elements) {
    return elements.reduce((res, element) => {
        return res + `<li><a class="dropdown-item" href="${element.link}">${element.label}</a></li>`
    }, "")
}
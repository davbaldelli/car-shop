<nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark  w-100">
    <div class="container-fluid">
        <a class="navbar-brand d-flex " href="index.php"><img class="navbar-logo" src="src_img/carshopcolor.png" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse w-100" id="navbarNav">
            <ul class="navbar-nav navbar-nav w-100 justify-content-start">
                <li class="nav-item">
                    <a class="nav-link <?php isActive("index.php", "active"); ?>" aria-current="page"
                       href="index.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php isActive("showroom.php", "active"); ?>" href="showroom.php">Showroom</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php isActive("contacts.php", "active"); ?>" href="contacts.php">Contacts</a>
                </li>
            </ul>
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                <li class="nav-item dropdown item-hidden" id="navNotification">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="notificationCounter">
                        99+
                        <span class="visually-hidden">unread messages</span>
                    </span>
                    <a class="nav-link dropdown-toggle" href="#" id="navbarNavDarkDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Notify
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-start" id="notificationsList" aria-labelledby="navbarNavDarkDropdown">
                    </ul>
                </li>
                <span class="navbar-text" id="nav-login"><a class=" nav-link login" id="login-dropdown" href="#">Login</a></span>
                <li class="nav-item dropdown" id="content-user-feature">

                </li>
            </ul>

        </div>
    </div>
</nav>

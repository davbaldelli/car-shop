<nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark  w-100">
    <div class="container-fluid">
        <a class="navbar-brand d-flex " href="index.php"><img class="navbar-logo" src="src_img/carshopcolor.png" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                 aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse w-100" id="navbarNav">
            <ul class="navbar-nav w-100 justify-content-start">
                <li class="nav-item">
                    <a class="nav-link <?php isActive("index.php", "active"); ?>" aria-current="page"
                       href="index.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php isActive("brands-showroom.php", "active"); ?>" href="brands-showroom.php">Showroom</a>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto w-100 justify-content-end navbar-nav-dropdowns">
                <li class="nav-item" id="cart-dropdown-container"></li>
                <li class="nav-item" id="notify-dropdown-container"></li>
                <li class="nav-item"><span class="navbar-text" id="nav-login"><a class=" nav-link login" id="login-dropdown" href="#">Login</a></span></li>
                <li class="nav-item" id="content-user-feature"></li>
            </ul>
        </div>
    </div>
</nav>

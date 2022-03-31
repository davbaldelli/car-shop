<nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.php"><img class="navbar-logo" src="src_img/carshopcolor.png" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link <?php isActive("index.php","active");?>" aria-current="page" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php isActive("showroom.php","active");?>" href="showroom.php">Showroom</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php isActive("contacts.php","active");?>"  href="contacts.php">Contacts</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

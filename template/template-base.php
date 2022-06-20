<!DOCTYPE html>
<html lang="it">
<head>
    <title><?php echo $templateParams["title"]; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="referrer" content="origin">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="/css/style.css" rel="stylesheet">
    <?php if (isset($templateParams["page-name"])): ?>
        <meta name="page-name" content="<?php echo $templateParams["page-name"]; ?>"/>
    <?php endif; ?>
    <?php
    if (isset($templateParams["css"])):
        foreach ($templateParams["css"] as $style):
            ?>
            <link href="<?php echo $style; ?>" rel="stylesheet">
        <?php
        endforeach;
    endif;
    ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <!--<script type="module" src="/scripts/utilities/firebase.js"></script>-->
    <?php
    if (isset($templateParams["js"])):
        foreach ($templateParams["js"] as $script):
            ?>
            <script src="<?php echo $script; ?>" type="module"></script>
        <?php
        endforeach;
    endif;
    ?>
    <script src="/scripts/login.js" type="module"></script>
    <script src="/scripts/notifications.js" type="module"></script>
    <script src="/scripts/cart.js" type="module"></script>
</head>
<body class="container-fluid">
<?php
if (isset($templateParams["loginform"])):
    require($templateParams["loginform"]);
endif;
?>

<header class="row">
    <?php
    require($templateParams["navbar"]);
    ?>
</header>
<main class="row">
    <div id="loginToast" class="toast position-absolute p-3 top-0 end-0 align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
                Login success!
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                    aria-label="Close"></button>
        </div>
    </div>
    <?php
    require($templateParams["page"]);
    ?>
</main>
<footer class="row position-sticky footer">
    <?php
    require($templateParams["footer"]);
    ?>
</footer>
</body>

    

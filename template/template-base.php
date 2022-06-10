<!DOCTYPE html>
<html lang="it">
<head>
    <title><?php echo $templateParams["title"]; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="referrer" content="origin">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
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
    <div id="loginToast"
         class="toast position-absolute p-3 top-0 end-0 align-items-center text-white bg-primary border-0" role="alert"
         aria-live="assertive" aria-atomic="true">
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

    

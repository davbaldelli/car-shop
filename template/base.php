<!DOCTYPE html>
<html lang="it">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="referrer" content="origin">
    <title><?php echo $templateParams["title"]; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="/css/style.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <?php
    if(isset($templateParams["js"])):
        foreach($templateParams["js"] as $script):
            ?>
            <script src="<?php echo $script; ?>" type="module"></script>
        <?php
        endforeach;
    endif;
    ?>
</head>
<body>
<header>
    <?php
        require($templateParams["navbar"]);
    ?>
</header>
<main class="container-fluid">
    <?php
        require($templateParams["page"]);
    ?>
</main>
<footer>

</footer>
</body>

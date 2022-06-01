<?php

$templateParams["title"] = "Home";
$templateParams["page"] = "home-page.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["footer"] = "footer.php";
$templateParams["loginform"] = "login-form.php";
$templateParams["js"] = array("/scripts/index.js");
$templateParams["css"] = array("/css/index.css");

require_once("utilities/functions.php");
require("template/template-base.php");
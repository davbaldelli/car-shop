<?php

$templateParams["title"] = "Account";
$templateParams["page"] = "user-page.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["footer"] = "footer.php";
$templateParams["loginform"] = "login-form.php";
$templateParams["js"] = array("/scripts/account.js");
$templateParams["css"] = array("/css/account.css");

require_once("utilities/functions.php");
require("template/base.php");
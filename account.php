<?php

$templateParams["title"] = "Account";
$templateParams["page"] = "user-page.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["footer"] = "footer.php";
$templateParams["js"] = array("/scripts/account.js", "/scripts/loginHTML.js");
$templateParams["css"] = array("/css/account.css");

require_once("utilities/functions.php");
require("template/base.php");
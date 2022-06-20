<?php

$name = $_GET["name"];
$templateParams["title"] = $name;
$templateParams["page"] = "brand-detail-page.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["footer"] = "footer.php";
$templateParams["loginform"] = "login-form.php";
$templateParams["js"] = array("/scripts/brand.js");
$templateParams["css"] = array("/css/showroom.css");


require_once("utilities/functions.php");
require("template/template-base.php");
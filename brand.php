<?php

$name = $_GET["name"];
$templateParams["title"] = $name;
$templateParams["page"] = "car-grid.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["footer"] = "footer.php";
$templateParams["loginform"] = "login-form.php";
$templateParams["js"] = array("/scripts/brand.js", "/scripts/loginHTML.js");
$templateParams["css"] = array("/css/showroom.css");


require_once("utilities/functions.php");
require("template/base.php");
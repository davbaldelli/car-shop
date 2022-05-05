<?php

$name = $_GET["name"];
$templateParams["title"] = $name;
$templateParams["page"] = "car-grid.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["js"] = array("/scripts/brand.js");
$templateParams["css"] = array("/css/showroom.css");
$templateParams["footer"] = "footer.php";

require_once("utilities/functions.php");
require("template/base.php");
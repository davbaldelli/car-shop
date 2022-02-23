<?php
require_once("bootstrap.php");
require_once("cars/car_card.php");

$templateParams["cars"] = $dbh->getAllCars();
$templateParams["title"] = "Car Shop";

require("template/base.php");
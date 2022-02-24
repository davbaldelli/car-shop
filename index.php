<?php
require_once("bootstrap.php");

$templateParams["cars"] = $dbh->getAllCars();
$templateParams["title"] = "Car Shop";

require("template/base.php");
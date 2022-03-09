<?php

require_once "../../db.php";

header('Content-Type: application/json; charset=utf-8');

$dbh = new Db();
$dbh->connect();

$manufacturer = $_GET['name'];


$result = $dbh->getCarsByManufacturer($manufacturer);

echo json_encode($result);

$dbh->disconnect();
<?php

require_once "../db_config.php";

header('Content-Type: application/json; charset=utf-8');

$manufacturer = $_GET['name'];

$result = $dbh->getCarsByManufacturer($manufacturer);

echo json_encode($result);

$dbh->disconnect();
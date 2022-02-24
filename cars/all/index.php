<?php
require_once "../db_config.php";

header('Content-Type: application/json; charset=utf-8');

$result = $dbh->getAllCars();

$dbh->disconnect();

echo json_encode($result);


<?php

require_once "../db_config.php";

header('Content-Type: application/json; charset=utf-8');

$type = $_GET['name'];

$result = $dbh->getCarsByType($type);

echo json_encode($result);

$dbh->disconnect();
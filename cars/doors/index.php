<?php
require_once "../db_config.php";

header('Content-Type: application/json; charset=utf-8');

$n = $_GET['number'];

$result = $dbh->getCarsByDoors($n);

echo json_encode($result);

$dbh->disconnect();
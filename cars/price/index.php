<?php

require_once "../db_config.php";

header('Content-Type: application/json; charset=utf-8');

$max = $_GET['max'];
$min = $_GET['min'];

$result = $dbh->getCasrByPrice($max, $min);

echo json_encode($result);

$dbh->disconnect();
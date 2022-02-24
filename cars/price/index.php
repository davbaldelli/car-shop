<?php

require_once "../../db/db.php";

header('Content-Type: application/json; charset=utf-8');

$dbh = new Db();
$dbh->connect();

$max = $_GET['max'];
$min = $_GET['min'];

$result = $dbh->getCasrByPrice($max, $min);

echo json_encode($result);

$dbh->disconnect();
<?php

require_once "../../db/db.php";

header('Content-Type: application/json; charset=utf-8');

$dbh = new Db();
$dbh->connect();

$type = $_GET['name'];

$result = $dbh->getCarsByType($type);

echo json_encode($result);

$dbh->disconnect();
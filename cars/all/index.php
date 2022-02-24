<?php

require_once "../../db/db.php";

header('Content-Type: application/json; charset=utf-8');

$dbh = new Db();
$dbh->connect();

$result = $dbh->getAllCars();

$dbh->disconnect();

echo json_encode($result);


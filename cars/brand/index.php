<?php

require_once "../../db/db.php";

header('Content-Type: application/json; charset=utf-8');

$dbh = new Db();
$dbh->connect();

$result = $dbh->getCarsByManufacturer($manufacturer);

echo json_encode($result);

$dbh->disconnect();
<?php
require_once "../../db.php";

header('Content-Type: application/json; charset=utf-8');

$dbh = new Db();
$dbh->connect();

$n = $_GET['number'];

$result = $dbh->getCarsByDoors($n);

echo json_encode($result);

$dbh->disconnect();
<?php
require_once "../db.php";

header('Content-Type: application/json; charset=utf-8');

$dbh = new Db();
$dbh->connect();

$result = $dbh->getAllNations();

$dbh->disconnect();

echo json_encode($result);
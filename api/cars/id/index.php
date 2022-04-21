<?php
require_once "../../db.php";

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: localhost");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

$dbh = new Db();
$dbh->connect();

$id = $_GET['id'];

$result = $dbh->getCarById($id);

$dbh->disconnect();

echo json_encode($result);

<?php

include_once "../../db/db.php";
include_once "../car_card.php";
header('Content-Type: application/json; charset=utf-8');

$manufacturer = $_GET['name'];

$db = new Db();
$db->connect();

$result = $db->getCarByManufacturer($manufacturer);

echo json_encode($result);

$db->disconnect();
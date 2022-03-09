<?php

require_once "../../db.php";

header('Content-Type: application/json; charset=utf-8');

$dbh = new Db();
$dbh->connect();

$result = $dbh->getAllCars();

$dbh->disconnect();

$random_indexes = array_rand($result, 5);
$filtered_res = [];

foreach ($random_indexes as $index){
    $filtered_res[] = $result[$index];
}

echo json_encode($filtered_res);
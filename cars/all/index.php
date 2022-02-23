<?php
include_once "../../db.php";
include_once "../car_card.php";
//header('Content-Type: application/json; charset=utf-8');

$db = new Db();
$db->connect();

$result = $db->getAllCars();

$card_array = getCards($result);

foreach ($card_array as $card){
    echo $card;
}


$db->disconnect();
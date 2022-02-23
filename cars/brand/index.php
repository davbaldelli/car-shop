<?php

include_once "../../db.php";
include_once "../car_card.php";

$manufacturer = $_GET['name'];

$db = new Db();
$db->connect();

$result = $db->getCarByManufacturer($manufacturer);

$card_array = getCards($result);

foreach ($card_array as $card){
    echo $card;
}


$db->disconnect();
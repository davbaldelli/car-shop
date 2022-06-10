<?php
require_once "../repositories/RepositoriesFactory.php";

if(!isset($_GET['max'], $_GET['min'])){
    die("'min' 'max' params required");
}

$max = $_GET['max'];
$min = $_GET['min'];

$repo = RepositoriesFactory::GetCarsRepository();

header('Content-Type: application/json; charset=utf-8');

$result = $repo->getCarsByPrice($max, $min);

echo json_encode($result);
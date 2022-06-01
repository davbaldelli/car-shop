<?php
require_once "../repositories/RepositoriesFactory.php";

header('Content-Type: application/json; charset=utf-8');

$repo = RepositoriesFactory::GetCarsRepository();

$max = $_GET['max'];
$min = $_GET['min'];

$result = $repo->getCarsByPrice($max, $min);

echo json_encode($result);
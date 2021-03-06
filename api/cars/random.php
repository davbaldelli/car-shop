<?php
require_once "../repositories/RepositoriesFactory.php";

header('Content-Type: application/json; charset=utf-8');

$repo = RepositoriesFactory::GetCarsRepository();

$result = $repo->getAllCars();

$random_indexes = array_rand($result, 5);
$filtered_res = [];

foreach ($random_indexes as $index) {
    $filtered_res[] = $result[$index];
}

echo json_encode($filtered_res);
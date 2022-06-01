<?php
require_once "../repositories/RepositoriesFactory.php";

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: localhost");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

$repo = RepositoriesFactory::GetCarsRepository();

$result = $repo->getAllCars();

echo json_encode($result);


<?php
require_once "../repositories/RepositoriesFactory.php";

header('Content-Type: application/json; charset=utf-8');

$repo = RepositoriesFactory::GetCarsRepository();

$type = $_GET['name'];

$result = $repo->getCarsByType($type);

echo json_encode($result);
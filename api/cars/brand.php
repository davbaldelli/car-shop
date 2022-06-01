<?php
require_once "../repositories/RepositoriesFactory.php";

header('Content-Type: application/json; charset=utf-8');

$repo = RepositoriesFactory::GetCarsRepository();

$manufacturer = $_GET['name'];

$result = $repo->getCarsByManufacturer($manufacturer);

echo json_encode($result);

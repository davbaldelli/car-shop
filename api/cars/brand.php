<?php
require_once "../repositories/RepositoriesFactory.php";

if(!isset($_GET['name'])){
    http_response_code(500);
    die("'name' param missing");
}

$manufacturer = $_GET['name'];

$repo = RepositoriesFactory::GetCarsRepository();

header('Content-Type: application/json; charset=utf-8');
$result = $repo->getCarsByManufacturer($manufacturer);
echo json_encode($result);




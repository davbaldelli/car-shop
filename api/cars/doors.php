<?php
require_once "../repositories/RepositoriesFactory.php";

if(!isset($_GET['number'])){
    http_response_code(500);
    die("'number' param missing");
}

$n = $_GET['number'];

$repo = RepositoriesFactory::GetCarsRepository();

header('Content-Type: application/json; charset=utf-8');
$result = $repo->getCarsByDoors($n);
echo json_encode($result);

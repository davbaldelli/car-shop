<?php
require_once "../repositories/RepositoriesFactory.php";

if(!isset($_GET['type_name'])){
    die("'type_name' param missing");
}

$type = $_GET['type_name'];

$repo = RepositoriesFactory::GetCarsRepository();

header('Content-Type: application/json; charset=utf-8');

$result = $repo->getCarsByType($type);

echo json_encode($result);
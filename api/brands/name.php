<?php
require_once "../repositories/RepositoriesFactory.php";

if(!isset($_GET['name'])){
    http_response_code(500);
    die("'name' param missing");
}

$name = $_GET['name'];

$repo = RepositoriesFactory::GetManufacturersRepository();

header('Content-Type: application/json; charset=utf-8');

$result = $repo->getManufacturerByName($name);

echo json_encode($result);

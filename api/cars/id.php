<?php
require_once "../repositories/RepositoriesFactory.php";

if(!isset($_GET['id'])){
    http_response_code(500);
    die("'id' param missing");
}

$id = $_GET['id'];

$repo = RepositoriesFactory::GetCarsRepository();

header('Content-Type: application/json; charset=utf-8');

$result = $repo->getCarById($id);

echo json_encode($result);

<?php
require_once "../db.php";
require_once "../repositories/RepositoriesFactory.php";

header('Content-Type: application/json; charset=utf-8');

$repo = RepositoriesFactory::GetCarsRepository();

$n = $_GET['number'];

$result = $repo->getCarsByDoors($n);

echo json_encode($result);

<?php
require_once "../repositories/RepositoriesFactory.php";

header('Content-Type: application/json; charset=utf-8');

$repo = RepositoriesFactory::GetManufacturersRepository();

$result = $repo->getAllBrands();

echo json_encode($result);

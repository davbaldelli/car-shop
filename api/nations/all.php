<?php
require_once "../repositories/RepositoriesFactory.php";

header('Content-Type: application/json; charset=utf-8');

$repo = RepositoriesFactory::GetNationsRepository();

$result = $repo->getAllNations();

echo json_encode($result);
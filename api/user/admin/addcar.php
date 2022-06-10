<?php
require_once "../../repositories/RepositoriesFactory.php";
require_once "../utilities/jwt_token.php";

header('Content-Type:text/plain; charset=utf-8');

if(!isset(getallheaders()["Token"])){
    http_response_code(401);
    die("Missing 'Token' header");
}

$token = getallheaders()["Token"];
$car = json_decode(file_get_contents('php://input'));

$repo = RepositoriesFactory::GetCarsRepository();

$payload = json_decode(getJWTPayload($token));

if (is_jwt_valid($token) && $payload->role === "admin") {
    $response = $repo->addCar($car);
    if ($response === "") {
        http_response_code(200);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($car);
    } else {
        http_response_code(500);
        echo "error while adding the car :" . $response;
    }
} else {
    http_response_code(403);
    echo "you're not allowed";
}



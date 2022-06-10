<?php
require_once "../../repositories/RepositoriesFactory.php";
require_once "../utilities/jwt_token.php";

header('Content-Type:text/plain; charset=utf-8');

if(!isset(getallheaders()["Token"])){
    http_response_code(401);
    die("Missing 'Token' header");
}

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$order = json_decode(file_get_contents('php://input'));

$repo = RepositoriesFactory::GetOrdersRepository();

if (is_jwt_valid($token) && ($payload->role === "admin" || $order->id_user === $payload->id)) {
    $response = $repo->addOrder($order);
    if ($response === "") {
        http_response_code(200);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($order);
    } else {
        http_response_code(500);
        echo "error while adding the car :" . $response;
    }
} else {
    http_response_code(403);
    echo "not allowed to do this operation";
}
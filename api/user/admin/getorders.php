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

$repo = RepositoriesFactory::GetOrdersRepository();

if (is_jwt_valid($token) && $payload->role === "admin") {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($repo->getAllOrders());
} else {
    http_response_code(403);
    echo "You're not allowed";
}

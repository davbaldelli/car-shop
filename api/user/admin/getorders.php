<?php
require_once "../../db.php";
require_once "../../repositories/RepositoriesFactory.php";
require_once "../utilities/jwt_token.php";

header('Content-Type:text/plain; charset=utf-8');

$repo = RepositoriesFactory::GetOrdersRepository();

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

if(is_jwt_valid($token)  && $payload->role === "admin"){
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($repo->getAllOrders());
} else {
    http_response_code(401);
    echo "You're not allowed";
}

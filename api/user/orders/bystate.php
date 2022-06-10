<?php
require_once "../../repositories/RepositoriesFactory.php";
require_once "../utilities/jwt_token.php";

header('Content-Type:text/plain; charset=utf-8');

if(!isset(getallheaders()["Token"])){
    http_response_code(401);
    die("Missing 'Token' header");
}

if(!isset($_GET["userId"], $_GET["state"])){
    http_response_code(500);
    die("'userId' 'state' params required");
}

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$userId = $_GET["userId"];
$state = $_GET["state"];

$repo = RepositoriesFactory::GetOrdersRepository();

if (is_jwt_valid($token) && ($payload->role === "admin" || $userId == $payload->id)) {
    http_response_code(200);
    header('Content-Type: application/json; charset=utf-8');
    $res = $repo->getUserOrdersByState($userId, $state);
    echo json_encode($res);
} else {
    http_response_code(403);
    echo "You're not allowed";
}
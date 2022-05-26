<?php

require_once "../utilities/jwt_token.php";
require_once "../../db.php";

header('Content-Type:text/plain; charset=utf-8');

$db = new Db();
$db->connect();


$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$userId = $_GET["userId"];
var_dump($userId);

if(is_jwt_valid($token)  && ($payload->role === "admin" || $userId == $payload->id)){
    http_response_code(200);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($db->getUserOrders($userId));
} else {
    http_response_code(401);
    echo "You're not allowed";
}
<?php

require_once "../utilities/jwt_token.php";
require_once "../../db.php";

header('Content-Type: application/json; charset=utf-8');

$db = new Db();
$db->connect();


$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$userId = $_GET["userId"];
var_dump($userId);

if(is_jwt_valid($token)  && ($payload->role === "admin" || $userId == $payload->id)){
    echo json_encode($db->getUserOrders($userId));
} else {
    echo "You're not allowed";
}
<?php

require_once "../utilities/jwt_token.php";
require_once "../../db.php";

header('Content-Type: application/json; charset=utf-8');

$db = new Db();
$db->connect();


$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

if(is_jwt_valid($token)  && $payload->role === "admin"){
    echo json_encode($db->getAllOrders());
} else {
    echo "You're not allowed";
}

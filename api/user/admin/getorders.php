<?php

require_once "../utilities/jwt_token.php";
require_once "../../db.php";

header('Content-Type:text/plain; charset=utf-8');

$db = new Db();
$db->connect();


$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

if(is_jwt_valid($token)  && $payload->role === "admin"){
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($db->getAllOrders());
} else {
    http_response_code(401);
    echo "You're not allowed";
}

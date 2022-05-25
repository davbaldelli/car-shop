<?php

require_once "../utilities/jwt_token.php";
require_once "../../db.php";

header('Content-Type: application/json; charset=utf-8');

$db = new Db();
$db->connect();

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$order = json_decode(file_get_contents('php://input'));

if(is_jwt_valid($token)  && ($payload->role === "admin" || $order->username === $payload->username)){
    $response = $db->addOrder($order);
    if($response === ""){
        http_response_code(200);
        echo json_encode($order);
    } else {
        http_response_code(500);
        echo "error while adding the car :".$response;
    }
} else {
    echo "not allowed to do this operation";
}
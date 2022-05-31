<?php
require_once "../utilities/jwt_token.php";
require_once "../../db.php";

header('Content-Type:text/plain; charset=utf-8');

$db = new Db();
$db->connect();


$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$userId = $_POST["userId"];
$amount = $_POST["amount"];

if(is_jwt_valid($token)  && ($payload->role === "admin" || $userId == $payload->id)) {
    if($db->makePayment($userId,$amount)) {
        http_response_code(200);
        echo "payed";
    } else {
        http_response_code(500);
        echo "not enough credit";
    }
} else {
    http_response_code(401);
    echo "You're not allowed";
}

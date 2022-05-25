<?php
require_once "utilities/jwt_token.php";
require_once "../../db.php";

header('Content-Type: application/json; charset=utf-8');

$db = new Db();
$db->connect();

$token = getallheaders()["Token"];
$car = json_decode(file_get_contents('php://input'));

$payload = json_decode(getJWTPayload($token));

if(is_jwt_valid($token) && $payload->role === "admin"){
    $response = $db->addCar($car);
    if($response === ""){
        http_response_code(200);
        echo json_encode($car);
    } else {
        http_response_code(500);
        echo "error while adding the car :".$response;
    }
} else {
    echo "you're not allowed";
}



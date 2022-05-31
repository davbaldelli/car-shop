<?php
require_once "../utilities/jwt_token.php";
require_once "../../db.php";

header('Content-Type:text/plain; charset=utf-8');

$db = new Db();
$db->connect();

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$address = json_decode(file_get_contents('php://input'));

if(is_jwt_valid($token)  && ($payload->role === "admin" || $address->id_user === $payload->id)){
    $response = $db->addUserAddress($address);
    if($response === ""){
        http_response_code(200);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($address);
    } else {
        http_response_code(500);
        echo "error while adding the car :".$response;
    }
} else {
    http_response_code(401);
    echo "not allowed to do this operation";
}

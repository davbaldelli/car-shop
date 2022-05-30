<?php


require_once "utilities/jwt_token.php";
require_once "../db.php";

header('Content-Type:text/plain; charset=utf-8');

$db = new Db();
$db->connect();


$token = getallheaders()["Token"];
$user_id = $_POST["user_id"];
$role = $_POST["role"];

$payload = json_decode(getJWTPayload($token));


if(is_jwt_valid($token) && $payload->id == $user_id && $payload->role === $role){
    http_response_code(200);
    echo "Verified";
} else {
    http_response_code(401);
    echo "Not Verified";
}
<?php

require_once "../utilities/jwt_token.php";
require_once "../../db.php";

header('Content-Type: application/json; charset=utf-8');

$db = new Db();
$db->connect();

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$id = $_POST["id"];
$state = $_POST["state"];

if(is_jwt_valid($token) && $payload->role === "admin"){
    if (json_encode($db->updateOrder($id, $state))){
        http_response_code(200);
        echo "Update Successful";
    } else {
        http_response_code(500);
        echo "Order update failed";
    }
}


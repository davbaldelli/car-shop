<?php

require_once "../utilities/jwt_token.php";
require_once "../../db.php";

header('Content-Type:text/plain; charset=utf-8');

$db = new Db();
$db->connect();

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$id = $_POST["id"];
$state = $_POST["state"];

if(is_jwt_valid($token) && $payload->role === "admin"){
    $res = $db->updateOrder($id, $state);
    if ($res != null){
        http_response_code(200);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($res);
    } else {
        http_response_code(500);
        echo "Order update failed";
    }
} else {
    http_response_code(401);
    echo "Not Authorized";
}


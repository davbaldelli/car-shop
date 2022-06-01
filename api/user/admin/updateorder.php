<?php
require_once "../../repositories/RepositoriesFactory.php";
require_once "../utilities/jwt_token.php";

header('Content-Type:text/plain; charset=utf-8');

$repo = RepositoriesFactory::GetOrdersRepository();

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$id = $_POST["id"];
$state = $_POST["state"];

if(is_jwt_valid($token) && $payload->role === "admin"){
    $res = $repo->updateOrder($id, $state);
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


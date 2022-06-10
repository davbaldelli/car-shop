<?php
require_once "../utilities/jwt_token.php";
require_once "../../repositories/RepositoriesFactory.php";

header('Content-Type:text/plain; charset=utf-8');

if(!isset(getallheaders()["Token"])){
    http_response_code(401);
    die("Missing 'Token' header");
}

$token = getallheaders()["Token"];
$notify = json_decode(file_get_contents('php://input'));

$payload = json_decode(getJWTPayload($token));

$repo = RepositoriesFactory::GetNotificationsRepository();

if (is_jwt_valid($token) && $payload->role === "admin") {
    $response = $repo->addNotify($notify);
    if ($response === "") {
        http_response_code(200);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($notify);
    } else {
        http_response_code(500);
        echo "error while adding the car :" . $response;
    }
} else {
    http_response_code(403);
    echo "you're not allowed";
}
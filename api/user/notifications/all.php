<?php
require_once "../utilities/jwt_token.php";
require_once "../../repositories/RepositoriesFactory.php";

header('Content-Type:text/plain; charset=utf-8');

$repo = RepositoriesFactory::GetNotificationsRepository();

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$userId = $_GET["userId"];

if(is_jwt_valid($token)  && ($payload->role === "admin" || $userId == $payload->id)){
    http_response_code(200);
    header('Content-Type: application/json; charset=utf-8');
    $res = $repo->getUserNotifications($userId);
    echo json_encode($res);
} else {
    http_response_code(401);
    echo "You're not allowed";
}

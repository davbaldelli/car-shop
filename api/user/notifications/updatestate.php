<?php
require_once "../../repositories/RepositoriesFactory.php";
require_once "../utilities/jwt_token.php";

header('Content-Type:text/plain; charset=utf-8');

if(!isset(getallheaders()["Token"])){
    http_response_code(401);
    die("Missing 'Token' header");
}

if(!isset($_POST["userId"])){
    http_response_code(500);
    die("'userId' param missing");
}

if(!isset($_POST["ids"])){
    http_response_code(500);
    die("'ids' param missing");
}


$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$userId = $_POST["userId"];

$notifications_ids = explode("-", $_POST["ids"]);

$repo = RepositoriesFactory::GetNotificationsRepository();

if (is_jwt_valid($token) && ($payload->role === "admin" || $userId == $payload->id)) {
    http_response_code(200);
    $res = $repo->setNotificationRead($notifications_ids);
    echo "success";
} else {
    http_response_code(403);
    echo "You're not allowed";
}
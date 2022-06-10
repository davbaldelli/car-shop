<?php
require_once "../utilities/jwt_token.php";
require_once "../../repositories/RepositoriesFactory.php";

header('Content-Type:text/plain; charset=utf-8');

if(!isset(getallheaders()["Token"])){
    http_response_code(401);
    die("Missing 'Token' header");
}

if(!isset($_POST["userId"], $_POST["amount"])){
    http_response_code(500);
    die("'userId' 'amount' params required");
}

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$userId = $_POST["userId"];
$amount = $_POST["amount"];

$repo = RepositoriesFactory::GetPaymentsRepository();

if (is_jwt_valid($token) && ($payload->role === "admin" || $userId == $payload->id)) {
    $res = $repo->rechargeWallet($userId, $amount);
    if ($res == "") {
        http_response_code(200);
        echo "recharged wallet";
    } else {
        http_response_code(500);
        echo $res;
    }
} else {
    http_response_code(403);
    echo "You're not allowed";
}
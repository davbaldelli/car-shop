<?php
require_once "../utilities/jwt_token.php";
require_once "../../repositories/RepositoriesFactory.php";

header('Content-Type:text/plain; charset=utf-8');

$repo = RepositoriesFactory::GetPaymentsRepository();

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$userId = $_POST["userId"];
$amount = $_POST["amount"];

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
    http_response_code(401);
    echo "You're not allowed";
}
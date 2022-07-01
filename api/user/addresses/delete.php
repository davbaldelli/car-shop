<?php
require_once "../../repositories/RepositoriesFactory.php";
require_once "../utilities/jwt_token.php";

header('Content-Type:text/plain; charset=utf-8');

if (!isset(getallheaders()["Token"])) {
    http_response_code(401);
    die("Missing 'Token' header");
}

if(!isset($_POST["addressId"])){
    http_response_code(500);
    die("Missing 'addressId' param");
}



if(!isset($_POST["userId"])){
    http_response_code(500);
    die("Missing 'userId' param");
}

$token = getallheaders()["Token"];

$payload = json_decode(getJWTPayload($token));

$id_address = $_POST["addressId"];
$id_user = $_POST["userId"];

$repo = RepositoriesFactory::GetAddressesRepository();

if (is_jwt_valid($token) && ($payload->role === "admin" || $id_user == $payload->id)) {
    $response = $repo->deleteAddress($id_address);
    if ($response === "") {
        echo "deleted successfully";
    } else {
        http_response_code(500);
        echo "error while adding the car :" . $response;
    }
} else {
    http_response_code(403);
    echo "not allowed to do this operation";
}

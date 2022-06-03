<?php
require_once "../repositories/RepositoriesFactory.php";
require_once "utilities/jwt_token.php";

$repo = RepositoriesFactory::GetLoginRepository();

$username = $_POST["username"];
$password = $_POST["password"];

$user = $repo->signIn($username, $password);

if ($user != null) {
    http_response_code(200);
    header('Content-Type: application/json; charset=utf-8');
    $role = $user[0]["role"];
    $user_id = $user[0]["id"];
    echo json_encode(["username" => $username, "id" => $user_id, "role" => $role, "token" => generateToken($username, $role, $user_id)]);
} else {
    http_response_code(401);
    echo "username already taken";
}

exit;

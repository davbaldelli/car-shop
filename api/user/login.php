<?php
require_once "../db.php";
require_once "utilities/jwt_token.php";

header('Content-Type: application/json; charset=utf-8');

$db = new Db();
$db->connect();

$username = $_POST["username"];
$password = $_POST["password"];



$user = $db->login($username, $password);

if (count($user) != 0) {
    http_response_code(200);
    $role = $user[0]["role"];
    $user_id = $user[0]["id"];
    echo json_encode(["username" => $username,"id_user"=> $user_id, "role" => $role, "token" => generateToken($username, $role,$user_id)]);
} else {
    http_response_code(401);
    echo "wrong username or password";
}

exit;

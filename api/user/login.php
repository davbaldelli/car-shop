<?php
require_once "../db.php";
$db = new Db();
$db->connect();

$username = $_POST["username"];
$password = $_POST["password"];

if ($db->login($username, $password)){
    http_response_code(200);
} else {
    http_response_code(401);
    echo "wrong username or password";
}

exit;

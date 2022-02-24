<?php
require_once "../db/db.php";
$db = new Db();
$db->connect();

$username = $_POST["username"];
$password = $_POST["password"];

var_dump($_POST);

if ($db->login($username, $password)){
    http_response_code(200);
} else {
    http_response_code(404);
}

exit;

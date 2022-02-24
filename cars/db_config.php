<?php
require_once ('../../db/db.php');

$dbCredFile = file_get_contents("../../local_res/db_cred.json");
$dbCred = json_decode($dbCredFile, true);

$dbh = new Db();
$dbh->connect($dbCred["db"], $dbCred["username"], $dbCred["password"], $dbCred["host"]);
<?php

header("Access-Control-Allow-Origin: localhost");

class Db
{
    private mysqli $conn;

    function __construct()
    {
        define('ROOTPATH', __DIR__);
        $dbCredFile = file_get_contents(ROOTPATH . "/../../../local_res/db_cred.json");
        $dbCred = json_decode($dbCredFile, true);

        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        try {
            $this->conn = new mysqli($dbCred["host"], $dbCred["username"], $dbCred["password"], $dbCred["db"]);
        } catch (Exception $e){
            header('Content-Type:text/plain; charset=utf-8');
            http_response_code(500);
            die("MYSqlI connection error: ".$e->getMessage());
        }
    }

    function getConnection(): mysqli
    {
        return $this->conn;
    }

}



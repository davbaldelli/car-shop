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
        $this->conn = new mysqli($dbCred["host"], $dbCred["username"], $dbCred["password"], $dbCred["db"]);

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    function getConnection(): mysqli
    {
        return $this->conn;
    }

}



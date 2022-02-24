<?php
class Db
{
    private mysqli $conn;

    function connect()
    {
        define('ROOTPATH', __DIR__);
        $dbCredFile = file_get_contents(ROOTPATH."/../local_res/db_cred.json");
        $dbCred = json_decode($dbCredFile, true);

        $this->conn = new mysqli($dbCred["host"], $dbCred["username"], $dbCred["password"], $dbCred["db"]);

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    function getAllCars()
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByManufacturer($manu)
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE brand = ?");
        $stmt->bind_param('s', $manu);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByType($type){
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE car_type = ?");
        $stmt->bind_param('s', $type);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByPrice($max, $min){
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE price BETWEEN ? AND ?");
        $stmt->bind_param('ii', $max, $min);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByDoors($n){
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE doors = ?");
        $stmt->bind_param('i', $n);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function login($username, $password): bool
    {
        $stmt = $this->conn->prepare("SELECT username, role, salt FROM users WHERE username = ? AND password = SHA2(CONCAT(?, salt),?)");
        $length = 224;
        $stmt->bind_param("ssi", $username, $password, $length);
        $stmt->execute();
        return count($stmt->get_result()->fetch_all(MYSQLI_ASSOC)) != 0;
    }

    function disconnect()
    {
        $this->conn->close();
    }
}

